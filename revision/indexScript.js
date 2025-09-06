function goToPage(path) {
    document.body.style.transform = 'translateX(-100vw)';
    setTimeout(() => {
        window.location.href = path;
    }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        document.body.style.transform = 'translateX(0)';
    });
});
