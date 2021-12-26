function jump(h) {
    var element = document.querySelector('.' + h);
    var elementY = element.getBoundingClientRect().top;
    var windowY = window.pageYOffset;

    function step(timestamp) {
        windowY = MathX.lerp(windowY, elementY, .1);
        window.scrollTo(0, windowY);

        if (Math.abs(windowY - elementY) > 1)
            window.requestAnimationFrame(step);
        else window.scrollTo(0, elementY);
    }

    window.requestAnimationFrame(step);
}

var MathX = {
    lerp: function (a, b, t) {
        t = t < 0 ? 0 : t;
        t = t > 1 ? 1 : t;
        return a + (b - a) * t;
    }
};