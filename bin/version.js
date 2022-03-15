#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');

const cmd = require('node-cmd');

const package = require(process.env.npm_package_json);



/**
 * Create version stylesheet at specificed path
 * @param {string} outputPath - Output version file at which path
 */
function create(outputPath) {
    // Get ref or leave (i.e. use last comitted version stylesheet)
    // BUG: FP-1548: Can get locally, but not on build server
    let appGitRef = cmd.runSync('git describe --always').data;
    if ( appGitRef ) {
        appGitRef = appGitRef.replace("\n", '');
    } else {
        console.warn('Skipping CSS version update due to error');
        console.log('Letting existing CSS version file be used');
        return;
    }

    // Get data
    const appName = package.name;
    const appLicense = package.license;
    const appWebsite = package.homepage.replace('https://', '');
    const fileContent = `/*! ${appName} ${appGitRef} | ${appLicense} | ${appWebsite} */` + "\n";

    // Tell user
    console.log(`Updating CSS version to ${appGitRef}`);

    // Write version
    fs.writeFileSync( outputPath, fileContent );
}



// Export
module.exports = create;
