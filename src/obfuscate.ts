#!/usr/bin/env node

import * as path from 'path';
import * as fs from 'fs';

import Obfuscator from './obfuscator';

const obfuscator = new Obfuscator();

// TODO: load clues from file

console.info('Obfuscating JSON files in the current directory:');

for (const file of fs.readdirSync(path.resolve('.'))) {
  if (
    file.endsWith('.json') &&
    !file.endsWith('.obfuscated.json') &&
    file !== 'clues.json'
  ) {
    const sourceFilePath = path.resolve(file);
    console.info(` - ${file}`);
    const sourceFileContent = JSON.parse(
      fs.readFileSync(sourceFilePath, 'utf8')
    );
    const targetFilePath = path.resolve(
      `${path.parse(sourceFilePath).name}.obfuscated.json`
    );
    const targetFileContent = obfuscator.obfuscate(sourceFileContent);
    fs.writeFileSync(
      targetFilePath,
      JSON.stringify(targetFileContent, null, 2)
    );
  }
}

const clues = Array.from(obfuscator.clues.entries()).map(d => {
  return {
    before: d[0],
    _after: d[1],
  };
});

fs.writeFileSync(path.resolve('clues.json'), JSON.stringify(clues, null, 2));

console.info('Done! See clues in clues.json.');
