
$(document).ready(function () {
    const buttonIconMap = document.querySelector('.icon-map');
    const imageMap = document.querySelector('.imagem-localizacao');

    if(imageMap) {
        buttonIconMap.onclick = function () {
            imageMap.classList.toggle("iframe-active");
        }
    }

    if ($('.owl-feedback')) {
        $('.owl-feedback').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            dots: true,
            items: 3
        })
    }

    if ($('.owl-videos')) {
        $('.owl-videos').owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<img src='images/nav-left.png'>", "<img src='images/nav-right.png'>"],
            items: 3
        })
    }

    if ($('.owl-categorias')) {
        $('.owl-categorias').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        })
    }

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }, spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };


    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }

    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }

    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('99999');
    }

    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }

    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }

    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }

});
