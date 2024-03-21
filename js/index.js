let palabraEncriptar = document.getElementById("texto");
let encriptador = document.getElementById("encrypt");
let guardarPalabra = document.getElementById("output");
let copy = document.getElementById("copy");
let decrypt = document.getElementById("decrypt");

let encriptar = () => {
  if (palabraEncriptar.value) {
    let str = palabraEncriptar.value;
    const replacedStr = str.replace(/([aeiou])/g, (match) => {
      switch (match) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
      }
    });

    console.log(replacedStr); // "H**o**l**a**, m**u**nd**o**!"
    copy.classList.remove("hidden");
    mostrarTexto(replacedStr);
  }
};

let copiar = () => {
  let text = guardarPalabra.innerText;
  guardarPalabra.innerText = "Ningún mensaje fue encontrado";
  palabraEncriptar.value = text;
  copy.classList.add("hidden");
};

let desencriptar = () => {
  if (palabraEncriptar.value) {
    let str = palabraEncriptar.value;
    const replacedStr = str.replace(/(ai|enter|imes|ober|ufat)/gi, (match) => {
      switch (match) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
        default:
          return match;
      }
    });

    console.log(replacedStr);
    copy.classList.remove("hidden");
    mostrarTexto(replacedStr);
  }
};

let mostrarTexto = (text) => {
  guardarPalabra.innerText = text;
  palabraEncriptar.value = "";
};

window.onload = () => {
  encriptador.addEventListener("click", encriptar);
  copy.addEventListener("click", copiar);
  decrypt.addEventListener("click", desencriptar);
};
