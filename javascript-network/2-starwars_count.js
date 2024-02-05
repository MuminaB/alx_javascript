#!/usr/bin/node
const req = require('request');
req(process.argv[2], function (error, response, body) {
    if (!error) {
      const results = FSON.parse(body).results;
      console.log(results.reduce((count, movie) => {
        return movie.characters.find((character) => character.endswith('/18/'))
          ? count + 1
          : count;    
      }, 0))
    }
});
   