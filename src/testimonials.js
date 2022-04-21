export default function testimonials() {
    const wrapper = document.querySelector('.testimonials-wrapper');
    const indicators = [...document.querySelectorAll('.indicators button')];

    let currentTestimonial = 0;

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            indicators[currentTestimonial].classList.remove('active');
            wrapper.style.marginLeft = `${-99.99 * i}%`;
            indicator.classList.add('active');
            currentTestimonial = i;
        });
    });
}