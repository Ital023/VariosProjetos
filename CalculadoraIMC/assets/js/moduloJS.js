export function createIMCResult(valueIMC,stringImc,link){
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
    a.href = link;
    a.innerHTML = 'Mais informações sobre IMC<i class="fa-solid fa-arrow-up-right-from-square"></i>';
    a.setAttribute('target', '_blank');

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
