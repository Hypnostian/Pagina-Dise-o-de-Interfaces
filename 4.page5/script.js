function navigate(section) {
    alert(`Navigating to ${section} (currently not implemented)`);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');

    menu.classList.toggle('visible');

    if (menu.classList.contains('visible')) {
        content.classList.remove('centered');
    } else {
        content.classList.add('centered');
    }
}