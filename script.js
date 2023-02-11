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
        isNaN(result.textContent += e.key);
    }
    if (e.code === "NumpadEnter") {
        result.innerText = eval(result.innerText);
        live_result.innerText = eval(result.innerText);
    }
    document.onkeydown = function(event) {
        if (event.code == "Backspace") {
            result.innerText = result.innerText.substr(0, result.textContent.length-1);
    }
    };
  }, false);
  function evaluateInnerText(result) {
    try {
      return (new Function(result.innerText))();
    } catch (e) {
      console.error("Failed to execute code:", e);
      return undefined;
    }
  }
function calculate(){
    let text = this.innerText;
    // var find_percentage = result.innerText.charAt( result.innerText.length -1 );
    console.log(live_result.innerText)
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
        live_result.innerText = evaluateInnerText(result);

        result.innerText = eval(result.innerText);
        live_result.innerText = eval(result.innerText);
    }else if(text === "%"){
        result.textContent += "*0.01";
        return;


    }  else {
        result.textContent += text;
        return;
    }
}