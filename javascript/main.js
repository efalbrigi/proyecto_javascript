/*Selector fondo por Genero*/

function cambiarfondo(x){
    console.log(x.value)
    const body= document.getElementById('body')
    body.classList.toggle(x.value); 
}

/*Formulario y Validaciones de datos*/

function validarEdad(){
    let edad=$("#edad");
    
    if (edad.val() == "") {
       
        $("#edad").addClass("is-invalid");
        $("#edad").focus();
        return false;
    } 

    $("#edad").removeClass("is-invalid");
    $("#edad").addClass("is-valid");
    
    return true;
}


function validarEstatura() {
    let estatura = $("#estatura");

    if (estatura.val() == "") {
       
        $("#estatura").addClass("is-invalid");
        $("#estatura").focus();
        return false;
    } 
    
    $("#estatura").removeClass("is-invalid");
    $("#estatura").addClass("is-valid");
    
    return true;
}

function validarPeso() {
    let peso = $("#peso");

    if (peso.val() == "") {
       
        $("#peso").addClass("is-invalid");
        $("#peso").focus();
        return true;
    }

    $("#peso").removeClass("is-invalid");
    $("#peso").addClass("is-valid");
    
    return true;
}

$("#edad").focusout(function() {
    validarEdad();
});

$("#estatura").focusout(function() {
    validarEstatura();
});

$("#peso").focusout(function() {
    validarPeso();
});


$("#enviarDatos").on("click",function(){
    
    let cap_edad = parseInt($("#edad").val());
    let cap_estatura= (parseInt($("#estatura").val()));
    let cap_peso= parseInt($("#peso").val());
    let cap_objetivo = $("#objetivo").val();
    let cap_genero= $("#genero").val();
    console.log(cap_edad,cap_estatura,cap_peso,cap_objetivo)

    if (!validarEdad() || !validarEstatura()|| !validarPeso()  ) {
    
        console.log ("Los datos ingresados están incompletos");

    } else{  

        localStorage.setItem("edad",cap_edad)
        localStorage.setItem("estatura",cap_estatura)
        localStorage.setItem("peso",cap_peso)
        localStorage.setItem("objetivo",cap_objetivo)

        $(".table").append(
            `<thead>
                <tr class="categorias">
                    <th scope="col">Edad</th>
                    <th scope="col">Estatura</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Objetivo</th>
                    
                </tr>
            </thead>

            <tbody>
                <tr class="datos_u">
                    
                    <td>${cap_edad}</td>
                    <td>${cap_estatura}</td>
                    <td>${cap_peso}</td>
                    <td>${cap_objetivo}</td>
                    
                </tr>

            </tbody>`


        )
    }

    if(cap_objetivo === "+ Masa muscular" && cap_genero==="masculino"){
            
        $.get("../javascript/masamuscular_man.json",function (respuesta, estado){
            if (estado==="success"){

                console.log(respuesta)
                let rut= respuesta;

                for (const dato of rut){

                    $("#titulo").append (
                        `<div id="titulos">
                            <h3 class="tit"> ${dato.dia} ${dato.zona}</h3>
                            
                        </div>`  
                    );

                    for (const rutina of dato.rutinas) {
                        $("#titulo").append(
                        
                            `<div class="card rutinas col" style="width: 10rem justify-content:center">
                                <img src=${rutina.Instrucciones} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${rutina.Ejercicio} </h5>
                                    <p class="card-text">${rutina.Series}</p>
                                </div>
                            </div>`
                            
                        )

                    };

                    
                };
            };
                
                
        });

    }if(cap_objetivo === "Tonificar" && cap_genero==="masculino"){
        $.get("../javascript/tonificar_man.json",function (respuesta, estado){
            if (estado==="success"){

                console.log(respuesta)
                let rut= respuesta;

                for (const dato of rut){

                    $("#titulo").append (
                        `<div id="titulos">
                            <h3 class="tit"> ${dato.dia} ${dato.zona}</h3>
                            
                        </div>`  
                    );

                    for (const rutina of dato.rutinas) {
                        $("#titulo").append(
                        
                            `<div class="card rutinas col" style="width: 10rem justify-content:center">
                                <img src=${rutina.Instrucciones} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${rutina.Ejercicio} </h5>
                                    <p class="card-text">${rutina.Series}</p>
                                </div>
                            </div>`
                            
                        )

                    };

                    
                };
            };
                
                
        });

    
    } if(cap_objetivo === "+ Masa muscular" && cap_genero==="femenino"){
        $.get("../javascript/masamuscular_women.json",function (respuesta, estado){
            if (estado==="success"){

                console.log(respuesta)
                let rut= respuesta;

                for (const dato of rut){

                    $("#titulo").append (
                        `<div id="titulos">
                            <h3 class="tit"> ${dato.dia} ${dato.zona}</h3>
                            
                        </div>`  
                    );

                    for (const rutina of dato.rutinas) {
                        $("#titulo").append(
                        
                            `<div class="card rutinas col-md-4" style="width: 10rem justify-content:center">
                                <img src=${rutina.Instrucciones} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${rutina.Ejercicio} </h5>
                                    <p class="card-text">${rutina.Series}</p>
                                </div>
                            </div>`
                            
                        )

                    };

                    
                };
            };
                
                
        });


    } if((cap_objetivo === "Tonificar" && cap_genero==="femenino")){
        $.get("../javascript/tonificar_women.json",function (respuesta, estado){
            if (estado==="success"){

                console.log(respuesta)
                let rut= respuesta;

                for (const dato of rut){

                    $("#titulo").append (
                        `<div id="titulos">
                            <h3 class="tit"> ${dato.dia} ${dato.zona}</h3>
                            
                        </div>`  
                    );

                    for (const rutina of dato.rutinas) {
                        $("#titulo").append(
                        
                            `<div class="card rutinas col-md-4" style="width: 10rem justify-content:center">
                                <img src=${rutina.Instrucciones} class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${rutina.Ejercicio} </h5>
                                    <p class="card-text">${rutina.Series}</p>
                                </div>
                            </div>`
                            
                        )

                    };

                    
                };
            };
                
                
        });




    }
   

});  


