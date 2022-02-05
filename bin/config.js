const fs = require('fs');
const merge = require('merge-lite');
const yaml = require('js-yaml');

/**
 * Save base config as auto-loaded file (also can overwrite with custom values)
 * @param {string} customConfigFile - YAML file with custom values
 */
function config(customConfigFile) {
    const baseConfigFile = `${__dirname}/../.postcssrc.base.yml`;
    
    const baseConfig = fs.readFileSync(baseConfigFile, 'utf8');
    const baseJSON = yaml.load(baseConfig);

    let newConfig = baseConfig;

    if (customConfigFile) {
        const customConfig = fs.readFileSync(customConfigFile, 'utf8');
        const customJSON = yaml.load(customConfig);

        const newJSON = merge(baseJSON, customJSON);
        newConfig = yaml.dump(newJSON);
    }

    fs.writeFileSync(`${__dirname}/../.postcssrc.yml`, newConfig, 'utf8');
}

module.exports = config;
