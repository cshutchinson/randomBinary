function randomBinary(){
  var baseString =  (Math.floor(Math.random()*255)).toString(2);
  var paddedString = '';
  for (var x=0; x<8-baseString.length; x++){
    paddedString += '0';
  }
  return paddedString + baseString;
}

module.exports = randomBinary;
