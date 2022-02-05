#!/usr/bin/env node

const { resolve } = require('path');
const { program } = require('commander');

const build = require('./build.js');
const config = require('./config.js');
const { version } = require('../package.json')

program
	.requiredOption('-i, --input-dir <path>',
        'parse CSS files from which directory')
	.requiredOption('-o, --output-dir <path>',
        'output CSS files to which directory')
    .option('-e, --file-ext <ext>',
        'extension of CSS files to parse (default: "css")', 'css')
	.option('-v, --version',
        'print the version of this software')
    .option('--verbose',
        'print more information from build log')
	.option('-c, --custom-config-file <path>',
        `overwrite base config with values from YAML file¹ (advanced feature)`);

program.addHelpText('after', `
Note:
    The dir structure within '--input-dir' will be mirrored in '--output-dir'.

Footnotes:
    ¹ Like an '.postcssrc.yml' from https://github.com/postcss/postcss-load-config#postcssrc.`);

program.showHelpAfterError('(add --help for additional information)');

program.parse(process.argv);

const opts = program.opts();
// console.log('CLI opts:', opts);

if (opts.version) {
    console.log(version);
}

const buildOpts = {
    baseImportDir: ((opts.baseImportDir) ? resolve(opts.baseImportDir) : null),
    fileExt: opts.fileExt,
    verbose: opts.verbose || null,
};

config((opts.customConfigFile) ? resolve(opts.customConfigFile) : null);
build(resolve(opts.inputDir), resolve(opts.outputDir), buildOpts);
