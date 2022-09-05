// function scroll(elementY) {
//     const duration = 300;
//     const startingY = window.pageYOffset;
//     const diff = elementY - startingY;
//     let start;

//     window.requestAnimationFrame(function step(timestamp) {
//         if (!start) start = timestamp;

//         const time = timestamp - start;
//         const percent = Math.min(time / duration, 1);

//         window.scrollTo(0, startingY + diff * percent);

//         if (time < duration)
//             window.requestAnimationFrame(step);
//     })
// }

import $ from 'jquery';

function scroll(element) {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(element).offset().top
    }, 2000);

}

export default scroll;