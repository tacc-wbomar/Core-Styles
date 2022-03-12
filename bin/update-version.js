#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');
const childProcess = require('child_process');

const root = __dirname;
const outFile = root + '/../source/_version.css';

/**
 * Get data and write content to version file
 * @return {string}
 * @see https://stackoverflow.com/a/34518749/11817077
 */
(async function writeRevToFile() {
  const ver = process.env.npm_package_version;
  const output = `/*! @tacc/core-styles (≥ v${ver}) | MIT License | github.com/TACC/Core-Styles */`;

  console.log(`Updating CSS version to package version ${ver}`);

  fs.writeFileSync(outFile, output, 'utf8');
})();
