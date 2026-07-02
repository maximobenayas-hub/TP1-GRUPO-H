const boton = document.getElementById("btn-modo");

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});

document.getElementById('form-contacto').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    let formularioValido = true;

    
    const inputNombre = document.getElementById('contacto-nombre');
    const textareaMensaje = document.getElementById('contacto-mensaje');
    
    const errorNombre = document.getElementById('error-nombre');
    const errorMensaje = document.getElementById('error-mensaje');
    const msgContacto = document.getElementById('msg-contacto');

    
    errorNombre.innerText = "";
    errorMensaje.innerText = "";
    msgContacto.innerText = "";
    msgContacto.className = "mt-2"; 

    
    const nombreValor = inputNombre.value.trim(); 
    if (nombreValor === "") {
        errorNombre.innerText = "Por favor, ingresá tu nombre.";
        formularioValido = false;
    } else if (nombreValor.length < 3) {
        errorNombre.innerText = "El nombre debe tener al menos 3 caracteres.";
        formularioValido = false;
    }

    
    const mensajeValor = textareaMensaje.value.trim();
    if (mensajeValor === "") {
        errorMensaje.innerText = "El mensaje no puede estar vacío.";
        formularioValido = false;
    } else if (mensajeValor.length < 10) {
        errorMensaje.innerText = "Por favor, explayate un poco más (mínimo 10 caracteres).";
        formularioValido = false;
    }

    
    if (formularioValido) {
        
        msgContacto.innerText = "¡Formulario enviado con éxito! Nos contactaremos pronto.";
        msgContacto.classList.add("text-success", "fw-bold");

        
        this.reset();

        
    }
});
