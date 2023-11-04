const inputWeight = document.querySelector("#input-weight");
const inputheight = document.querySelector("#input-height");
const form = document.querySelector("form");
const card = document.querySelector(".card-formulario");
let exibicao = false;

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();


    if(!exibicao){
        const valueimc = 50;
        let stringimc = "teste";
    
        const result = createIMCResult(valueimc,stringimc);
    
        card.appendChild(result);

        exibicao = true;
    }else{
        const result = document.querySelector(".infos");

        card.removeChild(result);
        exibicao = false;
    }
    

})

function createIMCResult(valueIMC,stringImc){
    const divInfos = createDiv("infos");
    const divResult = createDiv("result");
    divInfos.appendChild(divResult);

    const divResultValues = createDiv("result-values");
    const spanValue = createSpan("result-value",valueIMC);
    const spanResultImc = createSpan("result-seuImc","Seu IMC");
    divResultValues.append(spanValue,spanResultImc);

    divResult.appendChild(divResultValues);
    const spanResultText = createSpan("result-text",stringImc);
    divResult.appendChild(spanResultText);

    const a = document.createElement("a");
    a.classList.add("infos-ancora");
    a.href = "#";
    a.innerHTML = 'Mais informações sobre IMC<i class="fa-solid fa-arrow-up-right-from-square"></i>'

    divInfos.appendChild(a);

    return divInfos;
}

function createDiv(classeName){
    const div = document.createElement("div");
    div.classList.add(classeName);

    return div;
}

function createSpan(classeName,value){
    const span = document.createElement("span");
    span.classList.add(classeName);
    span.textContent = value;

    return span;
}
