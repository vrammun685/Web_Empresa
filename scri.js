let titulo1 = "Producto";
let texto1 = "Unas lentillas capaces de realizar pequeñas tareas que normalmente tendría que hacer el usuario, así facilitando el proceso de estas y permitiendo concentrarse en partes más importantes(por ejemplo no tener que pararte a leer los ingredientes de un producto y concentrarse en la compra. Haciendo más rápido y sencillo para personas con problemas alimenticios).";

let titulo2 = "Veracidad";
let texto2 = "Tratamos de comprobar que la información que te llega a los ojos sea concisa y veraz";

let titulo3 = "Proximamente";
let texto3 = "En desarrollo sistema de audífonos con un sistema de funcionalidades similares";

let registrado=false;
function pasaratras() {
    let tituloActivo = document.querySelector("#titulillo").textContent;
    let textoActivo = document.querySelector("#textillo").textContent;

    let tituloSalida = tituloActivo;
    let textoSalida = textoActivo;

    if (tituloActivo === titulo1) {
        tituloSalida = titulo3;
        textoSalida = texto3;
    } else if (tituloActivo === titulo2) {
        tituloSalida = titulo1;
        textoSalida = texto1;
    } else if (tituloActivo === titulo3) {
        tituloSalida = titulo2;
        textoSalida = texto2;
    }

    document.getElementById("titulillo").innerHTML = tituloSalida;
    document.getElementById("textillo").innerHTML = textoSalida;
}

function pasarAdelante(){
    let tituloActivo = document.querySelector("#titulillo").textContent;
    let textoActivo = document.querySelector("#textillo").textContent;

    let tituloSalida = tituloActivo;
    let textoSalida = textoActivo;

    if (tituloActivo === titulo1) {
        tituloSalida = titulo2;
        textoSalida = texto2;
    } else if (tituloActivo === titulo2) {
        tituloSalida = titulo3;
        textoSalida = texto3;
    } else if (tituloActivo === titulo3) {
        tituloSalida = titulo1;
        textoSalida = texto1;
    }

    document.getElementById("titulillo").innerHTML = tituloSalida;
    document.getElementById("textillo").innerHTML = textoSalida;
}

function registrar(){
    let nombre=String(document.formulario.name.value);
    let apellidos=String(document.formulario.apellidos.value);
    let num=String(document.formulario.numTelefono.value);
    let email=String(document.formulario.email.value);
    let contraseña=String(document.formulario.contraseña.value);
    let repContraseña=String(document.formulario.repContraseña.value);

    if (nombre === "" || apellidos === "" || num === "" || email === "" || contraseña === "" || repContraseña === "") {
        alert("Por favor, completa todos los campos.");
    }else if (!/^\d{9}$/.test(num)) {
        // Verificar que el número tenga exactamente 9 dígitos
        alert("El número de teléfono debe tener exactamente 9 dígitos.");
    } else if (contraseña !== repContraseña) {
        alert("Las contraseñas no coinciden.");
    } else {
        registrado=true;
        alert("¡¡¡¡Bienvenido "+nombre+" "+apellidos+"!!!!");
    }
}

function comprar(){
    let pais=String(document.formulario.pais.value);
    let provincia=String(document.formulario.provincia.value);
    let domicilio=String(document.formulario.domicilio.value);
    let numero=String(document.formulario.numero.value);
    let fecha=String(document.formulario.fecha.value);
    let cvc=String(document.formulario.cvc.value);

    if (pais === "" || provincia === "" || domicilio === "" || numero === "" || fecha === "" || cvc === "") {
        alert("Por favor, completa todos los campos.");
    } else if (!/^\d{12}$/.test(numero)) {
        // Verificar que el número tenga exactamente 12 dígitos
        alert("El número de cuenta debe tener exactamente 12 dígitos.");
    } else if (!/^\d{3}$/.test(cvc)) {
        alert("El cvc debe tener exactamente 3 dígitos.");
    } else {
        alert("¡¡¡¡Compra realizada con éxito, que disfrute su producto!!!!");
    }

}