#!/usr/bin/env node

/** Build CSS using the Core-Styles API */

const { buildStylesheets } = require('../src/main');
const mininmist = require('minimist');

const ARGS = mininmist( process.argv.slice( 2 ) );
// HELP: `ARGS['build-id']` is array (dunno why) of [',' '… the build id …']
const BUILD_ID = ARGS['build-id'][1] || '';

buildStylesheets('src/lib/_imports/**/*!(fractal.server.refresh).css', './dist', {
  baseMirrorDir: 'src/lib/_imports',
  buildId: BUILD_ID
});
