var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output-div")

var serverURL = "https://api.funtranslations.com/translate/doge.json" 

function translationURL(inputText){
    return serverURL + "?text=" + inputText
}

function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! Try again.")
}

function clickEventHandler(){

    var inputText = txtInput.value
   fetch(translationURL(inputText))
   .then(response => response.json())
   .then(json => outputDiv.innerText = json.contents.translated)
   .catch(errorHandler)
    
}

btnTranslate.addEventListener("click", clickEventHandler)