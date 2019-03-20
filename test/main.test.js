const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, './.env')
});
const reversed = process.env.REVERSED;
const reverseString = require('../index.js');
const runTest = require('./run-test.js');
runTest(reverseString(reversed));
