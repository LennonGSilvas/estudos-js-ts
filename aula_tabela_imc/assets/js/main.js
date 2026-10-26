// Seleciona o formulário
const form = document.querySelector(".form-imc");

// Escuta o envio do formulário
form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede o envio padrão (recarregar a página)

  // Pega os inputs dentro do formulário (e.target = formulário)
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  // Converte os valores de string para number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Valida: 0 e NaN (vazio ou texto) são falsy
  if (!peso) {
    setResultado("Peso Invalido", false);
    return; // encerra a função aqui
  }

  if (!altura) {
    setResultado("Altura Invalido", false);
    return; // encerra a função aqui
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelIMC(imc);

  // Monta a mensagem com template string
  const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

  setResultado(msg, true);
});

// Retorna a classificação do IMC
function getNivelIMC(imc) {
  // Classificações na mesma ordem da tabela (índices 0 a 5)
  const nivel = [
    "Abaixo do Peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  // Do maior para o menor: o primeiro if verdadeiro encerra a função
  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

// Calcula o IMC: peso dividido pela altura ao quadrado
function getIMC(peso, altura) {
  const imc = peso / altura ** 2; // ** é potência

  // Arredonda para 2 casas decimais (retorna string)
  return imc.toFixed(2);
}

// Cria um <p> na memória (ainda não aparece na tela)
function criaP() {
  const p = document.createElement("p");
  return p;
}

// Mostra a mensagem na tela; isValid define a classe do <p>
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado-obtido");
  resultado.innerHTML = ""; // limpa o resultado anterior

  const p = criaP();
  if (isValid) {
    p.classList.add("mensagem-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p); // insere o <p> na página (agora aparece)
}
