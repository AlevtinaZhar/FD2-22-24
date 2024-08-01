let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let symbol = document.getElementById("symbol");
let digit = document.getElementById("digit");
let num = document.getElementById("numbers");
let result = document.getElementById("result");


let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let low = "abcdefghijklmnopqrstuvwxyz";
let sym = "!@#№;%:&*()-_+=";
let dig = "0123456789";

function rnd(x, y) {
  let num;
  do {
    num = parseInt(Math.random() * 100);
    if (num >= x && num <= y) break;
  } while (true);
  return num;
}

function gen_pass() {
  let znak = "";
  let pass = "";

  if (upper.checked) znak = upp;
  if (lower.checked) znak = znak + low;
  if (symbol.checked) znak = znak + sym;
  if (digit.checked) znak = znak + dig;

  var n = num.value;
  for (var i = 0; i < n; i++) pass = pass + znak[rnd(0, znak.length - 1)];

  result.value = pass;
}


function gen() {
  if (upper.checked || lower.checked || symbol.checked || digit.checked)
    gen_pass();
  else {
    alert("Выберите тип символов!");
  }
}
