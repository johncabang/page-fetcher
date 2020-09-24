const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

// command line prompt, takes in 2 arguments
// 1. URL as an argument
// 2. local file path
// Need to download the resources to apath

// Use request library = HTTP request
// Node 'fs' module to write the file
// Use call back approach

const fetcher = function(url, filePath) {
  
  request(url, (error, response, body) => {
    fs.writeFile(filePath, body, (err) => {
      if (err) {
        throw err;
      };
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });  
};

fetcher(url, filePath);

// Should print out: 'Downloaded and saved 1235 bytes to ./index.html'
