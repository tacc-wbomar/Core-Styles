const fs = require('fs');
const { version } = require('../package.json');

const root = __dirname;
const data = fs.readFileSync(root + '/../source/_imports/version.css', 'utf8');
const newData = data.replace(/{{ver}}/g, version);
fs.writeFileSync(root + '/../source/_version.css', newData, 'utf8');
