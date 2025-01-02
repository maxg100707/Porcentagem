var valor = document.getElementById("val");
var porcento = document.getElementById("por");
var res = document.getElementById("res");

function calcular() {
  var v = Number(valor.value);
  var p = Number(porcento.value);
  var total = 0;

  if (v == 0 || p == 0) {
    alert("Preencha os dados");
  } else {
    total = v * (p / 100);
    res.innerHTML = `${p}% de ${v} é ${total}`;
  }
}
