#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');
const path = require('../package.json');
const childProcess = require('child_process');

// Get data
const appLicense = path.license;
const appGitRef = childProcess.execSync('git describe --always').toString();
const filePath = __dirname + '/../source/_version.css';
const fileContent = `/*! @tacc/core-styles ${appGitRef} | ${appLicense} | github.com/TACC/Core-Styles */` + "\n";

// Tell user
console.log(`Updating CSS version to ${appGitRef}`);

// Write version
fs.writeFileSync( filePath, fileContent );
