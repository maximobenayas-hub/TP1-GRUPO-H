const boton = document.getElementById("btn-modo");

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});

document.getElementById('form-contacto').addEventListener('submit', function(event) {
    // 1. Frenamos el envío automático del formulario
    event.preventDefault();

    // Variable bandera para rastrear si todo está bien
    let formularioValido = true;

    // 2. Traemos los elementos del DOM
    const inputNombre = document.getElementById('contacto-nombre');
    const textareaMensaje = document.getElementById('contacto-mensaje');
    
    const errorNombre = document.getElementById('error-nombre');
    const errorMensaje = document.getElementById('error-mensaje');
    const msgContacto = document.getElementById('msg-contacto');

    // 3. Limpiamos errores y mensajes previos
    errorNombre.innerText = "";
    errorMensaje.innerText = "";
    msgContacto.innerText = "";
    msgContacto.className = "mt-2"; // Reseteamos clases de Bootstrap si las tuviera

    // --- VALIDACIÓN DEL NOMBRE ---
    const nombreValor = inputNombre.value.trim(); // .trim() saca espacios vacíos al inicio/final
    if (nombreValor === "") {
        errorNombre.innerText = "Por favor, ingresá tu nombre.";
        formularioValido = false;
    } else if (nombreValor.length < 3) {
        errorNombre.innerText = "El nombre debe tener al menos 3 caracteres.";
        formularioValido = false;
    }

    // --- VALIDACIÓN DEL MENSAJE ---
    const mensajeValor = textareaMensaje.value.trim();
    if (mensajeValor === "") {
        errorMensaje.innerText = "El mensaje no puede estar vacío.";
        formularioValido = false;
    } else if (mensajeValor.length < 10) {
        errorMensaje.innerText = "Por favor, explayate un poco más (mínimo 10 caracteres).";
        formularioValido = false;
    }

    // 4. ACCIÓN FINAL
    if (formularioValido) {
        // Mostramos mensaje de éxito con clases de Bootstrap para que quede lindo
        msgContacto.innerText = "¡Formulario enviado con éxito! Nos contactaremos pronto.";
        msgContacto.classList.add("text-success", "fw-bold");

        // Opcional: Limpiar los campos después de enviar
        this.reset();

        // Si usás un servidor backend o Firebase, acá meterías el fetch().
        // Si querés que se envíe de forma tradicional, descomentá la línea de abajo:
        // this.submit();
    }
});