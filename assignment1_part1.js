#!/usr/bin/env node

var fs = require('fs');
var outfile = 'hello.txt';
var out = 'All your base, are belong to us.';
fs.writeFileSync(outfile, out);
console.log('Script' + __filename + '\nWrote: ' + out + ' To: ' + outfile);