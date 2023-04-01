
$(document).ready(function() {
    $("#countBtn").click(function() {
        var textoingresado = $("#inputTxT").val();
        var contador = textoingresado.length;
        $("#txtArea").val("El texto tiene: "+ contador +" caracteres");
    });
});

$(document).ready(function() {
    $("#caractBtn").click(function() {
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