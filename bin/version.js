#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');
const path = require('../package.json');
const childProcess = require('child_process');

/**
 * Create version stylesheet at specificed path
 * @param {string} outputPath - Output version file at which path
 */
function create(outputPath) {
    // Get data
    const appName = process.env.npm_package_name;
    const appLicense = path.license;
    const appGitRef = childProcess.execSync('git describe --always').toString();
    const fileContent = `/*! ${appName} ${appGitRef} | ${appLicense} | github.com/TACC/Core-Styles */` + "\n";

    // Tell user
    console.log(`Updating CSS version to ${appGitRef}`);

    // Write version
    fs.writeFileSync( outputPath, fileContent );
}

module.exports = create;
