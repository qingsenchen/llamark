import { dialog, app, BrowserWindow } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

export class FileManager {
  private filePath: string | null = null;
  private fileContent: string = "";

  constructor() {}

  // 新建文件
  newFile() {
    this.filePath = null;
    this.fileContent = "";
    console.log("New file created");
  }

  // 打开文件
  async openFile(window: BrowserWindow) {
    const result = await dialog.showOpenDialog(window, {
      properties: ['openFile'],
      filters: [{ name: 'Markdown Files', extensions: ['md'] }]
    });

    if (!result.canceled && result.filePaths.length > 0) {
      this.filePath = result.filePaths[0];
      this.fileContent = fs.readFileSync(this.filePath, 'utf-8');
      console.log("File opened:", this.filePath);
    }
  }

  // 保存文件
  async saveFile(window: BrowserWindow) {
    if (!this.filePath) {
      return this.saveFileAs(window);
    }
    fs.writeFileSync(this.filePath, this.fileContent, 'utf-8');
    console.log("File saved:", this.filePath);
  }

  // 另存为
  async saveFileAs(window: BrowserWindow) {
    const result = await dialog.showSaveDialog(window, {
      defaultPath: path.join(app.getPath('documents'), 'Untitled.md'),
      filters: [{ name: 'Markdown Files', extensions: ['md'] }]
    });

    if (!result.canceled && result.filePath) {
      this.filePath = result.filePath;
      this.saveFile(window);
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
}

