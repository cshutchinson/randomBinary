randomString = require('./app.js');

testBinary = randomString()+randomString()+randomString();
return console.log('0x' + parseInt(testBinary, 2).toString(16));
