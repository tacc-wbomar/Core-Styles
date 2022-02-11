#!/usr/bin/env node

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
    let baseFile = baseConfigFile;
    let newYaml;

    if (customConfigFiles) {
        customConfigFiles.forEach(nextFile => {
            if (nextFile && fs.existsSync(nextFile)) {
                newYaml = getMergedConfig(baseFile, nextFile);
                baseFile = newConfigFile;
            } else {
              console.info(`Custom config ${nextFile} not found. Skipping`);
            }
        });
    } else {
        console.info('No custom files passed. Using only base config.');
        const baseConfig = fs.readFileSync(baseConfigFile, 'utf8');
        const baseJson = yaml.load(baseConfig);
        newYaml = yaml.dump(baseJson);
    }

    fs.writeFileSync(newConfigFile, newYaml, 'utf8');
}

/**
 * Get content of merging one config file atop another
 * @param {array.string} baseFile - YAML config file to be extended
 * @param {array.string} customFile - YAML config file to merge onto base
 * @return {string} - Merged YAML
 */
 function getMergedConfig(baseFile, customFile) {
    const baseConfig = fs.readFileSync(baseFile, 'utf8');
    const baseJson = yaml.load(baseConfig);
    const baseYaml = yaml.dump(baseJson);

    let newYaml = baseYaml;

    if (customFile) {
        const customConfig = fs.readFileSync(customFile, 'utf8');
        const customJson = yaml.load(customConfig);

        const newJson = merge(baseJson, customJson);
        newYaml = yaml.dump(newJson);
    }

    return newYaml;
}

module.exports = config;
