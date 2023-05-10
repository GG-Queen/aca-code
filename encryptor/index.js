console.log('The encryptor js file loaded');

const letteres = 'abcdefghijklmnopqrstuvwxyz!';
const encrypt_key = 'bcdefghijklmnopqrstuvwxyza?';

function encrypttext(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
   let letter = text[i];
    let letterIndex = letters.indexOf(letter);
  
    if (letterIndex < 0) {
      result += letter;
  }
    
    els{
     result += encrypt_key[letterIndex]; 
 }
}
return result;  
}
function dcrypttext(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
   let letter = text[i];
    let letterIndex = letters.indexOf(letter);
  
    if (letterIndex < 0) {
      result += letter;
  }
    
    els{
     result += encrypt_key[letterIndex]; 
 }
}
return result;  
}
