import { Crepe } from '@milkdown/crepe'
import '@milkdown/crepe/theme/common/style.css'

// We have some themes for you to choose
import '@milkdown/crepe/theme/frame.css'
import { QsApp } from './app'
function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
    createEditor()
  })
}

function doAThing(): void {
  const versions = window.electron.process.versions
  replaceText('.electron-version', `Electron v${versions.electron}`)
  replaceText('.chrome-version', `Chromium v${versions.chrome}`)
  replaceText('.node-version', `Node v${versions.node}`)

  const ipcHandlerBtn = document.getElementById('ipcHandler')
  ipcHandlerBtn?.addEventListener('click', () => {
    window.electron.ipcRenderer.send('ping')
  })

  customElements.define('qs-app', QsApp)
}

function createEditor(): void {
  const crepe = new Crepe({
    root: document.getElementById('app'),
    defaultValue: 'Hello, LlaMark!',
    electron: window.electron
  })

  crepe.create().then(() => {
    console.log('Editor created')
  })

  // Receive messages from the main process
  window.electron.ipcRenderer.on('llamark::getMarkdown', (_, args) => {
    console.log(crepe.getMarkdown(), args)
    return window.electron.ipcRenderer.invoke('electron::getMarkdown', crepe.getMarkdown())
  })

  window.electron.ipcRenderer.on('llamark::setMarkdown', (_, args) => {
    console.log(crepe.getMarkdown(), args)
    return crepe.setMarkdown(args)
  })
}

function replaceText(selector: string, text: string): void {
  const element = document.querySelector<HTMLElement>(selector)
  if (element) {
    element.innerText = text
  }
}

init()
