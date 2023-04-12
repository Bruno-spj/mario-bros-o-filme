const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {

botao.addEventListener('click' , () => {

    const botoesSelecionado = document.querySelector('.selecionado');

    botoesSelecionado.classList.remove('selecionado');

    botao.classList.add('selecionado');

    const imagemAtiva = document.querySelector('.ativa');

    imagemAtiva.classList.remove('ativa');

    imagens[indice].classList.add('ativa');

})

})

