import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { McpLogger, McpResponse } from './utils/mcp-logger.js';

interface CreateAppOptions {
  projectPath: string;
  useEslint: boolean;
  packageManager: 'npm' | 'yarn' | 'pnpm';
  themeScale: 'large' | 'medium' | 'both';
  themeColor: 'dark' | 'light' | 'both';
  system: 'spectrum' | 'express' | 'spectrum-two';
  isMcpMode?: boolean;
}

export async function createApp({
  projectPath,
  useEslint,
  packageManager,
  themeScale,
  themeColor,
  system,
  isMcpMode = true,
}: CreateAppOptions): Promise<void | McpResponse> {
  const root = path.resolve(projectPath);
  const appName = path.basename(root);
  const logger = new McpLogger(isMcpMode);

  logger.log(`Creating a new React app with TypeScript in ${chalk.green(root)}.`);
  logger.log('');

  // Only create directory if not doing in-place project creation
  if (projectPath !== '.') {
    try {
      fs.mkdirSync(root, { recursive: true });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      return logger.error(`Error creating directory: ${errorMessage}`);
    }
  }

  process.chdir(root);

  // Create package.json
  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
      ...(useEslint ? { lint: 'eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0' } : {}),
    },
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + '\n'
  );

  // Install dependencies
  const dependencies = [
    'react@^19',
    'react-dom@^19',
    '@spectrum-web-components/accordion',
    '@spectrum-web-components/action-bar',
    '@spectrum-web-components/action-button',
    '@spectrum-web-components/action-group',
    '@spectrum-web-components/action-menu',
    '@spectrum-web-components/alert-banner',
    '@spectrum-web-components/alert-dialog',
    '@spectrum-web-components/asset',
    '@spectrum-web-components/avatar',
    '@spectrum-web-components/badge',
    '@spectrum-web-components/breadcrumbs',
    '@spectrum-web-components/button',
    '@spectrum-web-components/button-group',
    '@spectrum-web-components/card',
    '@spectrum-web-components/checkbox',
    '@spectrum-web-components/coachmark',
    '@spectrum-web-components/color-area',
    '@spectrum-web-components/color-field',
    '@spectrum-web-components/color-handle',
    '@spectrum-web-components/color-loupe',
    '@spectrum-web-components/color-slider',
    '@spectrum-web-components/color-wheel',
    '@spectrum-web-components/combobox',
    '@spectrum-web-components/contextual-help',
    '@spectrum-web-components/dialog',
    '@spectrum-web-components/divider',
    '@spectrum-web-components/dropzone',
    '@spectrum-web-components/field-group',
    '@spectrum-web-components/field-label',
    '@spectrum-web-components/grid',
    '@spectrum-web-components/help-text',
    '@spectrum-web-components/icons-workflow',
    '@spectrum-web-components/illustrated-message',
    '@spectrum-web-components/infield-button',
    '@spectrum-web-components/link',
    '@spectrum-web-components/menu',
    '@spectrum-web-components/meter',
    '@spectrum-web-components/number-field',
    '@spectrum-web-components/overlay',
    '@spectrum-web-components/picker',
    '@spectrum-web-components/picker-button',
    '@spectrum-web-components/popover',
    '@spectrum-web-components/progress-bar',
    '@spectrum-web-components/progress-circle',
    '@spectrum-web-components/radio',
    '@spectrum-web-components/search',
    '@spectrum-web-components/sidenav',
    '@spectrum-web-components/slider',
    '@spectrum-web-components/split-view',
    '@spectrum-web-components/status-light',
    '@spectrum-web-components/swatch',
    '@spectrum-web-components/switch',
    '@spectrum-web-components/table',
    '@spectrum-web-components/tabs',
    '@spectrum-web-components/tags',
    '@spectrum-web-components/textfield',
    '@spectrum-web-components/theme',
    '@spectrum-web-components/thumbnail',
    '@spectrum-web-components/toast',
    '@spectrum-web-components/tooltip',
    '@spectrum-web-components/top-nav',
    '@spectrum-web-components/tray',
    '@spectrum-web-components/truncated',
    '@spectrum-web-components/underlay',
  ];

  const devDependencies = [
    'vite',
    '@vitejs/plugin-react-swc',
    'typescript',
    '@types/react',
    '@types/react-dom',
    ...(useEslint ? [
      'eslint',
      'eslint-plugin-react-hooks',
      'eslint-plugin-react-refresh',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ] : []),
  ];

  logger.log('Installing dependencies...');

  const installCmd = packageManager === 'yarn'
    ? 'yarn add'
    : packageManager === 'pnpm'
      ? 'pnpm add'
      : 'npm install';

  execSync(`${installCmd} ${dependencies.join(' ')}`, { stdio: isMcpMode ? 'pipe' : 'inherit' });
  execSync(`${installCmd} -D ${devDependencies.join(' ')}`, { stdio: isMcpMode ? 'pipe' : 'inherit' });

  // Verify React version
  try {
    const packageJsonPath = path.join(root, 'node_modules', 'react', 'package.json');
    const reactPackageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const reactVersion = reactPackageJson.version;

    if (!reactVersion.startsWith('19.')) {
      logger.warn(`Warning: React version ${reactVersion} was installed. This tool is designed for React 19+.`);
    } else {
      logger.log(chalk.green(`React ${reactVersion} successfully installed.`));
    }
  } catch (err) {
    logger.warn('Could not verify React version.');
  }

  // Create source files
  const srcDir = path.join(root, 'src');
  fs.mkdirSync(srcDir, { recursive: true });

  // Create components directory and copy template files
  const componentsDir = path.join(srcDir, 'components');
  fs.mkdirSync(componentsDir, { recursive: true });

  // Create layout directory and copy template files
  const layoutDir = path.join(srcDir, 'layout');
  fs.mkdirSync(layoutDir, { recursive: true });

  // Copy template files
  const templateDir = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'templates');
  if (fs.existsSync(templateDir)) {
    // Copy component templates
    const templateComponentsDir = path.join(templateDir, 'components');
    if (fs.existsSync(templateComponentsDir)) {
      const componentFiles = fs.readdirSync(templateComponentsDir);
      const componentsToExport = [];

      for (const file of componentFiles) {
        if (file.endsWith('.ts')) {
          const componentName = file.replace('.ts', '');
          const sourcePath = path.join(templateComponentsDir, file);
          const destPath = path.join(componentsDir, file);

          // Special handling for SpTheme.ts
          if (file === 'SpTheme.ts') {
            // Read the template file
            let themeContent = fs.readFileSync(sourcePath, 'utf8');

            // Generate the imports based on user selections
            const themeImports = generateThemeImports(themeScale, themeColor, system);

            // Replace the placeholder with the generated imports
            themeContent = themeContent.replace('// THEME_IMPORTS_PLACEHOLDER', themeImports);

            // Write the modified file
            fs.writeFileSync(destPath, themeContent);
            logger.log(`Generated ${chalk.cyan('SpTheme.ts')} with your theme preferences.`);
          } else {
            // Copy other template files as-is
            fs.copyFileSync(sourcePath, destPath);
          }

          componentsToExport.push(componentName);
        }
      }

      // Copy icons directory if it exists
      const iconsSourceDir = path.join(templateComponentsDir, 'icons');
      if (fs.existsSync(iconsSourceDir)) {
        const iconsDestDir = path.join(componentsDir, 'icons');
        fs.mkdirSync(iconsDestDir, { recursive: true });
        fs.copySync(iconsSourceDir, iconsDestDir);
      }
    }

    // Copy layout templates
    const templateLayoutDir = path.join(templateDir, 'layout');
    if (fs.existsSync(templateLayoutDir)) {
      const layoutFiles = fs.readdirSync(templateLayoutDir);

      for (const file of layoutFiles) {
        const sourcePath = path.join(templateLayoutDir, file);
        const destPath = path.join(layoutDir, file);
        fs.copyFileSync(sourcePath, destPath);
      }
    }
  }

  // Create main files
  const extension = 'tsx';

  // App component

  fs.writeFileSync(
    path.join(srcDir, `App.${extension}`),
    `import './App.css'
import { SpTheme } from '@components/SpTheme'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import MainContent from './layout/MainContent'

function App() {
  return (
    <SpTheme system="${system}" scale="${themeScale === 'both' ? 'medium' : themeScale}" color="${themeColor === 'both' ? 'light' : themeColor}">
      <div className="layout">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    </SpTheme>
  )
}

export default App
`
  );

  // Main entry
  fs.writeFileSync(
    path.join(srcDir, `main.${extension}`),
    `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`
  );

  // CSS files
  fs.writeFileSync(
    path.join(srcDir, 'App.css'),
    `#root {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.layout {
  display: grid;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  grid-template-areas: 
    "header header"
    "sidenav main";
  grid-template-columns: 64px 1fr;
  grid-template-rows: 56px 1fr;
}
`
  );

  // Create index.html
  fs.writeFileSync(
    path.join(root, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TypeScript</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  );

  // Create vite.config
  fs.writeFileSync(
    path.join(root, 'vite.config.ts'),
    `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src/components')
    }
  }
})
`
  );

  // Create TypeScript configuration
  fs.writeFileSync(
    path.join(root, 'tsconfig.json'),
    `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* Path aliases */
    "baseUrl": ".",
    "paths": {
      "@components": ["src/components"],
      "@components/*": ["src/components/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`
  );

  fs.writeFileSync(
    path.join(root, 'tsconfig.node.json'),
    `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`
  );

  if (useEslint) {
    fs.writeFileSync(
      path.join(root, '.eslintrc.cjs'),
      `module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
`
    );
  }

  // Generate theme imports based on user choices
  function generateThemeImports(themeScale: string, themeColor: string, system: string): string {
    const imports = [];
    imports.push('import \'@spectrum-web-components/theme/sp-theme.js\';');

    // Add system-specific imports
    if (system === 'spectrum') {
      // Add scale imports for Spectrum
      if (themeScale === 'large' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/scale-large.js\';');
      }
      if (themeScale === 'medium' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/scale-medium.js\';');
      }

      // Add color imports for Spectrum
      if (themeColor === 'dark' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/theme-dark.js\';');
      }
      if (themeColor === 'light' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/theme-light.js\';');
      }
    }
    else if (system === 'spectrum-two') {
      // Add scale imports for Spectrum Two
      if (themeScale === 'large' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/spectrum-two/scale-large.js\';');
      }
      if (themeScale === 'medium' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/spectrum-two/scale-medium.js\';');
      }

      // Add color imports for Spectrum Two
      if (themeColor === 'dark' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/spectrum-two/theme-dark.js\';');
      }
      if (themeColor === 'light' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/spectrum-two/theme-light.js\';');
      }
    }
    else if (system === 'express') {
      // Add scale imports for Express
      if (themeScale === 'large' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/express/scale-large.js\';');
      }
      if (themeScale === 'medium' || themeScale === 'both') {
        imports.push('import \'@spectrum-web-components/theme/express/scale-medium.js\';');
      }

      // Add color imports for Express
      if (themeColor === 'dark' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/express/theme-dark.js\';');
      }
      if (themeColor === 'light' || themeColor === 'both') {
        imports.push('import \'@spectrum-web-components/theme/express/theme-light.js\';');
      }
    }

    return imports.join('\n');
  }

  logger.log('');
  logger.log(chalk.green('Success!'), 'Created', chalk.cyan(appName), 'at', chalk.cyan(root));
  logger.log('');
  logger.log('Inside that directory, you can run several commands:');
  logger.log('');
  logger.log(chalk.cyan(`  ${packageManager} dev`));
  logger.log('    Starts the development server.');
  logger.log('');
  logger.log(chalk.cyan(`  ${packageManager} build`));
  logger.log('    Bundles the app into static files for production.');
  logger.log('');
  logger.log(chalk.cyan(`  ${packageManager} preview`));
  logger.log('    Locally preview production build.');
  logger.log('');
  logger.log('We suggest that you begin by typing:');
  logger.log('');
  logger.log(chalk.cyan('  cd'), appName);
  logger.log(`  ${chalk.cyan(`${packageManager} dev`)}`);
  logger.log('');
  logger.log('Happy hacking!');

  if (isMcpMode) {
    return logger.getContent();
  }
} 