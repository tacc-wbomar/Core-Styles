#!/usr/bin/env node

/** CLI to custom build stylesheets and create a version stylesheet */

const { program } = require('commander');

const package = require(process.env.npm_package_json || './package.json');

const {
    buildStylesheets,
    createVersionStylesheet
} = require('./index.js');



// Setup
program
    .name('core-styles')
    .version(package.version)
    .showHelpAfterError('(add --help for additional information)');



// Build Command
program
    .command('build')
    .description(`build stylesheets with TACC standard process:
- "post-css" plugins
- custom input dir
- custom output dir
- custom configs
    `)
    .requiredOption('-i, --input-dir <path>',
        'parse source from which directory¹')
    .requiredOption('-o, --output-dir <path>',
        'output CSS files to which directory¹')
    .option('-e, --file-ext <ext>',
        'extensions to parse', 'css')
    .option('-v, --verbose',
        'print more info during build process')
    .option('-c, --custom-configs <paths...>',
        `extend base config with YAML files²³`)
    .addHelpText('after', `
Notes:
  ¹ Folder structure of "--input-dir" mirrored in "--output-dir" e.g.

    given input
    - "input_dir/x.css"
    - "input_dir/sub_dir_a/y.css"

    expect output
    - "output_dir/x.css"
    - "output_dir/sub_dir_a/y.css"

  ² The file formats are like ".postcssrc.yml" from
    https://github.com/postcss/postcss-load-config#postcssrc

  ³ The first file is merged on top of the base config.
    Each successive file overwrites the file before it.
    `).action( programOpts => {
        const { inputDir, outputDir, ...opts } = programOpts;

        buildStylesheets( inputDir, outputDir, opts );
    });



// Version Command
program
    .command('version')
    .description(`create a stylesheet with preserved comment w/
- app name
- app license
- app version (or custom build id)
- custom output path
    `)
    .requiredOption('-o, --output-path <path>',
        'output version stylesheet at what path')
    .option('-b, --build-id <identifier>',
        'any value to identify the build')
    .action( programOpts => {
        const { outputPath, ...opts } = programOpts;

        createVersionStylesheet( outputPath, opts );
    });



// Parse
program.parse(process.argv);
