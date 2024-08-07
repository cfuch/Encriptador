const burro = document.querySelector(".encriptador__ingreso__texto__box__text");
const textoResultado = document.querySelector(".box__text__encriptado_resuelto");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptar = encriptar(burro.value);
    textoResultado.value = textoEncriptar;
    burro.value = "";
}

function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();
    
    // Reemplazar cada letra específica con su correspondiente encriptación
    stringEncriptado = stringEncriptado.replaceAll("e", "enter")
                                      .replaceAll("i", "imes")
                                      .replaceAll("a", "ai")
                                      .replaceAll("o", "ober")
                                      .replaceAll("u", "ufat");
    
    return stringEncriptado;
}

// Ejemplo para llamar a la función en un botón
document.querySelector("button").addEventListener("click", btnEncriptar);


