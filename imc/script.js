const form = document.querySelector('#form-box');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  setResultado(result);
});

function setResultado (msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = msg;
};

const altura = document.querySelector('.altura');
const peso = document.querySelector('.peso');

const pesoInt = parseInt(peso);
const alturaINt = parseInt(altura);

result = (alturaINt*alturaINt)/pesoInt;

