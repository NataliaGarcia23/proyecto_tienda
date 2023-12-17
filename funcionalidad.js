var waveBtn = (function () {
  'use strict';
  var btn = document.querySelectorAll('.wave'),
      tab = document.querySelector('.tab-bar'),
      indicator = document.querySelector('.indicator'),
      indi = 0;
  indicator.style.marginLeft = indi + 'px';

  for(var i = 0; i < btn.length; i++) {
    btn[i].onmousedown = function (e) {
      var newRound = document.createElement('div'),x,y;

      newRound.className = 'cercle';
      this.appendChild(newRound);

      x = e.pageX - this.offsetLeft;
      y = e.pageY - this.offsetTop;

      newRound.style.left = x + "px";
      newRound.style.top = y + "px";
      newRound.className += " anim";

      indicator.style.marginLeft = indi + (this.dataset.num-1) * 176 + 'px';

      setTimeout(function() {
        newRound.remove();
      }, 1200);
    };
  }
}());

//Pantallas

const op1 = document.getElementById('inicio');
const op2 = document.getElementById('productos');
const op3 = document.getElementById('ropa');
const op4 = document.getElementById('bolsos');
const op5 = document.getElementById('zapatos');
const op6 = document.getElementById('bisuteria');
const op7 = document.getElementById('buscar');
const pant1 = document.getElementById('pantInicio');
const pant2 = document.getElementById('pantProductos');
const pant3 = document.getElementById('pantRopa');
const pant4 = document.getElementById('pantBolsos');
const pant5 = document.getElementById('pantZapatos');
const pant6 = document.getElementById('pantBisuteria');
const pant7 = document.getElementById('pantBusqueda');

window.onload = function() {
  pant1.style.display = 'block';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
}

op1.addEventListener('click', function() {
  pant1.style.display = 'block';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
  pant.scrollTop = posInicio;
});

op2.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'block';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
  pant.scrollTop = posProductos;
});

op3.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'none';
  pant3.style.display = 'block';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
  pant.scrollTop = posRopa;
});

op4.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'block';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
  pant.scrollTop = posBolsos;
});

op5.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'block';
  pant6.style.display = 'none';
  pant7.style.display = 'none';
  pant.scrollTop = posZapatos;
});

op6.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'block';
  pant7.style.display = 'none';
  pant.scrollTop = posBisuteria;
});

op7.addEventListener('click', function() {
  pant1.style.display = 'none';
  pant2.style.display = 'none';
  pant3.style.display = 'none';
  pant4.style.display = 'none';
  pant5.style.display = 'none';
  pant6.style.display = 'none';
  pant7.style.display = 'block';
  pant.scrollTop = posBusqueda;
});

const pantInicio = document.querySelector('.pantInicio');
const posInicio = pantInicio.scrollTop;
console.log(posInicio);

const pantProductos = document.querySelector('.pantProductos');
const posProductos = pant.scrollTop;
console.log(posProductos);

const pantRopa = document.querySelector('.pantProductos');
const posRopa = pantRopa.scrollTop;
console.log(posRopa);

const pantBolsos = document.querySelector('.pantBolsos');
const posBolsos = pantBolsos.scrollTop;
console.log(posBolsos);

const pantZapatos = document.querySelector('.pantZapatos');
const posZapatos = pantZapatos.scrollTop;
console.log(posZapatos);

const pantBisuteria = document.querySelector('.pantBisuteria');
const posBisuteria = pantBisuteria.scrollTop;
console.log(posBisuteria);

const pantBusqueda = document.querySelector('.pantBusqueda');
const posBusqueda = pantBusqueda.scrollTop;
console.log(posBusqueda);