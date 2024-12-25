import { dialog } from "electron";
import { Command } from "./command";

export class OpenFolderCommand implements Command {
  async execute(): Promise<string[] | null> {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });

    if (canceled || filePaths.length === 0) {
      return null;
    }

    return filePaths;
  }
}
