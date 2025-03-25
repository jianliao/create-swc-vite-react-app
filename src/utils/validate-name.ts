import validateNpmPackageName from 'validate-npm-package-name';
import path from 'path';
import fs from 'fs-extra';

export interface ValidationResult {
  valid: boolean;
  problems?: string[];
}

export function validateProjectName(name: string): ValidationResult {
  // Special case for in-place project creation
  if (name === '.') {
    const currentDir = process.cwd();
    const packageJsonPath = path.join(currentDir, 'package.json');
    
    // Check if directory is empty or only contains package.json
    const files = fs.readdirSync(currentDir);
    if (files.length > 0 && (files.length > 1 || files[0] !== 'package.json')) {
      return {
        valid: false,
        problems: ['Directory is not empty. Please create the project in an empty directory or use a new directory name.'],
      };
    }

    // If package.json exists, check if it's a valid npm package
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        if (packageJson.name && !validateNpmPackageName(packageJson.name).validForNewPackages) {
          return {
            valid: false,
            problems: ['Existing package.json has an invalid package name.'],
          };
        }
      } catch (error) {
        return {
          valid: false,
          problems: ['Existing package.json is invalid.'],
        };
      }
    }

    return { valid: true };
  }

  // For new directories, validate the name
  const npmNameValidation = validateNpmPackageName(name);

  if (!npmNameValidation.validForNewPackages) {
    return {
      valid: false,
      problems: [
        ...(npmNameValidation.errors || []),
        ...(npmNameValidation.warnings || []),
      ],
    };
  }

  const root = path.resolve(name);
  const folderName = path.basename(root);

  if (fs.existsSync(root)) {
    return {
      valid: false,
      problems: [`Directory ${folderName} already exists.`],
    };
  }

  return { valid: true };
} 