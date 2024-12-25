import { dialog } from "electron";
import fs from "fs/promises";
import { Command } from "./command";

export class SaveFileCommand implements Command {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  async execute(): Promise<string | null> {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Save File",
    });

    if (canceled || !filePath) {
      return null;
    }

    await fs.writeFile(filePath, this.content, "utf-8");
    return filePath;
  }
}