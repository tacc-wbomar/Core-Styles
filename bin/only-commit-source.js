const fs = require('fs');
const path = require('path');

function findBuiltFiles( dir ) {
  let builtFiles = [];
  const files = fs.readdirSync( dir );

  for ( const file of files ) {
    const filePath = path.join( dir, file );
    const relativePath = path.relative( path.join( __dirname, '../src'), filePath );
    const isDirectory = (fs.statSync( filePath )).isDirectory();

    if ( isDirectory ) {
      builtFiles = builtFiles.concat( findBuiltFiles( filePath ));
      continue;
    }

    const isProbablyBuilt = filePath.endsWith('.css');
    const shouldIgnore = (
      relativePath.match(/^lib\/_imports\/[^/]+\/[^/]+\/[^/]+\.css$/)
      || relativePath.match('_imports/vendors')
      || filePath.endsWith('README.css')
    );

    if ( isProbablyBuilt && ! shouldIgnore ) {
      builtFiles.push(filePath);
    }
  }

  return builtFiles;
}

const sourceDir = path.join( __dirname, '../', 'src');
const filesBuilt = findBuiltFiles( sourceDir );

if ( filesBuilt.length > 0 ) {
  console.error(
    `Found ${filesBuilt.length} dist files in source. Remove to permit publish:`
  );
  filesBuilt.forEach( file =>
    console.error(`- ${file}`)
  );

  process.exit(1);
} else {
  console.log('No dist files found in source. Ready to publish.');
}
