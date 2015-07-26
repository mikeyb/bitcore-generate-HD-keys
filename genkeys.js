bitcore = require('bitcore');                                                                                                                                                  
 
var hdPrivateKey = new bitcore.HDPrivateKey();
console.log( "HD MASTER KEY (m): " + hdPrivateKey );
 
var derivedHdPrivateKey = hdPrivateKey.derive("m/44'/0'/0");
console.log( "HD KEY (m/44'/0'/0): " + derivedHdPrivateKey);
 
var derivedHdPublicKey = derivedHdPrivateKey.hdPublicKey;
console.log( "HD PUB (m/44'/0'/0): " + derivedHdPublicKey);
 
var derivedPrivateKey = hdPrivateKey.privateKey;
console.log( "KEY (m/44'/0'/0): " + derivedPrivateKey);
 
var derivedPublicKey = derivedHdPublicKey.publicKey
console.log( "PUB (m/44'/0'/0): " + derivedPublicKey);
