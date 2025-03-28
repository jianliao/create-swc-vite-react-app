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
  private messages: string[] = [];
  private isMcpMode: boolean;

  constructor(isMcpMode: boolean) {
    this.isMcpMode = isMcpMode;
  }

  log(...messages: any[]): void {
    const message = messages.join(' ');
    if (this.isMcpMode) {
      this.messages.push(message);
    } else {
      console.log(message);
    }
  }

  warn(message: string): void {
    if (this.isMcpMode) {
      this.messages.push(message);
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
      content: [{
        type: 'text',
        text: this.messages.length > 0 ? this.messages.join('\n') : ''
      }]
    };
  }
} 