function jump(h) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("." + h).offset().top
    }, 1000);
}