const wrapper = document.querySelector('.testimonials-wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0;

indicators.forEach((el, i) => {
    el.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `${-99.99 * i}%`;
        el.classList.add('active');
        currentTestimonial = i;
    });
})