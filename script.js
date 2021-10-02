function add() {
  var a = document.getElementById("first").value;
  var b = document.getElementById("second").value;
  var out = Number(a) + Number(b);
  document.getElementsByClassName("output")[0].innerText = "Addition is " + out;
}

function sub() {
  var a = document.getElementById("first").value;
  var b = document.getElementById("second").value;
  var out = Number(a) - Number(b);
  document.getElementsByClassName("output")[0].innerText =
    "Subtraction is " + out;
}

function mul() {
  var a = document.getElementById("first").value;
  var b = document.getElementById("second").value;
  var out = Number(a) * Number(b);
  document.getElementsByClassName("output")[0].innerText =
    "Multiplication is " + out;
}

function div() {
  var a = document.getElementById("first").value;
  var b = document.getElementById("second").value;
  var out = Number(a) / Number(b);
  document.getElementsByClassName("output")[0].innerText = "Division is " + out;
}
