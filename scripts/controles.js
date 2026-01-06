function instanciarActivity(objetoactividad){
    const { id , title, description , imgUrl} = objetoactividad
    
    
     // Crear elementos del DOM
    const divcontenedor = document.createElement("div");
    const h2titulo = document.createElement ("h2");
    const span = document.createElement("span");
    const img = document.createElement("img");
    const p = document.createElement("p");
    
    
    // Asignar clases y contenido
    divcontenedor.classList.add("tarjeta");
    h2titulo.innerHTML = title;
    span.innerHTML = "X";
    span.classList.add("x");
    
    img.src = imgUrl ;
    img.alt  = title;
    p.innerHTML = description;
    
    
        // Añadir elementos hijos al contenedor
    divcontenedor.appendChild(h2titulo);
    divcontenedor.appendChild(span);
    divcontenedor.appendChild(img);
    divcontenedor.appendChild(p);
    
    // Evento para eliminar la actividad
    span.addEventListener("click", () => {
        Repositorio.deleteActivity(id);
        divcontenedor.remove();
    });
    
    return divcontenedor;
    }
    
    
    
    
    function handlerSumbitClick(evento){
       // Evento prevenido por defecto comentar cuando termine la homerwork
        evento.preventDefault()
        
        
        const titulo = document.querySelector('#titulo');
        const descripcion = document.querySelector('#descripcion');
        const urlImagen =document.querySelector('#urlImagen');
        
        
        if(!titulo.value || !descripcion.value || !urlImagen.value) 
            return alert("faltan datos en el formulario")
        
    
            Repositorio.createActivities(titulo.value, descripcion.value, urlImagen.value)
        
    
                // Limpiar los campos del formulario
                titulo.value = ""; 
                descripcion.value = ""; 
                urlImagen.value = ""; 
            
        const organizadorDeTarjetas = document.querySelector("#organizadordetarjetas");
    
        organizadorDeTarjetas.innerHTML = "";
    
        const listadodeactividades = Repositorio.getallActivities()
    
        const listadoDeActividadesHTML = listadodeactividades.map(instanciarActivity);
        
            listadoDeActividadesHTML.forEach(actividadHTML => {
            organizadorDeTarjetas.appendChild(actividadHTML);
        });
    
    
    }
    