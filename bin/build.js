const { exec } = require('child_process');

// SEE: https://stackoverflow.com/a/63530170
process.env.FORCE_COLOR = true

/**
 * Callback on execution (Node `exec()` callback)
 * @see https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
 */
function execCallback(err, stdout, stderr) {
  if (err) { console.error(err); return; }
  if (stderr) { console.error(stderr); return; }
  console.log(stdout);
}

/**
 * Build styles from external CSS
 * @param {string} inputDir - Parse CSS files from which directory
 * @param {string} outputDir - Output CSS files to which directory
 * @param {object} [opts={}] - Options
 * @param {object} [opts.fileExt='css'] - Extension of CSS files to parse
 * @param {string} [opts.configDir] - Custom config directory
 * @param {boolean} [opts.verbose=false] - To print more info from build log
 */
function build(inputDir, outputDir, opts = {}) {
  const sourceDir = `${__dirname}/../source`;

  const fileExt = opts.fileExt || 'css';
  const configDir = opts.configDir || `${__dirname}/../`;
  const verbose = (opts.verbose === true) ? '--verbose' : '';

  const command = `postcss "${inputDir}/*.${fileExt}" --dir "${outputDir}" ${verbose} --config "${configDir}"`;

  exec(command, execCallback);
  // console.log(command); // only shown if command execution is commented out
}

module.exports = build;
