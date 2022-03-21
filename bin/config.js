#!/usr/bin/env node

/** Export internal function used by this package to configure build */

const fs = require('fs');
const merge = require('merge-lite');
const yaml = require('js-yaml');

const baseConfigFile = `${__dirname}/../.postcssrc.base.yml`;
const newConfigFile = `${__dirname}/../.postcssrc.yml`;



/**
 * Save base config as auto-loaded file (also can overwrite with custom values)
 * @param {array.string} [customConfigs] - List of YAML config file paths
 * (The first file is merged on top of the base config.)
 * (Each successive file overwrites the file before it.)
 * @param {string} [cssVersion] - A versioning identifier for this build
 * @see https://github.com/postcss/postcss-load-config#postcssrc
 */
function config(customConfigs, cssVersion) {
    // Get data
    let baseFile = baseConfigFile;
    let newYaml;

    // Either extend base config with any custom configs
    if (customConfigs) {
        customConfigs.forEach(nextFile => {
            if (nextFile && fs.existsSync(nextFile)) {
                newYaml = getMergedConfig(baseFile, nextFile, cssVersion);
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
        const newJson = updateVersion(baseJson, cssVersion);

        newYaml = yaml.dump(newJson);
    }

    // Write file
    fs.writeFileSync(newConfigFile, newYaml, 'utf8');
}



/**
 * Update the value for the CSS version in given config
 * @param {object} json - The JOSN object in which to update the version
 * @param {string} version - The version identifier
 * @return {object} - Updated JSON
 */
function updateVersion(json, version) {
    console.log(`Tagging CSS version as ${version}`);

    json['plugins']['postcss-banner']['banner'] = version;

    return json;
}



/**
 * Get content of merging one config file atop another
 * @param {array.string} baseFile - YAML config file to be extended
 * @param {array.string} customFile - YAML config file to merge onto base
 * @param {string} [cssVersion] - A versioning identifier for this build
 * @return {string} - Merged YAML
 */
 function getMergedConfig(baseFile, customFile, cssVersion) {
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
        const newJson = updateVersion(merge(baseJson, customJson), cssVersion);

        newYaml = yaml.dump(newJson);
    }

    // Return content
    return newYaml;
}



// Export
module.exports = config;
