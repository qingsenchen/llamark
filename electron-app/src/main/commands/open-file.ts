import { dialog } from "electron";
import fs from "fs/promises";
import { Command } from "./command";

export class OpenFileCommand implements Command {
  async execute(): Promise<string | null> {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ["openFile"],
    });

    if (canceled || filePaths.length === 0) {
      return null;
    }

    const content = await fs.readFile(filePaths[0], "utf-8");
    return content;
  }
}