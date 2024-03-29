class Accordion {
  constructor(heading) {
    this.heading = heading;
  }

  showOne() {
    const accordionHeading = document.querySelectorAll(this.heading);

    accordionHeading.forEach((item, key) => {
      item.addEventListener('click', () => {
        accordionHeading.forEach(element => {
          element.classList.contains('active') ?
            element.classList.remove('active') : null;
        });

        item.classList.add('active');
      });
    });
  }

  showAll() {
    const accordionHeading = document.querySelectorAll(this.heading);

    accordionHeading.forEach((item, key) => {
      item.addEventListener('click', () => {
        item.classList.contains('active') ?
          item.classList.remove('active') :
          item.classList.add('active');
      });
    });
  }
}

const accordion = new Accordion('.tit');
// for open every use showAll();
accordion.showOne();

setTimeout(() => {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
}, 2000);

document.querySelector('.assista').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
});

document.querySelector('.modal-close-btn').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');

  setTimeout(() => {
    document.querySelector('.assista').classList.add('active');
  }, 1300);
});
document.getElementById('overlay').addEventListener('click', function () {
  document.getElementById('overlay').classList.remove('is-visible');
  document.getElementById('modal').classList.remove('is-visible');

  setTimeout(() => {
    document.querySelector('.assista').classList.add('active');
  }, 1300);
});

const burgerMenu = document.querySelector(".burger");
const navbarMenu = document.querySelector(".nav");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});


//Busca do site
document.querySelector('.search').addEventListener('click', () => {
  document.querySelector('.search-open').classList.toggle('active');
});

// document.querySelector('.search-close').addEventListener('click', () => {
//   document.querySelector('.search-open').classList.remove('active');
// });

// Carousel da Rifa
$(document).ready(function () {
  let timeC = parseInt(document.querySelector('[data-timer]').dataset.timer, 10);
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    autoplayTimeout: timeC,
    nav: true,
    dots: false
  });
});

// Reservar Números
document.querySelector("[data-reserva]").addEventListener('click', () => {
  document.querySelector('.contagem').classList.add('active');
});

// Funcionalidade para a escolha de números
let qtdLimite;

function createNumber(number = 0) {
  let content = document.querySelector('[data-change-number]');
  qtdLimite = content.children.length + 1;
  console.log(qtdLimite);

  if (content.children.length === 30) {
    alert("Você só pode escolher 30 números");
    return;
  }

  let p = document.createElement('p');
  let item = document.createElement('div');
  p.innerHTML = `${number}`;
  item.classList.add('item');
  item.appendChild(p);
  content.appendChild(item);

  console.log('Número escolhido adicionado!')
}

function removeNumber(number) {
  let content = document.querySelector('[data-change-number]');
  qtdLimite = content.children.length - 1;
  console.log(qtdLimite);

  if (qtdLimite === 0) {
    document.querySelector('.numeros-escolhidos').classList.remove('active'); document.querySelector('.finalizacao').classList.remove('active');
  }

  let list = content.children;
  for (item of list) {
    if (item.children[0].innerHTML === number) {
      item.remove();
    }
  }
}

document.querySelectorAll('[data-number]').forEach(element => {
  element.addEventListener('click', () => {

    const changes = document.querySelector('.numeros-escolhidos');
    if (changes.children[0].children[1].children.length === 0) {
      document.querySelector('.numeros-escolhidos').classList.add('active');
    }

    if (element.classList.contains('escolhido')) {
      console.log('Este número já foi reservado!')
      alert('Este número já foi reservado!')
      return;
    } else if (element.classList.contains('escolha')) {
      removeNumber(element.dataset.number)
      element.classList.remove('escolha');
    } else {
      createNumber(element.dataset.number)
      if (qtdLimite === 31) {
        return;
      }
      element.classList.add('escolha');
    }
  });
});

document.querySelector('[data-reservar').addEventListener('click', () => {
  document.querySelector('.finalizacao').classList.add('active');
});

var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
var tel = document.querySelector('input[attrname=tel]');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);
