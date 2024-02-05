#!usr/bin/node
const fs = require('file1');
const req = require('request');
req(process.argv[2].pipe(fs.createWriteStream(process.argv[3])));
  