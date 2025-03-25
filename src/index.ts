#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import prompts from 'prompts';
import { createApp } from './create-app.js';
import { validateProjectName } from './utils/validate-name.js';
import path from 'path';

const program = new Command();

program
  .name('create-swc-vite-react-app')
  .description('Create a new React application with SWC and Vite')
  .argument('[project-directory]', 'project name')
  .option('--eslint', 'Include ESLint configuration', true)
  .option('--use-npm', 'Use npm as package manager')
  .option('--use-pnpm', 'Use pnpm as package manager')
  .option('--use-yarn', 'Use yarn as package manager')
  .option('--theme-scale <scale>', 'Theme scale (large, medium, both)', 'both')
  .option('--theme-color <color>', 'Theme color (dark, light, both)', 'both')
  .option('--system <system>', 'Design system (spectrum, spectrum-two, express)', 'spectrum')
  .version(process.env.npm_package_version || '0.1.0')
  .action(async (projectName: string | undefined, options) => {
    try {
      if (!projectName) {
        console.error(chalk.red('Please specify the project directory:'));
        console.log(
          `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
        );
        console.log();
        console.log('For example:');
        console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`);
        process.exit(1);
      }

      const validationResult = validateProjectName(projectName);
      if (!validationResult.valid) {
        console.error(chalk.red(`Invalid project name: ${validationResult.problems![0]}`));
        process.exit(1);
      }

      // Interactive prompts for theme options if not provided via command line
      let themeScale = options.themeScale;
      let themeColor = options.themeColor;
      let system = options.system;

      if (!options.themeScale || !options.themeColor || !options.system) {
        const themeResponses = await prompts([
          {
            type: options.themeScale ? null : 'select',
            name: 'themeScale',
            message: 'Which scale would you like to use?',
            choices: [
              { title: 'Large', value: 'large' },
              { title: 'Medium', value: 'medium' },
              { title: 'Both', value: 'both' }
            ],
            initial: 2
          },
          {
            type: options.themeColor ? null : 'select',
            name: 'themeColor',
            message: 'Which color theme would you like to use?',
            choices: [
              { title: 'Dark', value: 'dark' },
              { title: 'Light', value: 'light' },
              { title: 'Both', value: 'both' }
            ],
            initial: 2
          },
          {
            type: options.system ? null : 'select',
            name: 'system',
            message: 'Which design system would you like to use?',
            choices: [
              { title: 'Spectrum', value: 'spectrum' },
              { title: 'Spectrum Two', value: 'spectrum-two' },
              { title: 'Express', value: 'express' }
            ],
            initial: 0
          }
        ]);

        themeScale = themeResponses.themeScale || themeScale;
        themeColor = themeResponses.themeColor || themeColor;
        system = themeResponses.system || system;
      }

      // For in-place project creation, use the current directory name
      const finalProjectName = projectName === '.' ? path.basename(process.cwd()) : projectName;

      await createApp({
        projectPath: projectName,
        useEslint: options.eslint,
        packageManager: options.useNpm ? 'npm' : options.usePnpm ? 'pnpm' : options.useYarn ? 'yarn' : 'npm',
        themeScale,
        themeColor,
        system
      });
    } catch (error) {
      console.error(chalk.red('Error:'), error instanceof Error ? error.message : error);
      process.exit(1);
    }
  });

program.parse(); 