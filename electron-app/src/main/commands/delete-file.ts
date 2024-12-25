// src/commands/DeleteFileCommand.ts
import fs from "fs/promises";
import { Command } from "./command";

export class DeleteFileCommand implements Command {
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async execute(): Promise<string> {
    await fs.unlink(this.filePath);
    return `File deleted: ${this.filePath}`;
  }
}
