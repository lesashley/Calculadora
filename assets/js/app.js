
function suma(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  document.getElementById('resultado').value = parseInt(a) + parseInt(b);
}

function restar(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  document.getElementById("resultado").value = parseInt(a) - parseInt(b);
}

function multiplica(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  document.getElementById('resultado').value = parseInt(a) * parseInt(b);
}

function divide(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  document.getElementById('resultado').value = parseInt(a) / parseInt(b);
}

/*
var suma = document.getElementById("sumar");
var resta = document.getElementById("restar");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");
var m = document.getElementById("mostrar");
suma.onclick = function(){
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  document.getElementById("resultado").value = a + b;
});
*/
