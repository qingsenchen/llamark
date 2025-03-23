import { dialog, app, BrowserWindow, Menu, MenuItem } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

const RECENT_FILES_PATH = path.join(app.getPath('userData'), 'recentFiles.json');

interface RecentFile {
  path: string;
  lastOpened: string;
}

export class FileManager {
  private filePath: string | null = null
  private fileContent: string = ""
  private recentFiles: RecentFile[] = []
  private readonly maxRecentFiles = 5

  constructor() {
    this.loadRecentFiles()
  }

  // 新建文件
  newFile() {
    this.filePath = null;
    this.fileContent = "";
    console.log("New file created")
  }

  // 打开文件
  async openFile(window: BrowserWindow) {
    const result = await dialog.showOpenDialog(window, {
      properties: ['openFile'],
      filters: [{ name: 'Markdown Files', extensions: ['md'] }]
    });

    if (!result.canceled && result.filePaths.length > 0) {
      this.filePath = result.filePaths[0]
      this.fileContent = fs.readFileSync(this.filePath, 'utf-8')
      this.addRecentFile(this.filePath)
      this.updateRecentFilesMenu()
      app.addRecentDocument(this.filePath)
      console.log("File opened:", this.filePath);
    }
  }

  // 保存文件
  async saveFile(window: BrowserWindow) {
    if (!this.filePath) {
      return this.saveFileAs(window);
    }
    fs.writeFileSync(this.filePath, this.fileContent, 'utf-8')
    console.log("File saved:", this.filePath)
  }

  // 另存为
  async saveFileAs(window: BrowserWindow) {
    const result = await dialog.showSaveDialog(window, {
      defaultPath: path.join(app.getPath('documents'), 'Untitled.md'),
      filters: [{ name: 'Markdown Files', extensions: ['md'] }]
    });

    if (!result.canceled && result.filePath) {
      this.filePath = result.filePath
      this.saveFile(window)
      this.addRecentFile(this.filePath)
      this.updateRecentFilesMenu()
      app.addRecentDocument(this.filePath)
    }
  }

  // 设置文件内容
  setContent(content: string) {
    this.fileContent = content;
  }

  // 获取当前文件信息
  getFileInfo() {
    return { filePath: this.filePath, fileContent: this.fileContent };
  }

  private addRecentFile(filePath: string) {
    const timestamp = new Date().toISOString();
    this.recentFiles = this.recentFiles.filter(file => file.path !== filePath);
    this.recentFiles.unshift({ path: filePath, lastOpened: timestamp });
    if (this.recentFiles.length > this.maxRecentFiles) {
      this.recentFiles.pop();
    }
    this.saveRecentFiles();
    console.log("Recent files:", this.recentFiles);
  }

  getRecentFiles(): RecentFile[] {
    return this.recentFiles;
  }

  private saveRecentFiles() {
    fs.writeFileSync(RECENT_FILES_PATH, JSON.stringify(this.recentFiles, null, 2), 'utf-8');
  }

  private loadRecentFiles() {
    if (fs.existsSync(RECENT_FILES_PATH)) {
      this.recentFiles = JSON.parse(fs.readFileSync(RECENT_FILES_PATH, 'utf-8'));
    }
  }

  updateRecentFilesMenu() {
    const menu = Menu.getApplicationMenu();
    if (!menu) return;

    const fileMenu = menu.items.find(item => item.label === "File");
    if (!fileMenu || !fileMenu.submenu) return;

    let recentSubMenu = fileMenu.submenu.items.find(item => item.label === "Recent Files")?.submenu;
    if (!recentSubMenu) {
      recentSubMenu = new Menu();
      fileMenu.submenu.append(new MenuItem({ label: "Recent Files", submenu: recentSubMenu }));
    }
    
    if (this.recentFiles.length > 0) {
      this.recentFiles.forEach(file => {
        recentSubMenu.append(new MenuItem({
          label: file.path,
          click: () => this.openFile(BrowserWindow.getFocusedWindow()!)
        }));
      });
      recentSubMenu.append(new MenuItem({ type: 'separator' }));
      recentSubMenu.append(new MenuItem({
        label: "Clear Recent Files",
        click: () => {
          this.recentFiles = [];
          this.saveRecentFiles();
          this.updateRecentFilesMenu();
        }
      }));
    }

    Menu.setApplicationMenu(menu);
  }
}

