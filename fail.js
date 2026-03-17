$(function () {



    // SEARCH
    if ($('.header__top-search').length) {

        $('.header__top-search').click(function (e) {
            e.preventDefault();

            $('.search-overlay').fadeIn(200);
            $('.search-block').fadeIn(200);

            $('body').addClass('no-scroll');

            if ($('#search_input').length) {
                $('#search_input').focus();
            }
        });

        $('.search-overlay').click(function () {
            $('.search-overlay').fadeOut(200);
            $('.search-block').fadeOut(200);
            $('body').removeClass('no-scroll');
        });

    }


    // STOCK BLOCK
    if ($('.header__bottom-stock').length) {

        $('.header__bottom-stock').click(function (e) {
            e.preventDefault();

            $('.stock-overlay').fadeIn(200);

            $('.stock-block')
                .css('display', 'flex')
                .hide()
                .fadeIn(200);

            $('body').addClass('no-scroll');
        });

        $('.stock-overlay').click(function () {
            $('.stock-overlay').fadeOut(200);
            $('.stock-block').fadeOut(200);

            $('body').removeClass('no-scroll');
        });

        $('.stock-block').click(function (e) {
            e.stopPropagation();
        });

    }


    // MENU
    if ($('.header__top-menu-pc').length) {

        $('.header__top-menu-pc').click(function (e) {
            e.preventDefault();

            $('.header-menu-dropdown-pc').toggleClass('active');

            let icon = $('.header__top-menu-icon-pc');

            if ($('.header-menu-dropdown-pc').hasClass('active')) {
                icon.attr('src', 'assets/img/menu_close_btn.png');
            } else {
                icon.attr('src', 'assets/img/header_top_menu_icon.svg');
            }
        });

    }


    // LANGUAGE
    if ($('.header__top-language').length) {

        $(".header__top-language").click(function (e) {
            e.preventDefault();
            $('.header-language-dropdown').toggleClass("active");
            $(".header__top-language").toggleClass("iconActive");
        });

    }


    // GEO
    if ($('.header__top-geo-pc').length) {

        $(".header__top-geo-pc").click(function (e) {
            e.preventDefault();
            $('.header-geo-dropdown').toggleClass("active");
            $(".header__top-geo-pc").toggleClass("iconActive");
        });

    }


    // CURRENCY
    if ($('.header__top-currency-pc').length) {

        $(".header__top-currency-pc").click(function (e) {
            e.preventDefault();
            $('.header-currency-dropdown').toggleClass("active");
            $(".header__top-currency-pc").toggleClass("iconActive");
        });

    }


    // CARD IMAGE SWITCH
    if ($('.card__img-span').length) {

        $('.card__img-span').click(function () {

            let card = $(this).closest('.card');

            card.find('.card__img-span').removeClass('card__img-span--active');
            $(this).addClass('card__img-span--active');

        });

    }


    // REVIEWS SLIDER
    if ($('.review').length) {

        const reviewsPerPage = 3;
        const reviews = $('.review');
        const totalReviews = reviews.length;
        const totalSlides = Math.ceil(totalReviews / reviewsPerPage);

        const dotsContainer = $('.review__dots');

        dotsContainer.empty();

        for (let i = 0; i < totalSlides; i++) {
            dotsContainer.append('<span class="review__dot"></span>');
        }

        $('.review__dot').first().addClass('review__dot--active');

        reviews.slice(0, reviewsPerPage).addClass('review-visible').show();

        $(document).on('click', '.review__dot', function () {

            const index = $(this).index();
            const start = index * reviewsPerPage;
            const end = start + reviewsPerPage;

            $('.review__dot').removeClass('review__dot--active');
            $(this).addClass('review__dot--active');

            reviews.removeClass('review-visible');

            reviews.each(function (i) {
                if (i >= start && i < end) {
                    $(this).show().addClass('review-visible');
                } else {
                    $(this).hide();
                }
            });

        });

    }


    // CLOSE DROPDOWNS CLICK OUTSIDE
    $(document).click(function (e) {

        if (!$(e.target).closest('.header__top-language').length) {
            $('.header-language-dropdown').removeClass('active');
            $(".header__top-language").removeClass("iconActive");
        }

        if (!$(e.target).closest('.header__top-geo-pc').length) {
            $('.header-geo-dropdown').removeClass('active');
            $(".header__top-geo-pc").removeClass("iconActive");
        }

        if (!$(e.target).closest('.header__top-currency-pc').length) {
            $('.header-currency-dropdown').removeClass('active');
            $(".header__top-currency-pc").removeClass("iconActive");
        }

        if (!$(e.target).closest('.header__top-menu-pc').length) {
            $('.header-menu-dropdown-pc').removeClass('active');
            $('.header__top-menu-icon-pc').attr('src', 'assets/img/header_top_menu_icon.svg');
        }

    });

    $(document).on('click', '.filters__heading-clear', function (e) {
        e.preventDefault();
        $('.filter__item-checkbox').prop('checked', false);
    });

    $(document).on('click', '.active-filter', function () {
        $(this).remove();
    });

    $(document).on('click', '.filters__heading-clear', function () {
        $('.active-filter').remove();
    });

    $(document).on('click', '.brands-filter', function () {
        $('.brands-filter-active').removeClass("brands-filter-active");
        $(this).addClass("brands-filter-active");
    });

    $(document).on('click', '.product-description-title', function () {
        $('.product-description').addClass("product-description--active");
        $('.product-description-text').fadeOut(200);
    });

    $(document).on('click', '.product-description--active .product-description-title', function () {
        $('.product-description--active').removeClass("product-description--active");
        $('.product-description-text').fadeIn(200);
    });

    $(document).on('click', '.product-chars-title', function () {
        $('.product-chars').addClass("product-chars--active");
        $('.product-chars-inner').fadeOut(200);
    });

    $(document).on('click', '.product-chars--active .product-chars-title', function () {
        $('.product-chars--active').removeClass("product-chars--active");
        $('.product-chars-inner').fadeIn(200);
    });

    $(document).on('click', '.header__top-menu-icon-pc', function () {
        $('.header__top-mobile').addClass("opened");
        if ($(window).width() <= 768) {
            $('body').addClass('no-scroll');
        }
    });

    $(document).on('click', '.header__top-menu-icon-mobile', function () {
        $('.header__top-mobile').removeClass("opened");
        $('body').removeClass("no-scroll");
    });

    $(".mobile-header-menu-item-info").click(function () {
        $(".header-menu-dropdown-info").addClass("opened");
    });

    $(".header__top-mobile .header__top-geo-mobile").click(function () {
        $(".header-menu-dropdown-country").addClass("opened");
    });

    $(".header__top-mobile .header__top-currency-mobile").click(function () {
        $(".header-menu-dropdown-currency").addClass("opened");
    });


    $(document).click(function (e) {
        if (!$(e.target).closest('.mobile-header-menu-item-info').length) {
            $('.header-menu-dropdown-info').removeClass('opened');
        }
        if (!$(e.target).closest('.header__top-mobile .header__top-geo-mobile').length) {
            $('.header-menu-dropdown-country').removeClass('opened');
        }
        if (!$(e.target).closest('.header__top-mobile .header__top-currency-mobile').length) {
            $('.header-menu-dropdown-currency').removeClass('opened');
        }
    });

});
$(document).ready(function () {
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true, 
        navigation: {
            nextEl: '.swiper-button-next', 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'hero__bottom-right-dot', 
            bulletActiveClass: 'hero__bottom-right-dot--active', 
        },
        on: {
            slideChange: function () {
                
                $('.swiper-current-num').text(this.realIndex + 1);
            }
        }
    });
    const cardSwipers = new Swiper('.card-swiper', {
        loop: true, 
        grabCursor: true, 
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'card__img-span', 
            bulletActiveClass: 'card__img-span--active', 
        },
    });
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        loop: true, 
        grabCursor: true, 
        spaceBetween: 32, 
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3, 
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'review__dot', 
            bulletActiveClass: 'review__dot--active',
        },
    });
    $('input[name="eval_type"]').on('change', function() {
        const type = $(this).val();
        const $formContent = $('.evaluation__grid, .evaluation__textarea, .evaluation__photos, .evaluation__grid-bottom');
        
        $formContent.animate({opacity: 0}, 200, function() {
            
            if (type === 'watches') {
                $('.evaluation__label').eq(0).find('input').attr('placeholder', 'Наприклад: Rolex');
                $('.evaluation__label').eq(1).find('input').attr('placeholder', 'Якщо немає, обов\'язково фото з усіх боків');
            } else if (type === 'jewelry') {
                $('.evaluation__label').eq(0).find('input').attr('placeholder', 'Наприклад: Cartier або Tiffany');
                $('.evaluation__label').eq(1).find('input').attr('placeholder', 'Тип виробу (каблучка, сережки тощо)');
            } else if (type === 'diamonds') {
                $('.evaluation__label').eq(0).find('input').attr('placeholder', 'Наявність сертифікату (GIA тощо)');
                $('.evaluation__label').eq(1).find('input').attr('placeholder', 'Вага в каратах (якщо відомо)');
            }
            
            $formContent.animate({opacity: 1}, 200);
        });
    });
});

