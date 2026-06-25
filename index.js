function cambiarContenido() {
    const contenido = document.getElementById("desktop");
    
    if(window.matchMedia("(max-width: 490px)").matches) {
        contenido.innerHTML = `
                                <p id="idiomas">Castellano: Nativo</p>
                                <p id="idiomas">Catalan: Intermedio</p>
                                <p id="idiomas">Ingles: Basico</p>  
        `;
    }
}

cambiarContenido();
window.addEventListener("resize", cambiarContenido);