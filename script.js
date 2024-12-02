// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alterna a visibilidade do menu
}

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Inicializa o carrossel
showSlide(slideIndex);

// Controle de navegação
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Carrossel automático (opcional)
setInterval(nextSlide, 4000); // Troca de slide a cada 4 segundos


const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('animate__animated', 'animate__Pulse'); // Adiciona animação
    });

    item.addEventListener('animationend', () => {
        item.classList.remove('animate__animated', 'animate__Pulse'); // Remove animação para reiniciar
    });
})

// Detecta quando a seção aparece na tela
window.addEventListener('scroll', function() {
    var missionSection = document.querySelector('.mission-section');
    var position = missionSection.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
        // A animação ocorre quando a seção estiver visível na tela
        document.querySelector('.mission-image img').style.animation = 'fadeInSlide 5s forwards';
        document.querySelector('.mission-text').style.animation = 'fadeInSlide 5s forwards 1s';
    }
});

// Configurações dos valores finais
const stats = {
    resgatados: 300,  // Ajuste o número final conforme necessário
    adotados: 255,    // Ajuste o número final conforme necessário
    doacoes: 30000,   // Valor em reais, pode ajustar conforme necessário
};

// Função para animar os números
function animateCounter(id, targetValue, duration) {
    const element = document.getElementById(id);
    let currentValue = 0; // Começa do zero
    const stepTime = Math.abs(Math.floor(duration / targetValue)); // Tempo de cada incremento

    const timer = setInterval(() => {
        currentValue++; // Incrementa o valor
        element.textContent = (id === "doacoes") 
            ? `R$${currentValue.toLocaleString()}+`  // Formata como valor monetário e adiciona "+"
            : `${currentValue}+`;  // Adiciona o "+" após o número de gatos

        // Para o contador quando atinge o valor final
        if (currentValue >= targetValue) {
            clearInterval(timer);
            element.textContent = (id === "doacoes") 
                ? `R$${targetValue.toLocaleString()}+`  // Formata como valor monetário e adiciona "+"
                : `${targetValue}+`;  // Adiciona o "+" após o número final
        }
    }, stepTime);
}

// Inicializa os contadores quando a página carrega
window.onload = () => {
    animateCounter("resgatados", stats.resgatados, 2000); // 2 segundos
    animateCounter("adotados", stats.adotados, 2500); // 2.5 segundos
    animateCounter("doacoes", stats.doacoes, 5000); // 5 segundos
};

document.getElementById('telefone').addEventListener('input', function (e) {
    let input = e.target.value;
  
    // Remove todos os caracteres que não sejam números
    input = input.replace(/\D/g, '');
  
    // Adiciona os parênteses e ajusta o formato
    if (input.length > 2) {
      input = `(${input.slice(0, 2)})${input.slice(2)}`;
    }
  
    // Limita o número total de caracteres
    if (input.length > 13) {
      input = input.slice(0, 13);
    }
  
    // Atualiza o campo com o valor formatado
    e.target.value = input;
  });

  