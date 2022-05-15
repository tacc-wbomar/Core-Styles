#!/usr/bin/env node

/** Export internal function used by this package to build styles */

const cmd = require('node-cmd');

// SEE: https://stackoverflow.com/a/63530170
process.env.FORCE_COLOR = true



/**
 * Build stylesheets from source CSS
 * @param {string} inputDir - Parse CSS files from which directory
 * @param {string} outputDir - Output CSS files to which directory
 * @param {object} [opts={}] - Options
 * @param {string} [opts.baseMirrorDir] - Do not add this path when mirroring
 * @param {object} [opts.fileExt='css'] - Extension of CSS files to parse
 * @param {string} [opts.configDir] - Custom config directory
 * @param {boolean} [opts.verbose=false] - To print more info from build log
 * @param {boolean} [opts.verbose=false] - To print more info from build log
 */
function build(inputDir, outputDir, opts = {}) {
  // Get data
  const fileExt = (opts.fileExt) ? '/*.' + opts.fileExt : '/*.css';
  const configDir = opts.configDir || `${__dirname}/../`;
  const verbose = (opts.verbose === true) ? '--verbose' : '';
  const base = (opts.baseMirrorDir) ? `--base "${opts.baseMirrorDir}"` : '';

  // Build command
  const command = `postcss "${inputDir}${fileExt}" --dir "${outputDir}" ${verbose} --config "${configDir}" ${base}`;

  console.log(`Building stylesheets to ${outputDir}`);

  // Run command
  cmd.runSync(command);
}



// Export
module.exports = build;
