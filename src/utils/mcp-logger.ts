import chalk from 'chalk';

export interface McpContent {
  type: 'text';
  text: string;
  [key: string]: unknown;
}

export interface McpResponse {
  content: McpContent[];
  isError?: boolean;
  [key: string]: unknown;
}

export class McpLogger {
  private content: McpContent[] = [];
  private isMcpMode: boolean;

  constructor(isMcpMode: boolean) {
    this.isMcpMode = isMcpMode;
  }

  log(...messages: any[]): void {
    const message = messages.join(' ');
    if (this.isMcpMode) {
      this.content.push({ type: 'text', text: message });
    } else {
      console.log(message);
    }
  }

  warn(message: string): void {
    if (this.isMcpMode) {
      this.content.push({ type: 'text', text: message });
    } else {
      console.warn(chalk.yellow(message));
    }
  }

  error(message: string): McpResponse {
    if (this.isMcpMode) {
      return {
        content: [{ type: 'text', text: message }],
        isError: true
      };
    } else {
      console.error(chalk.red(message));
      process.exit(1);
    }
  }

  getContent(): McpResponse {
    return {
      content: this.content
    };
  }
} 