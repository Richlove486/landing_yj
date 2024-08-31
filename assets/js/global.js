$(window).on('load', function () {
    // Mobile Menu
    $('.mobile__btn').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-wrap').show();
            $('body').css('overflow', 'hidden');
            $('.header').css('border-bottom', '1px solid rgba(255,255,255,0.1)');
        } else {
            $('.mobile-wrap').hide();
            $('body').css('overflow', '');
            $('.header').css('border-bottom', '');
        }
    });

    $('.mobile__menu > li').click(function () {
        var isActive = $(this).hasClass('mobile__menu--active');

        $('.mobile__menu > li').removeClass('mobile__menu--active');
        $('.menu__depth').removeClass('menu__depth--show');

        if (!isActive) {
            $(this).addClass('mobile__menu--active');
            $(this).find('.menu__depth').addClass('menu__depth--show');
        }
    });

    // Header Scroll
    const header = $('.header');
    const scrollThreshold = 700;
    let lastScrollTop = $(window).scrollTop();

    if (lastScrollTop === 0) {
        header.removeClass('header-scroll');
    } else if (lastScrollTop <= scrollThreshold) {
        header.addClass('header-scroll');
    } else {
        header.css('top', '-85px');
        $('.mobile__btn').css('top', '-30px');
    }

    $(window).on('scroll', function () {
        const scrollPosition = $(this).scrollTop();

        if (scrollPosition === 0) {
            header.removeClass('header-scroll');
        } else if (scrollPosition >= scrollThreshold) {
            header.addClass('header-scroll');
        } else {
            header.css('top', '-85px');
            $('.mobile__btn').css('top', '-30px');
        }

        if (scrollPosition > lastScrollTop) {
            if (scrollPosition > scrollThreshold) {
                header.css('top', '-85px');
                $('.mobile__btn').css('top', '-30px');
            }
        } else {
            header.css('top', '');
            $('.mobile__btn').css('top', '');
        }

        lastScrollTop = scrollPosition;
    });

    // 메인메뉴 Dropdown
    // $('.tit').hover(
    //     function () {
    //         $(this).find('.menu__depth').stop(true, true).fadeIn();
    //     },
    //     function () {
    //         $(this).find('.menu__depth').stop(true, true).fadeOut();
    //     }
    // );

    $('.sub_tit_desc').click(function (event) {
        event.stopPropagation();
    });

    // 메인메뉴 언어 Dropdown
    function toggleLangDepth() {
        $('.lang__depth').stop(true, true).fadeToggle('fast');
    }

    $('.lang').hover(
        function () {
            toggleLangDepth();
        },
        function () {
            toggleLangDepth();
        }
    );

    $('.lang__depth a').click(function (event) {
        event.stopPropagation();
    });

    // 메뉴 상태 초기화
    function initializeMenuState() {}

    $('body').on('click', function () {
        initializeMenuState();
    });

    $(window).on('resize', function () {
        if ($(window).width() < 1024) {
            initializeMenuState();
            $('.mobile-wrap').hide();
            $('body').css('overflow', '');
            $('.mobile__btn').removeClass('active');
            $('.mobile__menu > li').removeClass('mobile__menu--active');
            $('.header').css('border-bottom', '');
        }
    });

    $(window).on('load', initializeMenuState);

    /* 2024.02.26 - 카단 헤더 애니메이션 */
    let gnb = document.querySelector('.gnb .menu');
    let gnbMenu = document.querySelectorAll('.gnb .menu > li');
    let bgWrapper = document.querySelector('.gnb .gnb_bg_wrapper');
    let bg = document.querySelector('.gnb_bg_wrapper .gnb_bg');

    gnb.addEventListener('mouseenter', () => {
        setTimeout(() => {
            bg.classList.add('active');
        });
    });
    gnb.addEventListener('mouseleave', () => {
        bg.classList.remove('active');
    });

    [].forEach.call(gnbMenu, (menu) => {
        menu.addEventListener('mouseenter', function () {
            if (menu.querySelector('.menu__depth') != null) {
                bgWrapper.classList.add('active');
                const subGnb = this.querySelector('.menu__depth');
                const subGnbBCR = subGnb.getBoundingClientRect();

                bg.style.cssText = `transform:translate(${subGnbBCR.left}px);width:${subGnbBCR.width}px;height:${subGnbBCR.height}px;margin-top:1rem`;
            }
        });

        menu.addEventListener('mouseleave', () => {
            bgWrapper.classList.remove('active');
            bg.style.width = '0px';
            bg.style.height = '0px';
            bg.style.transitionTimingFunction = 'cubic-bezier(1, 0, 0.9, 0.07)';
        });
    });

    /* 2024.03.07 카단 - 언어 전환 */

    /* 헤더 */

    let engLink = $('#lang_eng');

    engLink.click(function () {
        engLink.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
            engLink.attr('href', window.location.href.replace('/kr', ''));
        }
    });

    let korLink = $('#lang_kor');

    korLink.click(function () {
        korLink.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
        } else {
            korLink.attr('href', window.location.protocol + '//' + window.location.host + '/kr' + window.location.pathname);
        }
    });

    /* 모바일 헤더 */
    let moEngLink = $('#mobile_lang_eng');

    moEngLink.click(function () {
        moEngLink.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
            moEngLink.attr('href', window.location.href.replace('/kr', ''));
        }
    });

    let moKorLink = $('#mobile_lang_kor');

    moKorLink.click(function () {
        moKorLink.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
        } else {
            moKorLink.attr('href', window.location.protocol + '//' + window.location.host + '/kr' + window.location.pathname);
        }
    });

    /* 푸터 */
    let footEng = $('#foot_eng');

    footEng.click(function () {
        footEng.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
            footEng.attr('href', window.location.href.replace('/kr', ''));
        }
    });
    let footKor = $('#foot_kor');
    footKor.click(function () {
        footKor.attr('href', window.location.href);

        if (window.location.href.includes('/kr/')) {
        } else {
            footKor.attr('href', window.location.protocol + '//' + window.location.host + '/kr' + window.location.pathname);
        }
    });
});
