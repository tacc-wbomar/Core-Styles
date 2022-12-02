#!/usr/bin/env node

/** Build CSS using the Core-Styles API */

const { buildStylesheets } = require('../src/main');

buildStylesheets('src/lib/_imports/**/*!(fractal.server.refresh).css', './dist', {
  baseMirrorDir: 'src/lib/_imports',
});
