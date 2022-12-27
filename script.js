const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    const cartao = document.getElementById('cartao');
    const numero = document.getElementById('cartao-number');
    const mes = document.getElementById('cartao-data-mes');
    const ano = document.getElementById('cartao-data-ano');
    const cvc = document.getElementById('cartao-cvc');

    if(cartao.value && numero.value && mes.value && ano.value && cvc.value){
        insereDadosFrente(cartao.value, numero.value, mes.value, ano.value);

        insereDadosAtras(cvc.value);

        finalizaProcesso();

        const buttonContinue = document.getElementById('button-continue');

        buttonContinue.addEventListener('click', (e) => {
            e.preventDefault();    
            
            window.location.reload() 
        
        });
    }
    
});

function insereDadosFrente(cartao,numero,mes,ano){
    const cartaoFrente = document.getElementById('frente-cartao');
    cartaoFrente.innerHTML = `
    <div class="cartao-numero">${numero}</div>
        <div class="cartao-nome""><p class="nome">${cartao}</p><strong>${mes}/${ano}</strong></div>
    `
}

function insereDadosAtras(cvc){
    const cartaoTras = document.getElementById('tras-cartao');
    cartaoTras.innerHTML = `
    <div class="cartao-numero-tras">${cvc}</div>
    `
}

function finalizaProcesso(){
    const formulario = document.getElementById('formulario');
    formulario.innerHTML = `
    <div class="finalizacao-processo">
      <div class="icone-completo">
        <img src="/images/icon-complete.svg" alt="completo">
      </div>
      <div class="agradecimento"><h1>THANK YOU</h1></div>
      <div class="frase-confirmacao"><p>We've added your card details</p></div>
      <button class="btn" id="button-continue">Continue</button>
  </div>
    `
}