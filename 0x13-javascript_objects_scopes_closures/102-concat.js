#!/usr/bin/node
// Concat two files

const fs = require('fs');

const dat1 = fs.readFileSync(process.argv[2], 'utf8');
const dat2 = fs.readFileSync(process.argv[3], 'utf8');

fs.writeFileSync(process.argv[4], dat1 + dat2);
