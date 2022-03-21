#!/usr/bin/env node

/** Create CSS file to import that prints project version */

const fs = require('fs');

const package = require(process.env.npm_package_json || '../package.json');



/**
 * Create version stylesheet at specificed path
 * @param {string} outputPath - Output version file at which path
 * @param {string} [buildId] - Any value to identify the build
 */
function create(outputPath, buildId) {
    // Get data
    const appName = package.name;
    const appVersion = buildId || package.version + '+';
    const appLicense = package.license;
    const appWebsite = package.homepage.replace('https://', '');
    const fileContent = `/*! ${appName} ${appVersion} | ${appLicense} | ${appWebsite} */` + "\n";

    // Tell user
    console.log(`Updating CSS version to ${appVersion}`);

    // Write version
    fs.writeFileSync( outputPath, fileContent );
}



// Export
module.exports = create;
