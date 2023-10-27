function validar(){
    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp; ";
    document.getElementById("validar_clave").innerHTML = "&nbsp; ";

    if(usuario.value == ""){
        document.getElementById("validar_usuario").innerHTML = "debe completar el campo con usuario correcto";
        error=true;
        usuario.focus();

    }

    if(password.value.length <8){
        document.getElementById("validar_clave").innerHTML = "ingrese una clave con mas de 8 caracteres";
        error=true;
        password.focus();

    }

    if(error == false){
        document.getElementById("usuario").innerHTML = "";
        document.getElementById("validar_usuario").innerHTML = "&nbsp; "
        document.getElementById("password").innerHTML = "";
        document.getElementById("validar_clave").innerHTML = "&nbsp; ";
        alert("Datos Enviados");

    }

    return !error;
}