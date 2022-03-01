//FORMULARIO DE INNGRESO-REGISTRO

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//Configuraciones
function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();
    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}


/*Registro usuarios*/

const usuarioarray=[];

function resgistro_usuarios(){

    let nombre= document.getElementById("Nombre").value;
    let correo=document.getElementById("Correo").value;
    let usuario=document.getElementById("Usuario").value;
    let u_contraseña=document.getElementById("Pass").value;

class Usuarios{
        constructor(nombre,correo,usuario,u_contraseña){
    this.nombre = nombre;
    this.correo = correo;
    this.usuario = usuario;
    this.u_contraseña = u_contraseña;
    }

}

usuarioarray.push(new Usuarios(nombre,correo,usuario,u_contraseña))

console.log(usuarioarray)


for (let datos of usuarioarray ){
    
    localStorage.setItem ("Nombre", datos.nombre)
    localStorage.setItem ("Correo", datos.correo)
    localStorage.setItem ("Usuarios", datos.usuario)
    localStorage.setItem ("u_contraseña", datos.u_contraseña)
    window.location = "./usuario.html"
}
}


$("#registro").click(function() {
    resgistro_usuarios();
    
});


function ingreso_usuarios(){
    let correo=document.getElementById("Email").value;
    let u_contraseña=document.getElementById("Password").value;
    
       for (let ingreso of usuarioarray ){
        if ( ingreso.correo==correo && u_contraseña==ingreso.u_contraseña){
            console.log("INGRESO OK")
            window.location = "./usuario.html"
           
        }
    }

}


$("#ingreso").click(function() {
        ingreso_usuarios();
});



