$(document).ready(function(){


    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;
    
    const regex = /^\d+$/;

    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer número");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar números");
            $("#error1").css("color","red");
            return;
        }
        

        numero2 = $("#numero2").val();

        console.log(numero1);
        console.log(numero2);

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo número");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar números");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontSize","2rem");
        limpiar();

    })

    $("#btnLimpiar").click(function(){
        limpiar();
    })

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }
    
    
    $("#btnEsconder").click(function(){
        $("#numero1").hide();
    });

    $("#btnMostrar").click(function(){
        $("#numero1").show();
    });


});



// Swal.fire({
            //     title: "Solo se permiten numeros",
            //     text: "Revise su información",
            //     icon: "warning"
            //   });
