// Seleciona os elementos
const cardBrasil = document.querySelector('.selecao'); // Seleciona o card do Brasil
const modalBrasil = document.getElementById('modal-brasil');
const btnFechar = document.getElementById('fechar-modal');

// Quando clicar no card, adiciona a classe que mostra a modal
cardBrasil.addEventListener('click', () => {
    modalBrasil.classList.add('mostrar');
});

// Quando clicar no X, remove a classe e ela volta a sumir
btnFechar.addEventListener('click', () => {
    modalBrasil.classList.remove('mostrar');
});