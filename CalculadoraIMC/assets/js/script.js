import { createIMCResult } from "./moduloJS.js";

const inputWeight = document.querySelector("#input-weight");
const inputheight = document.querySelector("#input-height");
const form = document.querySelector("form");
const card = document.querySelector(".card-formulario");
let exibicao = false;

form.addEventListener("submit",(ev)=>{
    ev.preventDefault();

    const weight = document.querySelector("#input-weight").value;
    const height = document.querySelector("#input-height").value;


    if(!exibicao){
        const valueimc = weight/(height*height) * 10000;
        const valueimcFixed = valueimc.toFixed(2);

        let stringimc = "";

        if(valueimcFixed <= 18.5) stringimc="Abaixo do peso";
        else if (valueimcFixed >= 18.5 && valueimcFixed <= 24.99) stringimc="Normal";
        else if(valueimcFixed >= 25 && valueimcFixed <= 29.99) stringimc = "Sobrepeso";
        else if(valueimcFixed >= 30) stringimc = "Obesidade";

    
        const result = createIMCResult(valueimcFixed,stringimc,"https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm#:~:text=O%20IMC%20(%C3%8Dndice%20de%20Massa,o%20peso%20ideal%20ou%20n%C3%A3o.");
    
        card.appendChild(result);

        exibicao = true;
    }else{
        const result = document.querySelector(".infos");

        card.removeChild(result);
        exibicao = false;
    }
    

})

