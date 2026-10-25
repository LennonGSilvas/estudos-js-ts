// Seleciona o formulário
const form = document.querySelector(".form-imc");

// Escuta o envio (submit) do formulário
// "e" é o objeto do evento; o nome é livre: e, evento, event...
form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede o comportamento padrão (enviar e recarregar a página)
  console.log("Evento Previnido");
  setResultado("Ola mundo");
});

function setResultado(msg) {
  const resultado = document.querySelector("#resultado-obtido");
  resultado.innerHTML = ""; // limpa o conteúdo da div (apaga o resultado anterior)

  // Criação de elementos via JavaScript
  const p = document.createElement("p"); // cria um <p> na memória (ainda não aparece na página)
  p.classList.add("mensagem-resultado"); // adiciona uma classe ao <p>
  p.innerHTML = "Qualquer coisa"; // define o conteúdo do <p>
  resultado.appendChild(p); // insere o <p> dentro da div; agora ele aparece na tela
}
