$(function () {
    // === ПОИСК ===
    if ($('.header__top-search').length) {
        $('.header__top-search').click(function (e) {
            e.preventDefault();
            $('.search-overlay, .search-block').fadeIn(200);
            $('body').addClass('no-scroll');
            if ($('#search_input').length) { $('#search_input').focus(); }
        });

        $('.search-overlay').click(function () {
            $('.search-overlay, .search-block').fadeOut(200);
            $('body').removeClass('no-scroll');
        });
    }

    // === БЛОК НАЛИЧИЯ (STOCK) ===
    if ($('.header__bottom-stock').length) {
        $('.header__bottom-stock').click(function (e) {
            e.preventDefault();
            $('.stock-overlay').fadeIn(200);
            $('.stock-block').css('display', 'flex').hide().fadeIn(200);
            $('body').addClass('no-scroll');
        });

        $('.stock-overlay').click(function () {
            $('.stock-overlay, .stock-block').fadeOut(200);
            $('body').removeClass('no-scroll');
        });
    }

    // === МОБИЛЬНОЕ МЕНЮ И ВЫПАДАШКИ ===
    $('.header__top-menu-pc').click(function (e) {
        e.preventDefault();
        $('.header-menu-dropdown-pc').toggleClass('active');
        let icon = $('.header__top-menu-icon-pc');
        icon.attr('src', $('.header-menu-dropdown-pc').hasClass('active') ? 'assets/img/menu_close_btn.png' : 'assets/img/header_top_menu_icon.svg');
    });

    $(".header__top-language").click(function (e) {
        e.preventDefault();
        $('.header-language-dropdown').toggleClass("active");
        $(this).toggleClass("iconActive");
    });

    $(".header__top-geo-pc").click(function (e) {
        e.preventDefault();
        $('.header-geo-dropdown').toggleClass("active");
        $(this).toggleClass("iconActive");
    });

    $(".header__top-currency-pc").click(function (e) {
        e.preventDefault();
        $('.header-currency-dropdown').toggleClass("active");
        $(this).toggleClass("iconActive");
    });

    // Закрытие по клику вне элемента
    $(document).click(function (e) {
        if (!$(e.target).closest('.header__top-language').length) { $('.header-language-dropdown').removeClass('active'); }
        if (!$(e.target).closest('.header__top-geo-pc').length) { $('.header-geo-dropdown').removeClass('active'); }
        if (!$(e.target).closest('.header__top-currency-pc').length) { $('.header-currency-dropdown').removeClass('active'); }
    });

    // === СЛАЙДЕРЫ (Swiper) ===
    if ($('.hero-swiper').length) {
        new Swiper('.hero-swiper', {
            loop: true,
            navigation: { nextEl: '.swiper-button-next' },
            pagination: { el: '.hero__bottom-right-dots', clickable: true, bulletClass: 'hero__bottom-right-dot', bulletActiveClass: 'hero__bottom-right-dot--active' },
            on: { slideChange: function () { $('.swiper-current-num').text(this.realIndex + 1); } }
        });
    }

    if ($('.card-swiper').length) {
        new Swiper('.card-swiper', {
            loop: true,
            pagination: { el: '.swiper-pagination', clickable: true, bulletClass: 'card__img-span', bulletActiveClass: 'card__img-span--active' }
        });
    }

    // === ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ФОРМ ОНЛАЙН ОЦЕНКИ (100% макет) ===
    $(document).on('change', 'input[name="eval_toggle"]', function() {
        const targetValue = $(this).val(); 
        const targetId = '#eval-' + targetValue;
        
        // Скрываем все блоки (формы + картинки)
        $('.eval-content-block').hide();
        
        // Плавно показываем выбранный блок
        $(targetId).fadeIn(400).css('display', 'flex'); 
    });

    // === ГАРМОШКА (FAQ) ===
    $('.accordion-toggle').on('click', function() {
        $(this).next('.accordion-content').slideToggle(300);
        $(this).find('.accordion-arrow').toggleClass('active');
    });
});
