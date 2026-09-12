#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const packageRoot = path.resolve(path.dirname(currentFile), '..');
const args = process.argv.slice(2);
const command = args.find((arg) => !arg.startsWith('--')) ?? 'install';
const force = args.includes('--force');
const scopeFlag = args.includes('--global')
  ? 'global'
  : args.includes('--project')
    ? 'project'
    : null;

const sourcePaths = {
  skill: path.join(packageRoot, '.claude', 'skills', 'ahmed-skill'),
  rules: path.join(packageRoot, 'rules'),
  skills: path.join(packageRoot, 'skills'),
  templates: path.join(packageRoot, 'templates'),
  globalProfile: path.join(packageRoot, 'CLAUDE_GLOBAL_PROFILE.md'),
  projectTemplate: path.join(packageRoot, 'CLAUDE_PROJECT_TEMPLATE.md')
};

function exists(target) {
  return fs.existsSync(target);
}

function copyDirectory(source, destination) {
  if (!exists(source)) {
    console.warn(`Skipped missing source: ${source}`);
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true, force: true });
}

function copyFile(source, destination) {
  if (!exists(source)) {
    console.warn(`Skipped missing source: ${source}`);
    return;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function printHelp() {
  console.log(`
Ahmad Skills Installer

Usage:
  npx github:AhmadALSaffan/AHMED-SKILLS install
  npx github:AhmadALSaffan/AHMED-SKILLS install --global
  npx github:AhmadALSaffan/AHMED-SKILLS install --project
  npx github:AhmadALSaffan/AHMED-SKILLS status

Options:
  --global    Install for all Claude Code projects.
  --project   Install only in the current project directory.
  --force     Replace existing Ahmad Skills files without asking.
  --help      Show this help message.
`);
}

function printStatus() {
  const globalRoot = path.join(os.homedir(), '.claude');
  const projectRoot = path.join(process.cwd(), '.claude');

  console.log('\nAhmad Skills status\n');
  console.log(`Global skill:   ${exists(path.join(globalRoot, 'skills', 'ahmed-skill')) ? 'installed' : 'not installed'}`);
  console.log(`Global library: ${exists(path.join(globalRoot, 'ahmed-skills')) ? 'installed' : 'not installed'}`);
  console.log(`Project skill:  ${exists(path.join(projectRoot, 'skills', 'ahmed-skill')) ? 'installed' : 'not installed'}`);
  console.log(`Project library:${exists(path.join(projectRoot, 'ahmed-skills')) ? 'installed' : 'not installed'}`);
  console.log('');
}

async function selectScope() {
  if (scopeFlag) return scopeFlag;

  if (!process.stdin.isTTY) {
    throw new Error('Choose an installation scope: use --global or --project.');
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    console.log('\nWhere do you want to install Ahmad Skills?\n');
    console.log('1) Global  - available in all Claude Code projects');
    console.log('2) Project - available only in the current project\n');

    while (true) {
      const answer = (await rl.question('Choose 1 or 2: ')).trim();
      if (answer === '1') return 'global';
      if (answer === '2') return 'project';
      console.log('Please enter 1 or 2.');
    }
  } finally {
    rl.close();
  }
}

async function confirmOverwrite(destinationRoot) {
  if (force || !exists(destinationRoot)) return true;

  if (!process.stdin.isTTY) {
    throw new Error(`Files already exist at ${destinationRoot}. Run again with --force to replace them.`);
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    const answer = (await rl.question(`\nExisting Ahmad Skills files found at ${destinationRoot}. Replace them? [y/N]: `)).trim();
    return answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';
  } finally {
    rl.close();
  }
}

async function install() {
  const scope = await selectScope();
  const claudeRoot = scope === 'global'
    ? path.join(os.homedir(), '.claude')
    : path.join(process.cwd(), '.claude');

  const skillDestination = path.join(claudeRoot, 'skills', 'ahmed-skill');
  const libraryDestination = path.join(claudeRoot, 'ahmed-skills');

  if (!exists(sourcePaths.skill)) {
    throw new Error('The package is missing .claude/skills/ahmed-skill/SKILL.md. Update the AHMED-SKILLS repository and try again.');
  }

  const shouldOverwrite = await confirmOverwrite(claudeRoot);
  if (!shouldOverwrite) {
    console.log('\nInstallation cancelled.');
    return;
  }

  fs.rmSync(skillDestination, { recursive: true, force: true });
  fs.rmSync(libraryDestination, { recursive: true, force: true });

  copyDirectory(sourcePaths.skill, skillDestination);
  copyDirectory(sourcePaths.rules, path.join(libraryDestination, 'rules'));
  copyDirectory(sourcePaths.skills, path.join(libraryDestination, 'skills'));
  copyDirectory(sourcePaths.templates, path.join(libraryDestination, 'templates'));
  copyFile(sourcePaths.globalProfile, path.join(libraryDestination, 'CLAUDE_GLOBAL_PROFILE.md'));
  copyFile(sourcePaths.projectTemplate, path.join(libraryDestination, 'CLAUDE_PROJECT_TEMPLATE.md'));

  console.log(`\nInstalled Ahmad Skills for ${scope === 'global' ? 'all Claude Code projects' : 'the current project only'}.`);
  console.log(`Skill: ${skillDestination}`);
  console.log(`Shared library: ${libraryDestination}`);
  console.log('\nRestart Claude Code, then run: /ahmed-skill init\n');
}

if (args.includes('--help') || args.includes('-h') || command === 'help') {
  printHelp();
} else if (command === 'status') {
  printStatus();
} else if (command === 'install') {
  install().catch((error) => {
    console.error(`\nInstallation failed: ${error.message}\n`);
    process.exitCode = 1;
  });
} else {
  console.error(`\nUnknown command: ${command}`);
  printHelp();
  process.exitCode = 1;
}
