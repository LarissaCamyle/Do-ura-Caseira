//CARROSSEL
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-produtos', {
            //slide do meio maior
            effect: 'coverflow',
            //arrastar cm o cursor
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 2,
            //loop das imagens
            loop: true,
            coverflowEffect: {
                rotate: 0, // Não rotaciona os slides
                stretch: 0, // Não estica os slides
                depth: 400, // Define a profundidade dos slides em relação ao centro
                modifier: 1, // Controla a intensidade do efeito
                slideShadows: false, // Desativa sombras nos slides
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000, // 1 segundo
                disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
            },
    });
});

//Troca de img no cardápio -----------------------------------------------------

const ListaTipoCardapio = document.querySelectorAll('.cardapio-opcao');

for(let i = 0 ; i < ListaTipoCardapio.length; i++){
    const tipo = ListaTipoCardapio[i];
    const bolo = ListaTipoCardapio[0];
    const doce = ListaTipoCardapio[1];

    tipo.onclick = function (){
        if(tipo === ListaTipoCardapio[0]){
            doce.classList.remove('cardapio-tipo-selecionado');
            bolo.classList.add('cardapio-tipo-selecionado');
            TrocaImagem("Bolo");
        }
        if(tipo === ListaTipoCardapio[1]){
            bolo.classList.remove('cardapio-tipo-selecionado');
            doce.classList.add('cardapio-tipo-selecionado');
            TrocaImagem("Doce");
        }
    }
}

const ListaImagens = document.querySelectorAll('.imagem-bolo');

function TrocaImagem (tipo){
    for(let i = 0 ; i < ListaImagens.length; i++){
        var caminho = `/img/${tipo}-${i+1}.png`
        ListaImagens[i].src = caminho;
    }
}

//CARROSSEL Clientes -----------------------------------------------------
const swiper = new Swiper('.swiper-clientes', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // 1 segundo
        disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
    },
});


// Header destaque-----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.header-links a');
    const sections = document.querySelectorAll('.section-selecionado');

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove('header-destaque'));
        // Adiciona a classe de destaque apenas ao link correspondente
        if (links[index]) {
            links[index].classList.add('header-destaque');
        }
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});


// animacao fade in -----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    // Função de callback do Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    // Configuração do Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 // Quando 10% do elemento está visível
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
