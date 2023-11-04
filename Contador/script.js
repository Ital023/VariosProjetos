const buttons = document.querySelectorAll(".btn-contador");
const acumuladorContador = document.querySelector("#acum-contador");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const value = button.dataset.value;
        
        if(value === "+"){
            //acumuladorContador.dataset.acum += 1;
            let valor = acumuladorContador.textContent;
            valor++;
            acumuladorContador.textContent = "";
            acumuladorContador.textContent = valor;
        }else{
            let valor = acumuladorContador.textContent;
            valor--;
            acumuladorContador.textContent = "";
            acumuladorContador.textContent = valor;
        }
    
    })
})

const btnReset = document.querySelector(".btn-resetar");

btnReset.addEventListener("click",()=>{
    acumuladorContador.textContent = 0;
})