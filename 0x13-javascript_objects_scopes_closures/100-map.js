#!/usr/bin/node
const list = require('./100-data').list;
const m = (value, index) => value * index;
const n = list.map(m);
console.log(list);
console.log(n);
