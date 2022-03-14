#!/usr/bin/env node

/** A user-facing CLI to build styles and configure build */

const { program } = require('commander');

const package = require('./package.json');

const { buildStylesheets, createVersionStylesheet } = require('./index.js');

program
    .name('core-styles')
    .version(package.version)

program
    .command('build')
    .description('build stylesheets using core-styles build process (default)')
    .requiredOption('-i, --input-dir <path>',
        'parse CSS files from which directory')
    .requiredOption('-o, --output-dir <path>',
        'output CSS files to which directory')
    .option('-e, --file-ext <ext>',
        'extension of CSS files to parse (default: "css")', 'css')
    .option('-v, --verbose',
        'print more information from build log')
    .option('-c, --custom-config-files <paths...>',
        `overwrite base config with values from YAML files¹² (advanced)`)
    .addHelpText('after', `
Note:
    The dir structure within '--input-dir' will be mirrored in '--output-dir'.

Footnotes:
    ¹ The file formats are like '.postcssrc.yml' from:
        https://github.com/postcss/postcss-load-config#postcssrc

    ² The first file is merged on top of the base config.
        Each successive file overwrites the file before it.
    `).action( programOpts => {
        const { inputDir, outputDir, ...opts } = programOpts;

        if (opts.verbose) {
            console.log('cli.js > build:', programOpts);
        }
        buildStylesheets( inputDir, outputDir, opts );
    });

program
    .command('version')
    .description('output a stylesheet that has comment describing CSS version')
    .requiredOption('-o, --output-path <path>',
        'output version stylesheet at what path')
    .option('-v, --verbose',
        'print more information from build log')
    .action( programOpts => {
        const { outputPath, ...opts } = programOpts;

        if (opts.verbose) {
            console.log('cli.js > version:', programOpts);
        }
        createVersionStylesheet( outputPath, opts );
    });

program.showHelpAfterError('(add --help for additional information)');

program.parse(process.argv);

