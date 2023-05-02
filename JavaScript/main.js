const textToEncrypt = document.querySelector(".text-to-encrypt");
const encryptText = document.querySelector("#encrypt-text");

// La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function encrypt(stringEncrypt) {
    let arrayCode = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase() 
    
    for( let i=0; i < arrayCode.length; i++ ){
        if(stringEncrypt.includes(arrayCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(arrayCode[i][0], arrayCode[i][1])
        }
    }
    return stringEncrypt
}

function decrypt(stringDecrypt) {
    let arrayCode = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase() 
    
    for( let i=0; i < arrayCode.length; i++ ){
        if(stringDecrypt.includes(arrayCode[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(arrayCode[i][1] , arrayCode[i][0])
        }
    }
    return stringDecrypt
}


function buttonEncrypt() {
    document.getElementById("encrypted-container").style.display = "none";
    document.getElementById("encrypt").style.display="flex";
    const txtEncrypt = encrypt(textToEncrypt.value)
    encryptText.value = txtEncrypt;
    textToEncrypt.value = " ";
}

function buttonDecrypt() {
    document.getElementById("encrypted-container").style.display = "none";
    document.getElementById("encrypt").style.display="flex";
   
    const txtDecrypt = decrypt(textToEncrypt.value)
    encryptText.value = txtDecrypt;
    textToEncrypt.value = " ";
}

function buttonCopy() {
    var copyText = document.querySelector("#encrypt-text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }
