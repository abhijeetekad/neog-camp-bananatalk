var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-Input')
var outputDiv = document.querySelector("#output"); 

console.log(outputDiv)

function clickEventHandler(){
    outputDiv.innerText = "kcdacvacd " + txtInput.value;
};
btnTranslate.addEventListener("click",clickEventHandler)