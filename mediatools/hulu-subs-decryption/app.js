$(function() {
  
  var data = '01c10b77de3795c18c3f38307cb3d7ea5b72ca94b099007d27555dd4076010832215d37e52aca503848cb41eb47c6ffb';
  var key  = '4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21';
  
  $('#out').html('Running');
  
  var plaintext = "Happy Birthday!";
  var key = hexToByteArray(genkey());
  //key = hexToByteArray(key);
  console.log(genkey());
  var mode = 'CBC'; // ECB or CBC
  var ciphertext = byteArrayToHex(rijndaelEncrypt(plaintext,key, mode));
    $('#out').html(byteArrayToString(
      rijndaelDecrypt(hexToByteArray(ciphertext), key, mode)));
  
});

var text = 'Hello, world!';
var password = 'itsmysecret';
var blocksize = 256;   // can be 128, 192 or 256
 
var crypted = AES.encrypt( text, password, blocksize );
// do something...
var decrypted = AES.decrypt( crypted, password, blocksize );