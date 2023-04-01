
$(document).ready(function () {
    $("#countBtn").click(function () {
        var textoingresado = $("#inputTxT").val();
        var contador = textoingresado.length;
        $("#txtArea").val("El texto tiene: " + contador + " caracteres");
    });
});

$(document).ready(function () {
    $("#caractBtn").click(function () {
        var textoIngresado = $("#inputTxT2").val();
        var mensaje = "";

        if (!isNaN(textoIngresado)) { // si el valor es numérico
            mensaje = "El valor ingresado es tipo numérico";
        } else { // si el valor es texto
            mensaje = "El valor ingresado es de tipo texto";
        }

        $("#txtArea2").val(mensaje);
    });
});

$(document).ready(function () {
    $("#calEdadBtn").click(function () {
        var nombre = $("#inputTxT3").val();
        var edad = $("#inputTxT32").val();
        var mensaje = "";

        if (edad > 17) { // verifica que sea mayor a 17 para saber si es mayor de edad
            mensaje = "es mayor de edad";
        } else { // si no, es menor de edad
            mensaje = "es menor de edad";
        }

        $("#txtArea3").val(nombre + " " + mensaje);
    });
});

$(document).ready(function () {
    $("#calNotBtn").click(function () {
        var nombre = $("#inputTxT4").val();
        var nota1 = parseFloat($("#inputTxT42").val());
        var nota2 = parseFloat($("#inputTxT43").val());
        var nota3 = parseFloat($("#inputTxT44").val());

        var mensaje = "";

        var res = (nota1 + nota2 + nota3) / 3;

        if (res >= 3) { // verifica que sea mayor a 17 para saber si es mayor de edad
            mensaje = "Felicitaciones " + nombre + " su nota es " + res;
        } else { // si no, es menor de edad
            mensaje = "Lo siento " + nombre + " su nota es " + res;
        }

        $("#txtArea4").val(mensaje);
    });
});

$(document).ready(function () {
    $("#parImpBtn").click(function () {
        var numero = $("#inputTxT5").val();
        if (numero == "") { //Verifica el campo vacio
            $("#txtArea5").val("Por favor, ingrese un número.");
        } else if (isNaN(numero)) {
            $("#txtArea5").val("El valor ingresado no es un número válido, por favor ingrese un número entero positivo");
        } else if (numero < 0) {
            $("#txtArea5").val("El número debe ser positivo.");
        } else if (numero % 1 != 0) {
            $("#txtArea5").val("El número no puede ser decimal, por favor ingrese un número entero positivo");
        } else if (numero % 2 == 0) {
            $("#txtArea5").val("El número es par.");
        } else {
            $("#txtArea5").val("El número es impar.");
        }
    });
});


$(document).ready(function() {
    $("#textSearch").click(function() {
        var parrafo = $("#inputTextArea").val();
        var texto = $("#inputSearchTextArea").val();
        var regex = new RegExp(texto, "gi");
        var resaltado = parrafo.replace(regex, "<span class='resaltado'>$&</span>");
        $("#resBusqueda").html(resaltado);
    });
});