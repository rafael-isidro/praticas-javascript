const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer; 

document.addEventListener('click', function(event) {
  const element = event.target;

  if(element.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }

  if(element.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
  }

  if(element.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }
})

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000); 
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}
