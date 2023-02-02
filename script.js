const live_result = document.querySelector(".live_result");
const result = document.querySelector(".result");
const btns = document.querySelectorAll("button")
//addevent listner 
btns.forEach(key => {
    key.addEventListener('click', calculate)
});
function calculate(){
    let text = this.innerText;
if(text === "c"){
live_result.innerText = "";
result.innerText = "";
return;
}else
if(text === "←"){
    result.innerText = result.innerText.substr(0, result.textContent.length-1);
}else
if(text === "="){
    result.innerText = eval(result.innerText);
}
else{
    result.textContent += text;
    return;
}
}