$(document).ready(function() {

    const countryRadios = $('.contact-country input[type="radio"]');
    
    const addressesBlock = $('.contact-places');
    const addressesTitle = $('.contact-places-title');

    countryRadios.on('change', function() {
        const selectedCountry = $(this).val();

        if (selectedCountry === 'watches') { 
            addressesBlock.fadeIn(300); 
            addressesTitle.text('Наші адреси:');
        } else if (selectedCountry === 'jewelry') {

            addressesBlock.fadeOut(300); 
            addressesTitle.text('Адреси в Німеччині знаходяться на стадії відкриття');
        } else if (selectedCountry === 'diamonds') {

            addressesBlock.fadeOut(300); 
            addressesTitle.text('Адреси в Польщі знаходяться на стадії відкриття');
        }
    });
});
$(document).ready(function() {
    $('.accordion-toggle').on('click', function() {
        $(this).next('.accordion-content').slideToggle(300);
        
        $(this).find('.accordion-arrow').toggleClass('active');
    });
});
const filterBtn = document.querySelector('.brands__filter-btn-mobile');
const filterPanel = document.querySelector('.filters');

if (filterBtn && filterPanel) {
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.brands__filter-btn-mobile');
    const filterPanel = document.querySelector('.filters');
    const closeBtn = document.querySelector('.filters__heading-title'); 

    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', function() {
            filterPanel.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    }

    if (closeBtn && filterPanel) {
        closeBtn.addEventListener('click', function() {
            filterPanel.classList.remove('active');
            document.body.style.overflow = ''; 
        });
    }
});
const similarSlider = document.querySelector('.similar-slider');
if (similarSlider) {
    new Swiper('.similar-slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
}
const similarBlogSlider = document.querySelector('.similar-blog-slider');
if (similarBlogSlider) {
    new Swiper('.similar-blog-slider', {
        slidesPerView: 1.1, 
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3, 
                spaceBetween: 30,
            }
        }
    });
}
