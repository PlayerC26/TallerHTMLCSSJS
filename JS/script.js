
$(document).ready(function() {
    $("#countBtn").click(function() {
        var textoingresado = $("#inputTxT").val();
        var contador = textoingresado.length;
        $("#txtArea").val("El texto tiene: "+ contador +" caracteres");
    });
});