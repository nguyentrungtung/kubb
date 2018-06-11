$(document).ready(function() {

    $(".header__menu__right li a").click(function(e) {
        $(".header__menu__right li a").removeClass("header__menu--active");
        $(this).addClass("header__menu--active");

    });

});

// .siblings().removeClass('active')