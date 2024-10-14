const fs = require('fs');
const path = require('path');

function findBuiltFiles( dir ) {
  let filesBuilt = [];
  const files = fs.readdirSync( dir );

  for ( const file of files ) {
    const filePath = path.join( dir, file );
    const relativePath = path.relative( path.join( __dirname, '../src'), filePath );
    const stat = fs.statSync( filePath );

    const isDirectory = stat.isDirectory();
    const isProbablyBuilt = filePath.endsWith('.css');
    const mayIgnore = (
      relativePath.match(/^lib\/_imports\/[^/]+\/[^/]+\/[^/]+\.css$/)
      || relativePath.match('_imports/vendors')
      || filePath.endsWith('README.css')
    );

    if ( isDirectory ) {
      filesBuilt = filesBuilt.concat( findBuiltFiles( filePath ));
    } else if ( isProbablyBuilt && ! mayIgnore ) {
      filesBuilt.push(filePath);
    }
  }

  return filesBuilt;
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
