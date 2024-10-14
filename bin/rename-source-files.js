const fs = require('fs');
const path = require('path');

function findSourceFiles( dir ) {
  let sourceFiles = [];
  const files = fs.readdirSync( dir );

  for ( const file of files ) {
    const filePath = path.join( dir, file );
    const relativePath = path.relative( path.join( __dirname, '../src'), filePath );
    const isDirectory = fs.statSync( filePath ).isDirectory();

    if ( isDirectory ) {
      sourceFiles.push(...findSourceFiles( filePath ));
      continue;
    }

    const isProbablySource = filePath.endsWith('.css');
    const shouldIgnore = (
      /^lib\/_imports\/[^/]+\/[^/]+\/[^/]+\.css$/.test(relativePath) ||
      relativePath.includes('_imports/vendors') ||
      filePath.endsWith('README.css')
    );

    if ( isProbablySource && ! shouldIgnore ) {
      sourceFiles.push(filePath);
    }
  }

  return sourceFiles;
}

const sourceDir = path.join( __dirname, '../', 'src');
const sourceFiles = findSourceFiles( sourceDir );

if ( sourceFiles.length > 0 ) {
  for ( const filePath of sourceFiles ) {
    const newFilePath = filePath.replace(/\.css$/, '.postcss');

    fs.renameSync( filePath, newFilePath );

    console.log(`Renamed: ${filePath} to ${newFilePath}`);
  }
} else {
  console.log('No source files found. No files renamed.');
}
