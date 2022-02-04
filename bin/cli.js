#!/usr/bin/env node

const { resolve } = require('path');
const { program } = require('commander');

const build = require('./build.js');
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
	.option('-c, --config <path>',
        `load custom config file from which directory¹ (advanced feature)`);

program.addHelpText('after', `
Note:
    the dir structure within '--input-dir' will be mirrored in '--output-dir'

Footnotes:
    ¹ See stand-alone files supported by https://github.com/postcss/postcss-load-config`);

program.showHelpAfterError('(add --help for additional information)');

program.parse(process.argv);

const opts = program.opts();
// console.log('CLI opts:', opts);

if (opts.version) {
    console.log(version);
}

const buildOpts = {
    configDir: ((opts.configDir) ? resolve(opts.configDir) : null),
    fileExt: opts.fileExt,
    verbose: opts.verbose || null,
};

build(
    resolve(opts.inputDir),
    resolve(opts.outputDir),
    buildOpts
);
