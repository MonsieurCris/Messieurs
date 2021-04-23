var burger = document.querySelector(".burger"); /*  busca o seletor */

burger.addEventListener("click", function(){ /*  escuta o evento de clique e vai exectuar a função */
    document.querySelector("aside").classList.toggle("show-menu"); /*  pega o elemento aside e a partir da fazer uma alteração onde tem a classe show-menu  */
    document.querySelector(".burger").classList.toggle("show-menu");
});

// orçamento
document.querySelector("#qte").addEventListener("change", atualizarPreco)
document.querySelector("#carta").addEventListener("change", atualizarPreco)
document.querySelector("#urgencia-sim").addEventListener("change", atualizarPreco)
document.querySelector("#urgencia-nao").addEventListener("change", atualizarPreco)

document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qte").value
    const temCarta = document.querySelector("#carta").checked
    const incluiUrgencia = document.querySelector("#urgencia-sim").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 35;
    if (temCarta) preco += 600
    if (incluiUrgencia) preco += 600
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `Total R$ ${preco.toFixed(2)}`
}