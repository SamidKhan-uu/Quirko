// theme-toggle.js

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('theme-switch');

    btn.addEventListener('click', () => {
        document.body.classList.toggle('darkmode');
    });
});
