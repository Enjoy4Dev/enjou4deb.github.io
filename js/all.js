$(document).ready(function () {

    //Получаем vph = 1vh (ViewPortHeight)
    vph = $(window).height() / 100;
    mh = 10 * vph;

    // Навигация
    $('.nav_a a').click(function () {
        var target = $(this).data("link");
        $('html, body').animate({ scrollTop: $("#" + target).offset().top - mh + 1 }, 600);
        return false;
    });
    $('#main_a').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Декорация элементов меню при скроле
    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        $('.scroll_data').each(function (i) {
            if ($(this).position().top <= windscroll + (vph * 60)) {
                $('.nav_a a.active').removeClass('active');
                $('.nav_a a').eq(i).addClass('active');

            }
            if ((windscroll < vph * 70)) {
                $('.nav_a a.active').removeClass('active');
            }
        });
    }).scroll();

    // Прелоадер
    loaded = $('body').addClass('loaded');
    setTimeout(function () {
        loaded;
    }, 2500);

    var eventSlider = new Swiper('#eventSlider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        autoHeight: false,
    });
    // Подключение слайдеров
    var horseSwiper = new Swiper('#horseSlide .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        autoHeight: false,
        pagination: {
            el: '#horseSlide .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: ' .swiper-button-prev',
        // },
        breakpoints: {

            500: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            // 2560: {
            //     slidesPerView: 3,
            //     slidesPerColumn: 2,
            // }
        }
    });



    // Enjoy Slider
    var thumb = $(".thumbnail_i");
    $(".thumbnail_i:nth-child(1)").addClass('thumbnail_active');
    thumb.click(function () {
        $(this).siblings().removeClass("thumbnail_active");
        $(this).addClass('thumbnail_active');
        setImage($(this));
    });
    var count = 0;
    $('.event_slide_c').each(function () {
        count++;
        var eventContainer = ".event_slide_c:nth-child(" + count + "):before";
        ($(eventContainer)).css("background-image", "url('images/advantages_image_4.jpg')");
    });
    function setImage(item) {
        item.addClass("thumbnail_active");
        var src = item.data("src");
        // bigImage.css("background", "url('" + src + "')");
        item.parent($('.thumbnail_container')).parent($('.event_right')).children($(".big_image_c")).children($(".big_image")).attr("src", src);
    }

    // Обработчик модалок
    var modal = '<div class="modal_c"><div class="modal_close flex_column">x</div><div class="modal_i"></div></div>'
    var horseForm = '<div class="form_c flex_column"><div class="horse_profile_c flex_row"><div class="h_p_image_c"><img class="slide_img" src="images/horse-1201143__340.jpg"></div><div class="h_p_text_c flex_column"><p class="h_p_text h_p_name">Маня</p><p class="h_p_text h_p_old">18 лет</p></div></div><div class="h_p_desc_c flex_row"><p class="h_p_desc_title">О себе:</p><p class="h_p_desc_text">Умная и красивая, люблю солнышко, бегать и прыгать. Обожаю яблоки, морковку и сухарики</p></div><p class="horse_modal_cta">С нетерпением жду нашей встречи, если ты тоже - скажи свой телефон и как к тебе обращаться, я обязательно передам хозяйке и она организует нам приятный и веселый день</p><form role="form" method="post"><div class="form-group"><input name="prenume" type="text" class="form-control" id="form_prenume" placeholder="Имя*" required></div><div class="form-group"><input name="phone" type="tel" class="form-control" id="form_phone" placeholder="Телефон*" required></div></form><button class="btnSuccess" >Связаться</button></div>'
    var form = '<div class="form_c flex_column"><p class="form_title">Вам не терпится поработать с нами?</p><form class="flex_column form" action="" name="registration"><label for="firstname">Фамилия</label><input type="text" name="firstname" id="firstname" placeholder="" /><label for="lastname">Имя</label><input type="text" name="lastname" id="lastname" placeholder="" /><label for="email">Email</label><input type="email" name="email" id="email" placeholder="" /><label for="tel">Телефон</label><input type="tel" name="tel" id="tel" placeholder="(+373) ..." /><button class="btnSuccess" type="submit">Связаться</button></form></div>'
    // var form = '<div class="form_c flex_column"><p class="form_title">Вам не терпится поработать с нами?</p><form role="form" method="post" action="extens/mail.php"><div class="form-group"><input name="prenume" type="text" class="form-control" id="form_prenume" placeholder="Имя*" required></div><div class="form-group"><input name="phone" type="tel" class="form-control" id="form_phone" placeholder="Телефон*" required></div><div class="form-group"><input name="email" type="email" class="form-control" id="form_email" aria-describedby="emailHelp" placeholder="E-mail*"required></div><div style="width: 100%; margin-top: 1.6vh;"><button type="submit" class="button form_button"><p>Отправить</p></button></div></form></div>'
    var formSuccessMessage = '<div class="form_c flex_column"><p class="form_title" style="padding-bottom: 0;">Форма доставленна, спасибо!</p></div>'
    var button = $(".slide_button");

    button.click(function (e) {
        e.preventDefault();
        openModal($(this));
    });

    function openModal(item) {
        var key = item.data("content");
        var content;
        if (key == "horseForm") { content = horseForm };

        $(modal).appendTo('body').find('.modal_i').html(content);

        var modal_close = document.getElementsByClassName("modal_close")[0];
        var current_modal = document.getElementsByClassName('modal_c')[0];
        modal_close.onclick = function () {
            current_modal.remove();
        }
        window.onclick = function (event) {
            if (event.target == current_modal) {
                current_modal.remove();
            }
        }

        var btns = document.getElementsByClassName('btnSuccess')[0];
        btns.onclick = function () {
            document.getElementsByClassName('form_c')[0].remove();
            $('.modal_i').html('<p>Сообщение доставленно, спасибо!</p>');
            setTimeout(function () {
                current_modal.remove();
            }, 1300);
        };
    }

    // Открытие изображения на весь экран
    $('.lightGallery').lightGallery(), {
        download: false,
        actualSize: false,
    }
});


document.addEventListener('DOMContentLoaded', function () {
    loaded;
}, false);


//   $(document).ready(function(){  $('body').addClass('loaded');});