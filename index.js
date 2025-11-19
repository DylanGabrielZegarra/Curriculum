function cambiarContenido() {
    const contenido = document.getElementById("desktop");
    
    if(window.matchMedia("(max-width: 490px)").matches) {
        contenido.innerHTML = `<nav>
                                <p>Castellano: Nativo</p>
                                <p>Catalan: A2</p>
                                </nav>
        `;
    } else {
        contenido.innerHTML = `
        <nav>
        <a href="#contacto">Contacto</a>
        <a href="#resumen">Resumen</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#educacion">Educación</a>
        </nav>
        `;
    }
}

cambiarContenido();
window.addEventListener("resize", cambiarContenido);