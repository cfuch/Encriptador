// Selección de los elementos del DOM
const burro = document.querySelector(".encriptador__ingreso__texto__box__text");
const textoResultado = document.querySelector(".box__text__encriptado_resuelto");
const boxTextImg = document.getElementById("imagen_de_fondo");
const boxTextText = document.querySelector(".box__resultado__textos");
const botonCopiar = document.querySelector(".box__text__resuleto__Boton_copiar");

// Función para encriptar texto
function btnEncriptar() {
    const textoEncriptar = encriptar(burro.value);
    textoResultado.value = textoEncriptar;
    burro.value = "";
    boxTextImg.style.display = "none";  // Ocultar imagen de fondo
    textoResultado.style.display = "block";  // Mostrar área de texto encriptado
    boxTextText.style.display = "none";  // Ocultar texto de resultado
    botonCopiar.style.display = "block";  // Mostrar botón de copiar
}

// Función que realiza los reemplazos de letras para encriptar el texto
function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();
    stringEncriptado = stringEncriptado.replaceAll("e", "enter")
                                       .replaceAll("i", "imes")
                                       .replaceAll("a", "ai")
                                       .replaceAll("o", "ober")
                                       .replaceAll("u", "ufat");
    return stringEncriptado;
}

// Añadir el evento de clic al botón de encriptar
document.querySelector(".encriptador__ingreso__texto__Boton_encriptar").addEventListener("click", btnEncriptar);



