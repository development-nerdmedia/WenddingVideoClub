// window.addEventListener("load", () => {
//     document.querySelector(".main").classList.remove("hidden");
//     document.querySelector(".home").classList.add("active");
//     document.querySelector(".load").classList.add("fade-out");
//     setTimeout(() => {
//         document.querySelector(".load").style.display = "none";
//     }, 600);
// });


if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
}

var reproductor = document.getElementById("musica");

var vol = new Boolean(false);

var header = document.getElementById('header');
var titlenav = document.getElementById('title');
var titlenavback = document.getElementById('title2');
var imgnav = document.getElementById('img-nav');
var nav = document.getElementById('navigation');
var lista = document.getElementsByClassName('nav-item');
var line = document.getElementsByClassName('colorchange');
var btnmusicblanco = document.getElementById('white');
var btnmusicnegro = document.getElementById('black');
var menumovilblanco = document.getElementById('white1');
var menumoviloscuro = document.getElementById('black1');
var inputname = document.getElementById('full-name');
var muteaudio = document.getElementById('mute');
var interruptorid = document.getElementById('interruptor');
var itemreels = document.getElementsByClassName('item-reels');

jQuery(document).ready(function (argument) {
    MyApp.audio.init();
})


MyApp = {
    audio: {
        init: function () {
            var audioElement = document.createElement('audio');
            var src = $('#audio_src').val();
            audioElement.setAttribute('src', src);

            audioElement.addEventListener('ended', function () {
                this.play();
            }, false);

            $('#mute').click(function () {
                if (vol == false) {
                    document.getElementById("interruptor").innerHTML = "off";
                    vol = true;
                    audioElement.play();
                    audioElement.volume = 0.05;
                } else {
                    document.getElementById("interruptor").innerHTML = "on";
                    vol = false;
                    audioElement.pause();
                }
            });
        }
    }
}

var mediaqueryList = window.matchMedia("(max-width: 425px)");
var mediaqueryList2 = window.matchMedia("(max-width: 1025px)");

window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 10) {
        header.style.backgroundColor = "#fff";
        header.classList.add('headerScrol');
        titlenav.style.color = "#000";
        titlenav.style.display = "none";
        // titlenavback.style.color = "#3E636B";
        // titlenavback.style.display = "block";
        imgnav.style.display = "block";
        nav.style.padding = "25px 0";
        nav.style.alignItems = "center";
        btnmusicblanco.style.display = "none";
        menumovilblanco.style.display = "none"
        menumoviloscuro.style.display = "block"
        btnmusicnegro.style.display = "block";
        interruptorid.style.color = "#3e636b";
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left-black');

        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#3E636B";

        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#3E636B";
        }

    } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove('headerScrol')
        titlenav.style.color = "#fff";
        // titlenavback.style.color = "#fff";
        titlenav.style.display = "block";
        // titlenavback.style.display = "none";
        imgnav.style.display = "none";
        // nav.style.padding = "70px 0";
        nav.style.alignItems = "start";
        btnmusicblanco.style.display = "block";
        btnmusicnegro.style.display = "none";
        menumoviloscuro.style.display = "none";
        menumovilblanco.style.display = "block";
        interruptorid.style.color = "#fff";
        jQuery('li.itemNavigation').addClass('hvr-underline-from-left');
        jQuery('li.itemNavigation').removeClass('hvr-underline-from-left-black');

        if (mediaqueryList.matches) {
            nav.style.padding = "35px 0";
        } else {
            nav.style.padding = "50px 0";
        }

        for (var i = 0, len = lista.length; i < len; i++) {
            lista[i].style.color = "#fff";
        }
        for (var ii = 0, lenn = line.length; ii < lenn; ii++) {
            line[ii].style.color = "#fff";
        }
    }
})

if (mediaqueryList2.matches) {
    jQuery('.item-reels').removeClass('contacto');
    jQuery('.item-galeria').removeClass('contacto');
}

/* elementos de contacto en pantalla */
const nombre = document.querySelector("#full-name");
const telephone = document.querySelector("#telephone");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

var validar = false;
var valornombre = 1;
var valortelefono = 1;
var valoremail = 1;
var valormensaje = 0;

var result = valornombre * valortelefono * valoremail * valormensaje;
console.log(result);


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
    if (e.target.closest("#full-name")) {
        jQuery("#full-name").removeClass('focus-visible');
        inputname.removeAttribute('data-focus-visible-added');
    }

    if (e.target.type == "submit") {
        if (result === 0) {
            e.preventDefault();
            console.log("validando...")
            if (nombre.value.length === 0 || nombre.value.charAt(0).includes(" ")) {
                valornombre = 0;
                if ($("#full-name.focus-visible")) {
                    nombre.classList.add("falto");
                }
            } else {
                valornombre = 1;
            }
            if (telephone.value.length === 0 || telephone.value.charAt(0).includes(" ")) {
                valortelefono = 0;
                if ($("#telephone.focus-visible")) {
                    telephone.classList.add("falto");
                }
            } else {
                valortelefono = 1;
            }
            if (email.value.length === 0 || email.value.charAt(0).includes(" ")) {
                valoremail = 0;
                if ($("#email.focus-visible")) {
                    email.classList.add("falto");
                }
            } else {
                valoremail = 1;
            }
            if (message.value.length === 0 || message.value.charAt(0).includes(" ")) {
                valormensaje = 0;
                if ($("#message.focus-visible")) {
                    message.classList.add("falto");
                }
            } else {
                valormensaje = 1;
            }
            console.log("validado")
            result = valornombre * valortelefono * valoremail * valormensaje;
            console.log(result);
            if (result === 1) {
                console.log(result)
                onSubmit();
            }
        }
    }
})

function onSubmit(token) {
    document.getElementById("fs-frm").submit();
}

$(document).ready(function () {
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
                breakpoint: 651,
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
        slidesToShow: 4.35,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
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
            // {
            //     breakpoint: 1281,
            //     settings: {
            //         slidesToShow: 3.43,
            //         slidesToScroll: 1,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.65,/*3.3 */
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
            },
            {
                breakpoint: 651,
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

/* card */
const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach(element => {
    let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
    };

    element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    });

    element.addEventListener("mouseout", () => {
        const card = element.querySelector(".card");
        const cardBg = card.querySelector(".cardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
    });
});