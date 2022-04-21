export default function LightMode() {
    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}