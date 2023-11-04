const inputWeight = document.querySelector("#input-weight");
const inputheight = document.querySelector("#input-height");
const form = document.querySelector("form");

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    const weight = inputWeight.value;

    const height = inputheight.value;



})

function createIMCResult(valueIMC){
    const body = document.querySelector("body");

    const divInfos = document.createElement("div");
    div.classList.add("infos");

    const divResult = document.createElement("div");
    div.classList.add("result");

    const divResultValues = document.createElement("div");
    div.classList.add("result-values");

    const pValue = document.createElement("p");
    pValue.classList.add("result-value");

    const pIMC = document.createElement("p");
    pValue.classList.add("result-seuImc");

    


}