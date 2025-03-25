import { app, Menu, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import dockIcon from '../../resources/icon.a.png?asset'
import { getLlama, LlamaChatSession } from 'node-llama-cpp'
import llamaPath from '../../../models/qwen2.5-0.5b-instruct-q4_k_m.gguf?asset'
import { FileManager } from './invoker/file-manager'

const fileManager = new FileManager()

function updateMenu(mainWindow): void {
  const isMac = process.platform === 'darwin'
  const template: Electron.MenuItemConstructorOptions[] = []

  fileManager.getRecentFiles().forEach(()=> { return {} })

  if (isMac) {
    template.push({
      label: 'Llamark',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    })
  }

  template.push({
    label: 'File',
    submenu: [
      {
        label: 'New',
        accelerator: '',
        click: async (): Promise<void> => {
          await fileManager.newFile()
          return await mainWindow.webContents.send('llamark::setMarkdown', fileManager.getFileInfo().fileContent)
        }
      },
      {
        label: 'Open File',
        accelerator: '',
        click: async (): Promise<void> => {
          const result = await fileManager.openFile(mainWindow)
          if (result && result.canceled) return
          console.log(fileManager.getFileInfo().fileContent)
          updateMenu(mainWindow)
          return await mainWindow.webContents.send('llamark::setMarkdown', fileManager.getFileInfo().fileContent)
        }
      },
      {
        label: 'Recent Files',
        submenu: fileManager.getRecentFiles().map((fileInfo) => ({
          label: path.basename(fileInfo.path), // 显示文件名
          click: () => fileManager.openFile(mainWindow), // 点击时打开文件
        })),
      },
      { type: 'separator' },
      {
        label: 'Save',
        accelerator: 'Cmd+S',
        click: async (): Promise<void> => {

          ipcMain.handleOnce('electron::getMarkdown', async (_event, content) => {
            fileManager.setContent(content)
            await fileManager.saveFile(mainWindow)
            return await fileManager.saveFile(mainWindow)
          })
          return await mainWindow.webContents.send('llamark::getMarkdown')
        }
      },
      {
        label: 'Save As...',
        click: async (): Promise<void> => {

          ipcMain.handleOnce('electron::getMarkdown', async (_event, content) => {
            fileManager.setContent(content)
            await fileManager.saveFile(mainWindow)
            return await fileManager.saveFileAs(mainWindow)
          })
          updateMenu(mainWindow)
          return await mainWindow.webContents.send('llamark::getMarkdown')
        }
      },
      { type: 'separator' },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  })

  template.push({
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  })

  template.push({
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  })

  template.push({
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async (): Promise<void> => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  })

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

let iconPath
if (process.platform === 'win32') {
  iconPath = join(__dirname, '../../resources/llamark.ico');
} else if (process.platform === 'darwin') {
  iconPath = join(__dirname, '../../resources/llamark.icns');
  console.log(iconPath)
} else {
  iconPath = join(__dirname, '../../resources/llamark.png');
}


function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    icon: iconPath,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.mjs'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  updateMenu(mainWindow)
}

async function chat(_event: Electron.IpcMainInvokeEvent, userPrompt: string): Promise<string> {
  const llama = await getLlama()
  const model = await llama.loadModel({
    modelPath: llamaPath
  })
  const context = await model.createContext()
  const session = new LlamaChatSession({
    systemPrompt: '你是潦草笔记团队开发的写作助手。',
    contextSequence: context.getSequence()
  })
  console.log('User: ' + userPrompt)
  return session.prompt(userPrompt, {
    temperature: 0.8,
    maxTokens: 1000,
    onTextChunk: (text) => {
      _event.sender.send('ai-reply', text)
    }
  })
}

ipcMain.handle('ask-ai', chat)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.llamark.app')

  if (process.platform === 'darwin') {

    app.dock.setIcon(icon)
  }

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('get-content', (content) => {
    console.log(content)
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
