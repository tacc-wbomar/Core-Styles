#!/usr/bin/env node

/** Export internal function used by this package to configure build */

const fs = require('fs');
const merge = require('merge-lite');
const yaml = require('js-yaml');

const baseConfigFile = `${__dirname}/../.postcssrc.base.yml`;
const newConfigFile = `${__dirname}/../.postcssrc.yml`;

/**
 * Save base config as auto-loaded file (also can overwrite with custom values)
 * @param {array.string} [customConfigFiles] - List of YAML config files
 * (The first file is merged on top of the base config.)
 * (Each successive file overwrites the file before it.)
 * @see https://github.com/postcss/postcss-load-config#postcssrc
 */
function config(customConfigFiles) {
    // Get data
    let baseFile = baseConfigFile;
    let newYaml;

    // Either extend base config with any custom configs
    if (customConfigFiles) {
        customConfigFiles.forEach(nextFile => {
            if (nextFile && fs.existsSync(nextFile)) {
                newYaml = getMergedConfig(baseFile, nextFile);
                baseFile = newConfigFile;
            } else {
              console.info(`Skipping custom config ${nextFile} (not found)`);
            }
        });
    }
    // Or just use the base config
    else {
        console.info('Using only base config (no custom configs provided)');
        const baseConfig = fs.readFileSync(baseConfigFile, 'utf8');
        const baseJson = yaml.load(baseConfig);
        newYaml = yaml.dump(baseJson);
    }

    // Write file
    fs.writeFileSync(newConfigFile, newYaml, 'utf8');
}

/**
 * Get content of merging one config file atop another
 * @param {array.string} baseFile - YAML config file to be extended
 * @param {array.string} customFile - YAML config file to merge onto base
 * @return {string} - Merged YAML
 */
 function getMergedConfig(baseFile, customFile) {
    // Get data
    const baseConfig = fs.readFileSync(baseFile, 'utf8');
    const baseJson = yaml.load(baseConfig);
    const baseYaml = yaml.dump(baseJson);

    // Default to base config content
    let newYaml = baseYaml;

    // Any custom configs are merged onto the content
    if (customFile) {
        const customConfig = fs.readFileSync(customFile, 'utf8');
        const customJson = yaml.load(customConfig);

        const newJson = merge(baseJson, customJson);
        newYaml = yaml.dump(newJson);
    }

    // Return content
    return newYaml;
}

module.exports = config;
