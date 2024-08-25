
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
            //slide do meio maior
            effect: 'coverflow',
            //arrastar cm o cursor
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 3,
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
    });
});