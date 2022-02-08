#!/usr/bin/env node

const { program } = require('commander');

const coreStyles = require('../index.js');

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
	.option('-c, --custom-config-files <paths...>',
        `overwrite base config with values from YAML files¹² (advanced)`);

program.addHelpText('after', `
Note:
    The dir structure within '--input-dir' will be mirrored in '--output-dir'.

Footnotes:
    ¹ The file formats are like '.postcssrc.yml' from https://github.com/postcss/postcss-load-config#postcssrc.
    ² The first file is merged on top of the base config.
      Each successive file overwrites the file before it.
`);

program.showHelpAfterError('(add --help for additional information)');

program.parse(process.argv);

const opts = program.opts();
// console.log('[cli.js] opts:', opts);

const { inputDir, outputDir, ...buildOpts } = opts;

coreStyles( inputDir, outputDir, opts );
