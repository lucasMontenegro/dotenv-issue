const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, './.env'),
  encoding: 'utf8'
});
const reverseString = require('../index.js');
const runTest = require('./run-test.js');

runTest(reverseString(process.env.REVERSED));
