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
  }// if
    
    els{
     result += encrypt_key[letterIndex]; 
 }// for
}
return result;
  
}// decrypt

const encryptform = document.getElementById
document.getElement.ById('').addeventListener('submit',function(e){
  e.preventDefault();
    let messageElement = document.getElementById("encrypt");
    let message = document.getElementBYId("encrypt");
    let encrypted = encrypt (message);
    let encodedMessageElement = document.getElementById('encoded-message');
    encodedMessageElement.innerText = encrypted;
  });

