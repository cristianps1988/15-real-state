const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {
    imagenes.forEach(e => {
        const scroll = this.scrollY/-20;
        e.style.backgroundPositionY = `${scroll}px`;
    });
})