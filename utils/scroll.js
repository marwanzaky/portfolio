import $ from 'jquery';

function scroll(element) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(element).offset().top
    }, 2000);
}

export default scroll;