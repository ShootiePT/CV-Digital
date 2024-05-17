const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const leftCol = document.getElementById('left-col');
let isDarkMode = true;

toggleButton.addEventListener('click', function() {
    // Alternar o modo para o body
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Alternar o modo para o left-col
    leftCol.classList.toggle('col-light-mode');
    leftCol.classList.toggle('col-dark-mode');

    // Alternar a variável de controle
    isDarkMode = !isDarkMode;

    // Alternar a classe "checked" no botão toggleButton
    toggleButton.classList.toggle("checked");
});
