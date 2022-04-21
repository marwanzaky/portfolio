export default function testimonials() {
    const wrapper = document.querySelector('.testimonials-wrapper');
    const indicators = [...document.querySelectorAll('.indicators button')];

    let currentTestimonial = 0;

    console.log("wrapper", wrapper);
    console.log("indicators", indicators);

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            indicators[currentTestimonial].classList.remove('active');
            wrapper.style.marginLeft = `${-100 * i}%`;
            indicator.classList.add('active');
            currentTestimonial = i;

            console.log("update!");
        });
    });
}