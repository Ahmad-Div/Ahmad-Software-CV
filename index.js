$(document).ready(function () {
    $(".mobile-nav").toggle({
        "display": "none"
    })
    let dark = $("#icon").click(function () {
        if (dark.hasClass("fa-moon")) {
            dark.removeClass("fa-moon");
            dark.addClass("fa-sun");
            $("body").addClass("dark-theme");
            $(".fa-bars").css({
                "color": "white"
            })
        } else {
            dark.removeClass("fa-sun");
            dark.addClass("fa-moon");
            $("body").removeClass("dark-theme");
            $(".fa-bars").css({
                "color": "black"
            })
        }
    })


    $(".fa-bars").click(function () {
        $(".mobile-nav").toggle({
            "display": "flex"
        })
    })

    $(".mobile-nav a").click(function () {
        $(".mobile-nav").css({
            "display": "none"
        })
    })


    $(".navigation a").click(function () {
        $(".navigation a").each(function () {
            $(this).children().removeClass("current-section");
        })
        $(this).children().addClass("current-section");
    })

    $(".logo").click(function () {
        $(".navigation a").each(function () {
            $(this).children().removeClass("current-section");
        })
    })

})