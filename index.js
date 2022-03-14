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
 * @param {boolean} [opts.verbose=false] - Print more in log output
 */
function buildStylesheets(inputDir, outputDir, opts = {}) {
    if (opts.verbose) {
        console.log('index.js > buildStyles..():', { inputDir, outputDir, opts });
    }

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

    config(customConfigs);
    build(inputDirResolved, outputDirResolved, buildOpts);
}



/**
 * Create version stylesheet at specificed path
 * @param {string} outputPath - Output version file at which path
 * @param {object} [opts={}] - Options
 * @param {boolean} [opts.verbose=false] - Print more in log output
 */
function createVersionStylesheet(outputPath, opts = {}) {
    if (opts.verbose) {
        console.log('index.js > createVersion...():', { outputPath, opts });
    }

    const outputPathResolved = resolve(outputPath);

    version(outputPathResolved);
}



// Export
module.exports = { buildStylesheets, createVersionStylesheet };
