import $ from 'jquery';

export default function Scroll(className) {
    console.log("scroll now");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(className).offset().top
    }, 1000);
}