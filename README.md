# create-swc-vite-react-app

A CLI tool to create React applications with Vite and SWC for fast development and build times. Now with MCP support for integration with AI assistants!

## Features

- ⚡️ Lightning fast development with Vite
- 🔥 SWC for fast compilation
- 📦 TypeScript support built-in
- ⚛️ React 19+ for the latest features
- 🎨 Spectrum Web Components integration
- 🌈 Customizable theming options
- 🔍 ESLint configuration included
- 🧩 Path aliases (@components) for clean imports
- 🎨 Beautiful default template
- 📱 Responsive design ready
- 🌙 Dark mode support
- 🤖 MCP support for integration with AI assistants

## Quick Start

```bash
# Using npm
npx create-swc-vite-react-app my-app

# Using yarn
yarn create swc-vite-react-app my-app

# Using pnpm
pnpm create swc-vite-react-app my-app

# Create project in current directory
npx create-swc-vite-react-app .
```

## Options

- `--eslint` - Include ESLint configuration (default: true)
- `--use-npm` - Use npm as package manager
- `--use-pnpm` - Use pnpm as package manager
- `--use-yarn` - Use yarn as package manager
- `--theme-scale` - Theme scale: large, medium, or both (default: both)
- `--theme-color` - Theme color: dark, light, or both (default: both)
- `--system` - Design system: spectrum, spectrum-two, or express (default: spectrum)
- `--mcp` - Start in MCP mode for integration with AI assistants

Note: The SpTheme.ts file will be customized with the appropriate imports based on your theme selections.

## Project Structure

The generated project will have the following structure:

```
my-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ActionButton.ts
│   │   ├── Checkbox.ts
│   │   ├── SpTheme.ts (imports customized based on theme options)
│   │   ├── Toast.ts
│   │   ├── Tooltip.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── .eslintrc.cjs
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Available Scripts

In the project directory, you can run:

- `npm dev` - Starts the development server
- `npm build` - Bundles the app for production
- `npm preview` - Preview the production build locally
- `npm lint` - Run ESLint to check code quality

## MCP Support

This tool now includes MCP (Model Context Protocol) support, which allows it to be integrated with AI assistants:

```bash
# Start in MCP mode
npm run start:mcp

# Start in MCP debug mode
npm run debug:mcp
```

### MCP Features

- **Tools**: The MCP server exposes a `create-app` tool that can create a new project with the same options as the CLI.
- **Prompts**: The MCP server includes a prompt for guiding users through creating a new project.
- **Resources**: Documentation for CLI options is available as a resource.

### Integration with Cursor

To integrate with Cursor, you can configure it to use this tool with the MCP protocol. This allows Cursor's AI assistant to directly create SWC+Vite React applications based on user instructions.

## Requirements

- Node.js 18.0.0 or later
- npm 7.0.0 or later, yarn 1.22.0 or later, or pnpm 7.0.0 or later

## License

MIT 