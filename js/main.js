$(document).ready(function() {
    $("#navShow").click(function() {
        $(".m-main").addClass("is-open")
    }), $("#navHide").click(function() {
        $(".m-main").removeClass("is-open")
    }), $("input, textarea").blur(function() {
        $(this).val() ? $(this).addClass("is-active") : $(this).removeClass("is-active")
    }), $("#home-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top
        }, 1200)
    }), $("#hero-more").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 1200)
    }), $("#about-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 1200)
    }), $("#services-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#services").offset().top
        }, 1200)
    }), $("#skills-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#skills").offset().top
        }, 1200)
    }), $("#pricing-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#pricing").offset().top
        }, 1200)
    }), $("#contact-menu").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 1200)
    })
});
