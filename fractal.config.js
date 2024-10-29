'use strict';

const mandelbrot = require('@frctl/mandelbrot');
const fractal = require('@frctl/fractal').create();

// Get base theme
const themeConfig = require('./fractal.theme.js');
const theme = mandelbrot(themeConfig);

// Configure UI
fractal.set('project.title', 'TACC UI Pattern Library');
fractal.components.set('label', 'Patterns');
fractal.components.set('title', 'Patterns');
fractal.components.set('default.status', 'wip');
fractal.components.set('statuses', {
  prototype: {
    label: "Prototype",
    description: "Do not implement.",
    color: "#666666"
  },
  wip: {
    label: "Work in Progress",
    description: "Work in progress. Implement with caution.",
    color: "#999933"
  },
  backup: {
    label: "Backup",
    description: "If regular variations fail.",
    color: "#996633"
  },
  ready: {
    label: "Ready",
    description: "Ready to implement.",
    color: "#339966"
  },
  deprecated: {
    label: 'Deprecated',
    description: 'Do not implement.',
    color: '#800000'
  }
});

// Set source paths
// (for components)
fractal.components.set('path', __dirname + '/src/lib/_imports');
fractal.components.set('resources', {
  // Render assets from component folders in a panel
  // WARNING: Undocumented feature
  // https://github.com/frctl/fractal/issues/150#issuecomment-254642411
  // https://github.com/frctl/fractal/issues/93#issuecomment-236429871
  assets: {
    label: 'Assets',
    match: ['**/*.css', '**/*.js'],
  },
});
fractal.components.set('default.context', {
  shouldSkipPattern: true, // true, because core-styles.….css loads most
  globalStyles: [{
    isInternal: true,
    layer: 'base',
    path: '/assets/core-styles.demo.css'
  },{
    isInternal: true,
    layer: 'base',
    path: '/assets/core-styles.base.css'
  }],
  cmsStyles: [{
    isInternal: true,
    layer: 'base',
    path: '/assets/core-styles.cms.css'
  }],
  docsStyles: [{
    isInternal: true,
    layer: 'base',
    path: '/assets/core-styles.docs.css'
  }],
  portalStyles: [{
    isInternal: true,
    layer: 'base',
    path: '/assets/core-styles.portal.css'
  }]
});

// Set website paths
fractal.docs.set('path', __dirname + '/docs');
fractal.web.set('static.path', __dirname + '/dist');
fractal.web.set('static.mount', 'assets');
fractal.web.set('builder.dest', __dirname + '/demo');

// Customize theme
fractal.web.theme(theme);

// Add template helpers
const engine = fractal.components.engine();
engine.handlebars.registerHelper('eq', function(a, b) {
  return a == b;
});
engine.handlebars.registerHelper('has', function(array, item) {
  return array.includes(item);
});
engine.handlebars.registerHelper('dataColAttr', function(row, val, cols) {
  function getColHeadingOfRow(row, val, cols) {
    if ( ! cols ) return '';

    const index = Object.entries(row).findIndex(el => el[1] === val);
    const col = cols[index];

    return col;
  }

  const columnHeading = getColHeadingOfRow(row, val, cols);

  return (columnHeading) ? `data-col="${columnHeading}"` : '';
});
engine.handlebars.registerHelper('ifno', function(value, fallback) {
  const output = value || fallback;
  return new engine.handlebars.SafeString(output);
});

// Export
module.exports = fractal;
