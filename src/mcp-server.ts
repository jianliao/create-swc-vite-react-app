import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createApp } from './create-app.js';
import { validateProjectName } from './utils/validate-name.js';
import { McpLogger } from './utils/mcp-logger.js';
import path from 'path';

// Define the schema for the create-app tool params
const createAppParamsSchema = {
  projectPath: z.string().default('.'),
  useEslint: z.boolean().default(true),
  packageManager: z.enum(['npm', 'yarn', 'pnpm']).default('npm'),
  themeScale: z.enum(['large', 'medium', 'both']).default('both'),
  themeColor: z.enum(['dark', 'light', 'both']).default('both'),
  system: z.enum(['spectrum', 'spectrum-two', 'express']).default('spectrum')
};

const createAppSchema = z.object(createAppParamsSchema);
type CreateAppParams = z.infer<typeof createAppSchema>;

export async function startMcpServer() {
  // Create an MCP server
  const server = new McpServer({
    name: "create-swc-vite-react-app",
    version: process.env.npm_package_version || "0.1.0",
    description: "Create React applications with Spectrum Web Components and Vite"
  });

  // Add a tool to create a new project
  server.tool(
    "create-app",
    createAppParamsSchema,
    async (params: CreateAppParams) => {
      const logger = new McpLogger(true);
      try {
        const { projectPath, useEslint, packageManager, themeScale, themeColor, system } = params;

        // Validate project name
        if (projectPath !== '.') {
          const validationResult = validateProjectName(projectPath);
          if (!validationResult.valid) {
            return logger.error(`Invalid project name: ${validationResult.problems![0]}`);
          }
        }

        // For in-place project creation, use the current directory name
        const finalProjectName = projectPath === '.'
          ? path.basename(process.cwd())
          : projectPath;

        // Create the app
        const result = await createApp({
          projectPath: finalProjectName,
          useEslint,
          packageManager,
          themeScale,
          themeColor,
          system,
          isMcpMode: true
        });

        // If result is undefined, it means we're not in MCP mode (shouldn't happen)
        if (!result) {
          return logger.error("Error: createApp did not return MCP content");
        }

        return result;
      } catch (error) {
        return logger.error(`Error creating app: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  );

  // Add a prompt for creating a new SWC React app
  server.prompt(
    "create-app",
    "Creates a new React application with Spectrum Web Components and Vite",
    () => {
      const logger = new McpLogger(true);
      logger.log("Prompt callback executed!");
      return ({
        messages: [{
          role: "user",
          content: {
            type: "text",
            text: `I'd like to create a new React application with Spectrum Web Components and Vite. Please help me set up this project with the following details:
- What should I name my project? (or use '.' for current directory)
- Should I include ESLint configuration? (yes/no)
- Which package manager should I use? (npm, yarn, or pnpm)
- Which theme scale should I use? (large, medium, or both)
- Which theme color should I use? (dark, light, or both)
- Which design system should I use? (spectrum, spectrum-two, or express)

Please provide these details so I can create the project.`
          }
        }]
      })
    }
  );

  // Add a resource that describes CLI options
  server.resource(
    "cli-options",
    "docs://cli-options",
    async (uri) => {
      return {
        contents: [{
          uri: uri.href,
          text: `# CLI Options for create-swc-vite-react-app

## Basic Usage
\`\`\`
npx create-swc-vite-react-app my-app
\`\`\`

## Options
- \`--eslint\`: Include ESLint configuration (default: true)
- \`--use-npm\`: Use npm as package manager
- \`--use-pnpm\`: Use pnpm as package manager
- \`--use-yarn\`: Use yarn as package manager
- \`--theme-scale <scale>\`: Theme scale (large, medium, both) (default: both)
- \`--theme-color <color>\`: Theme color (dark, light, both) (default: both)
- \`--system <s>\`: Design system (spectrum, spectrum-two, express) (default: spectrum)

## Examples
\`\`\`
# Create a project with Yarn and Spectrum Two
npx create-swc-vite-react-app my-app --use-yarn --system spectrum-two

# Create a project with dark theme only
npx create-swc-vite-react-app my-app --theme-color dark
\`\`\`

## In-place Creation
To create a project in the current directory:
\`\`\`
npx create-swc-vite-react-app .
\`\`\`
`
        }]
      };
    }
  );

  // Start receiving messages on stdin and sending messages on stdout
  const logger = new McpLogger(true);
  logger.log("MCP server connected via stdio");
  const transport = new StdioServerTransport();
  await server.connect(transport);
} 