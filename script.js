
let ingresoTexto = document.getElementById("ingreso-texto");
let botonEncriptar = document.getElementById("b-encriptar");
let botonDesencriptar = document.getElementById("b-desencriptar");
let botonCopiar = document.getElementById("b-copiar");
let mensajeFinal = document.getElementById("mensaje-final");
let mensajeInstruccion = document.getElementById("mensaje-instruccion");
let seccionInstrucciones = document.getElementById("seccion-instrucciones");
let botonLimpiar = document.getElementById("b-limpiar");
let mensajeOriginal = "Ningun mensaje fue encontrado";
let remplazar = [
    ["e", "enter"],
    ["0", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

let replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    mensajeInstruccion.style.display = "none";
    botonCopiar.style.display = "block";

}

botonEncriptar.addEventListener("click", () =>{
    let texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);

            }
            
        }
        return newText;
    }

    //let textoEncriptado = encriptar(texto);

    replace(encriptar(texto));

    //mensajeFinal.innerHTML = textoEncriptado;

});

botonDesencriptar.addEventListener("click", () =>{
    let texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])){
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);

            }
        }
        return newText;
    }

    //let textoDesencriptado = desencriptar(texto);

    replace(desencriptar(texto));

   // mensajeFinal.innerHTML = textoDesencriptado;
});

botonLimpiar.addEventListener("click", () => {
    limpiar('ingresoTexto', 'mensajeFinal', 'mensajeInstruccion');
});

function limpiar( _ingresoTexto, _mensajeFinal, _mensajeInstruccion) {
    // Cambia el selector según tus necesidades
    document.getElementById('ingreso-texto').value = '';
    document.getElementById('mensaje-final').innerHTML = '';
    document.getElementById('mensaje-instruccion').style.display = 'block';
    document.getElementById('mensaje-final').innerHTML = mensajeOriginal;
}

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    //texto.select();
    //document.execCommand('copy');

    mensajeFinal.innerHTML = "";
     
});





