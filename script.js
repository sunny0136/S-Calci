const live_result = document.querySelector(".live_result");
const result = document.querySelector(".result");
const btns = document.querySelectorAll("button")
// const keyboard = document.addEventListener('keydown', calculate, true);
btns.forEach(key => {
    key.addEventListener('click', calculate)
});
document.addEventListener('keypress', ( e ) => {
    var key = e.keyCode;
// console.log(key);


    if (key >= 48 && key <= 57) {
        result.textContent += key - 48;
    }
    if (e.code === "NumpadAdd" || e.code === "NumpadDivide" || e.code === "NumpadSubtract" || e.code === "NumpadMultiply" || e.code === "NumpadDecimal") {
        console.log(isNaN(result.textContent += e.key));
    }
    if (e.code === "NumpadEnter") {
        result.innerText = eval(result.innerText);
        live_result.innerText = eval(result.innerText);
    }
    document.onkeyup = function(event) {
        if (event.code == "Backspace") {
            result.innerText = result.innerText.substr(0, result.textContent.length-1);
    }
    };
  }, false);
function calculate(){
    let text = this.innerText;
    var lastChar = result.innerText.charAt( result.innerText.length -1 );

    // Validation
    if( text !== "←" && isNaN( text ) && isNaN( result.innerText.charAt( result.innerText.length - 1 ) ) ) {
        result.innerText = result.innerText.slice( 0, -1 );
    }

    if(text === "c"){
        live_result.innerText = "";
        result.innerText = "";
        return;
    }else if(text === "←"){
        result.innerText = result.innerText.substr(0, result.textContent.length-1);
    }else if(text === "="){
        result.innerText = eval(result.innerText);
        live_result.innerText = eval(result.innerText);
    }else if(text === "%" && lastChar){
        alert(result.innerText = result.innerText.slice( 0, -1 ) * 0.01);

    }  else {
        result.textContent += text;
        return;
    }
}