function mostrarVegas() {
    
    const estrategia = document.getElementById("estrategia").value;
    const sequencia = document.getElementById("sequencia").value;
    const number = document.getElementById("number").value;
    const cs_aposta = document.getElementById("cs_aposta").value;
    let rEntrada = "";

    if (estrategia == "SPEED CASH") {
            if (sequencia == "VERMELHO") {
              rEntrada = "Preto";
            }else if(sequencia == "Preto") {
              rEntrada = "VERMELHO";
            }else if (sequencia == "MAIORES") {
              rEntrada = "MENORES 1-18";
            }else if(sequencia == "MENORES") {
              rEntrada = "MAIORES 19-36";
            }
     
         document.getElementById("respostaCopa").innerHTML = `
             🔴 VEGAS BOT INFORMA - CASINO COPA  <br/>
             <br/>
             AINDA NÃO ENTRAR [Entrar em 12X]- <br/>
             ${cs_aposta} <br/> 
             <br/>
             ESTRATÉGIA : ${estrategia} <br/>
             SEQUÊNCIA : ${number}X ${sequencia} <br/>
             <br/>
             https://www.casinocopa.com/pt-br/games/play/998/104?demo=false <br/>
             <br/>
             ENTRADA - ${rEntrada}  -  1%
         `;
    } else if (estrategia == "MILIONÁRIA") {
         document.getElementById("respostaCopa").innerHTML = `
             🔴 VEGAS BOT INFORMA - CASINO COPA <br/>
             <br/>
             AINDA NÃO ENTRAR [Entrar em 7X]- <br/>
             ${cs_aposta} <br/> 
             <br/>
             ESTRATÉGIA : ${estrategia} <br/>
             SEQUÊNCIA : ${number}X ${sequencia} <br/>
             <br/>
             https://www.casinocopa.com/pt-br/games/play/998/104?demo=false <br/>
             <br/>
         `;
    }
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarVegas);