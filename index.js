#!/usr/bin/env node

/** Functions to custom build stylesheets and create a version stylesheet */

const { resolve } = require('path');

const build = require('./bin/build.js');
const config = require('./bin/config.js');
const version = require('./bin/version.js');



/**
 * Build stylesheets from source CSS
 * @param {string} inputDir - Parse CSS files from which directory
 * @param {string} outputDir - Output CSS files to which directory
 * @param {object} [opts={}] - Options
 * @param {object} [opts.fileExt='css'] - Extension of CSS files to parse
 * @param {array.string} [opts.customConfigs] - List of YAML config file paths
 * (The first file is merged on top of the base config.)
 * (Each successive file overwrites the file before it.)
 * @param {string} [opts.buildId] - Any value to identify the build
 * @param {boolean} [opts.verbose=false] - Print more in log output
 */
function buildStylesheets(inputDir, outputDir, opts = {}) {
    const buildOpts = {
        fileExt: opts.fileExt,
        verbose: opts.verbose || null,
    };

    const inputDirResolved = resolve(inputDir);
    const outputDirResolved = resolve(outputDir);
    const customConfigs = (opts.customConfigs) ?
        opts.customConfigs.map(filePath =>
            (filePath) ? resolve(filePath) : null
        ) : null;
console.log({ VERSION: version(opts.buildId) });
    config(customConfigs, version(opts.buildId));
    build(inputDirResolved, outputDirResolved, buildOpts);
}



// Export
module.exports = { buildStylesheets };
