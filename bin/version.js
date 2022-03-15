#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');
const childProcess = require('child_process');

// WARNING: Fallback assumes `package.json` location
// FAQ: Fallback required to support NPM v6–
// SEE: https://github.com/npm/cli/issues/2609
const package = require(process.env.npm_package_json || '../package.json');



/**
 * Create version stylesheet at specificed path
 * @param {string} outputPath - Output version file at which path
 */
function create(outputPath) {
    // Get data
    const appName = package.name;
    const appLicense = package.license;
    const appGitRef = childProcess.execSync('git describe --always').toString();
    const appWebsite = package.homepage.replace('https://', '');
    const fileContent = `/*! ${appName} ${appGitRef.replace("\n", "")} `
                        + `| ${appLicense} | ${appWebsite} */`
                        + "\n";

    // Tell user
    console.log(`Updating CSS version to ${appGitRef}`);

    // Write version
    fs.writeFileSync( outputPath, fileContent );
}



// Export
module.exports = create;
