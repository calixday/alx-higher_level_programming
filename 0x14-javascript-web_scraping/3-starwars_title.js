#!/usr/bin/node
const request = require('request');
const API = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];
request(API, function (error, response, body) {
  console.log(error || JSON.parse(body).title);
});
