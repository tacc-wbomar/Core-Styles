#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');

const root = __dirname;
const outFile = root + '/../source/_version.css';

const ver = process.env.npm_package_version;
const rev = getGitRev().substring(0, 7);

const output = `/*! @tacc/core-styles#${rev} (≥ v${ver}) | MIT License | github.com/TACC/Core-Styles */`;

/**
 * Get the Git revision of the current working directory code
 * @return {string}
 * @see https://stackoverflow.com/a/34518749/11817077
 */
function getGitRev() {
  let rev = fs.readFileSync('.git/HEAD').toString().trim();
  const revFile = '.git/' + rev.substring(5);

  if (rev.indexOf(':') !== -1) {
    console.log('Reading Git revision from: ' + revFile);
    rev = fs.readFileSync(revFile).toString().trim();
  }

  return rev;
}

console.log(`Updating CSS version to package version ${ver} and Git revision ${rev}[...]`);
fs.writeFileSync(outFile, output, 'utf8');
