// src/invoker/FileInvoker.ts
import { Command } from "../commands/command";

export class FileInvoker {
  private commandHistory: Command[] = [];

  async executeCommand(command: Command): Promise<any> {
    const result = await command.execute();
    this.commandHistory.push(command);
    return result;
  }

  getHistory(): Command[] {
    return this.commandHistory;
  }
}
