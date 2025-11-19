function cambiarContenido() {
    const contenido = document.getElementById("desktop");
    
    if(window.matchMedia("(max-width: 490px)").matches) {
        contenido.innerHTML = `
                                <p>Castellano: Nativo</p>
                                <p>Catalan: A2</p>  
        `;
    } else {
        contenido.innerHTML = `
        <a href="#contacto">Contacto</a>
        <a href="#resumen">Resumen</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#educacion">Educación</a>
        `;
    }
}

cambiarContenido();
window.addEventListener("resize", cambiarContenido);