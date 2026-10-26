const form = document.querySelector(".form-imc");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso || peso < 2.1 || peso > 635) {
    setResultado("Peso Invalido", false);
    return;
  }

  if (!altura || altura < 0.546 || altura > 2.75) {
    setResultado("Altura Invalido", false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelIMC(imc);

  const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

  setResultado(msg, true);
});

function getNivelIMC(imc) {
  const nivel = [
    "Abaixo do Peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 40) {
    return nivel[5];
  }
  if (imc >= 35) {
    return nivel[4];
  }
  if (imc >= 30) {
    return nivel[3];
  }
  if (imc >= 25) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  return nivel[0];
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado-obtido");
  resultado.innerHTML = "";

  const p = criaP();
  if (isValid) {
    p.classList.add("mensagem-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
