#!/usr/bin/env node

const { resolve } = require('path');

const build = require('./bin/build.js');
const config = require('./bin/config.js');

/**
 * Build styles from external CSS
 * @param {string} inputDir - Parse CSS files from which directory
 * @param {string} outputDir - Output CSS files to which directory
 * @param {object} [opts={}] - Options
 * @param {object} [opts.fileExt='css'] - Extension of CSS files to parse
 * @param {array.string} [opts.customConfigFiles] - List of YAML config files
 * (The first file is merged on top of the base config.)
 * (Each successive file overwrites the file before it.)
 * @param {boolean} [opts.version=false] - Print the version of this software
 * @param {boolean} [opts.verbose=false] - Print more info from build log
 */
 module.exports = function taccCoreStyles(inputDir, outputDir, opts = {}) {
    // console.log('[index.js] opts:', opts);

    if (opts.version) {
        console.log(process.env.npm_package_version);
    }

    const buildOpts = {
        fileExt: opts.fileExt,
        verbose: opts.verbose || null,
    };

    const inputDirResolved = resolve(inputDir);
    const outputDirResolved = resolve(outputDir);
    const customConfigFiles = (opts.customConfigFiles) ?
        opts.customConfigFiles.map(file =>
            (file) ? resolve(file) : null
        ) : null;

    config(customConfigFiles);
    build(inputDirResolved, outputDirResolved, buildOpts);    
}
