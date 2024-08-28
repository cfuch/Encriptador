// Selección de los elementos del DOM
const inputText = document.querySelector(".encriptador__ingreso__texto__box__text");
const textoResultado = document.querySelector(".box__text__encriptado_resuelto");
const boxTextImg = document.getElementById("imagen_de_fondo");
const boxTextText = document.querySelector(".box__resultado__textos");
const botonCopiar = document.querySelector(".box__text__resuelto__Boton_copiar");
const boxResult = document.querySelector(".box__resultado");
const boxTextEncrip = document.querySelector(".box__text_encriptado");
const botonEncriptar = document.querySelector(".encriptador__ingreso__texto__Boton_encriptar");
const botonDesencriptar = document.querySelector(".encriptador__ingreso__texto__Boton_desencriptar");

// Asignación de eventos a botones
botonEncriptar.addEventListener("click", btnEncriptar);
botonDesencriptar.addEventListener("click", btnDesencriptar);
botonCopiar.addEventListener("click", btnCopiar);

// Validacion de entrada de texto
function validarEntrada() {
    if (inputText.value.trim() === "") {
        alert("Por favor, ingresa un texto.");
        return false;
    }
    // Validacion de restriccion de ingreso de texto
    if (!validarTexto(inputText.value)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return false;
    }
    return true;
}

// Función de validación de minúsculas con signos de puntuación
function validarTexto(texto) {
    // La regex incluye letras minúsculas, espacios y signos de puntuación comunes
    const regex = /^[a-z\s.,;:!?()¿¡ñ'-]*$/; 
    return regex.test(texto);
}

// Función para encriptar texto
function btnEncriptar() {
    if (!validarEntrada()) return;
    const textoEncriptar = encriptar(inputText.value);
    textoResultado.value = textoEncriptar;
    inputText.value = "";
    mostrarResultado();
}
// Función que realiza los reemplazos de letras para encriptar el texto
function encriptar(stringEncriptado) {
    return stringEncriptado.toLowerCase()
        
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    
}

// Función para desencriptar texto
function btnDesencriptar() {
    if (!validarEntrada()) return;
    const textoDesencriptar = desencriptar(inputText.value);
    textoResultado.value = textoDesencriptar;
    inputText.value = "";
    mostrarResultado();
}

// Función que realiza los reemplazos de letras para desencriptar el texto
function desencriptar(stringDesencriptado) {
    return stringDesencriptado.toLowerCase()
        
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}

// Función para mostrar el resultado
function mostrarResultado() {
    boxTextImg.style.display = "none";      // Ocultar imagen de fondo
    boxTextText.style.display = "none";     // Ocultar texto de resultado
    boxResult.style.display = "none";       // Ocultar box resultado
    boxTextEncrip.style.display = "flex";   // Mostrar box encriptado
    textoResultado.style.display = "flex";  // Mostrar área de texto encriptado
    botonCopiar.style.display = "flex";     // Mostrar botón de copiar


}

// Función para copiar el texto encriptado al portapapeles
 function btnCopiar() {
    const textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
