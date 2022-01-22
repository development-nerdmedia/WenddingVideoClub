var header = document.getElementById('header');
var titlenav = document.getElementById('title');
var titlenavback = document.getElementById('title2');
var nav = document.getElementById('navigation');
var lista = document.getElementsByClassName('nav-item');
var line = document.getElementsByClassName('colorchange');
var btnmusicblanco = document.getElementById('white');
var btnmusicnegro = document.getElementById('black');
var menumovilblanco = document.getElementById('white1');
var menumoviloscuro = document.getElementById('black1');

window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 10) {
        header.style.backgroundColor = "#fff";
        header.classList.add('headerScrol');
        titlenav.style.color = "#000";
        titlenav.style.display = "none";
        titlenavback.style.color = "#000";
        titlenavback.style.display = "block";
        nav.style.padding = "25px 0";
        nav.style.alignItems = "center";
        btnmusicblanco.style.display = "none";
        menumovilblanco.style.display = "none"
        menumoviloscuro.style.display = "block"
        btnmusicnegro.style.display = "block";
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left-black');

        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#000";

        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#000";
        }

    } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove('headerScrol')
        titlenav.style.color = "#fff";
        titlenavback.style.color = "#fff";
        titlenav.style.display = "block";
        titlenavback.style.display = "none";
        nav.style.padding = "70px 0";
        nav.style.alignItems = "start";
        btnmusicblanco.style.display = "block";
        btnmusicnegro.style.display = "none";
        menumoviloscuro.style.display = "none"
        menumovilblanco.style.display = "block"
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left-black');

        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#fff";
        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#fff";
        }
    }
})

document.addEventListener("click", function (e) {
    if (e.target.closest(".contacto")) {
        document.querySelector(".contactopage").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".menumovill")) {

        document.querySelector(".menumovil").classList.toggle("open");
        jQuery('body').addClass('scrollhidden');
    }
    if (e.target.closest(".cerrar")) {
        document.querySelector(".contactopage").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
    if (e.target.closest(".cerrarr")) {
        document.querySelector(".menumovil").classList.toggle("open");
        jQuery('body').removeClass('scrollhidden');
    }
})

$(document).ready(function () {
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.autoplay2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4.2,
        slidesToScroll: 1,
        // infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3.4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});