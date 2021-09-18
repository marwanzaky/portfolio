function jump(h) {
    var el = document.querySelector('.' + h);
    window.scrollTo(0, el.offsetTop);
}