#!/usr/bin/env node

/** Build CSS using the Core-Styles API */

const { buildStylesheets } = require('../src/main');
const mininmist = require('minimist');

const ARGS = mininmist( process.argv.slice( 2 ) );
const BUILD_ID = ARGS['build-id'] || '';

/* Theme: (default) */
buildStylesheets('src/lib/_imports/**/*!(fractal.server.refresh).css', './dist', {
  baseMirrorDir: 'src/lib/_imports',
  buildId: BUILD_ID
});

/* Theme: has-dark-logo */
const hasDarkLogoBuildOpts = {
  baseMirrorDir: 'src/lib/_imports',
  buildId: BUILD_ID,
  customConfigs: [
    `${__dirname}/../src/.postcssrc.has-dark-logo.yml`
  ]
};
buildStylesheets('src/lib/_imports/core-styles.header.css', './dist', hasDarkLogoBuildOpts );
buildStylesheets('src/lib/_imports/trumps/s-header.css', './dist', hasDarkLogoBuildOpts );
buildStylesheets('src/lib/_imports/trumps/tacc-search-bar.css', './dist', hasDarkLogoBuildOpts );
