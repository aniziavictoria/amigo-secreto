//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const inputNome = document.getElementById("amigo"); 
const botaoAdicionar = document.querySelector(".button-add");
const botaoSortear = document.querySelector(".button-draw");
const lista = document.getElementById("listaAmigos"); 
const resultado = document.getElementById("resultado"); 

// Array para armazenar os nomes
let nomes = [];

// Função para adicionar nome à lista
botaoAdicionar.addEventListener("click", () => {
  const nome = inputNome.value.trim(); // Remover espaços extras

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  nomes.push(nome); // Adicionar nome ao array
  atualizarLista(); // Atualizar lista exibida
  inputNome.value = ""; // Limpar o campo de texto
});

// Função para atualizar a lista na tela
function atualizarLista() {
  lista.innerHTML = ""; // Limpar lista
  nomes.forEach((nome) => {
    const li = document.createElement("li"); // Criar item da lista
    li.textContent = nome; // Definir texto do item
    li.classList.add("name-item"); // Classe opcional para estilização
    lista.appendChild(li); // Adicionar item à lista
  });
}

// Função para sortear um nome
botaoSortear.addEventListener("click", () => {
  if (nomes.length === 0) {
    alert("Não há nomes para sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * nomes.length); // Gerar índice aleatório
  const nomeSorteado = nomes[indiceSorteado]; // Obter nome sorteado
  resultado.innerHTML = `<li class="result-item"> O amigo secreto sorteado é: <strong>${nomeSorteado}</strong> </li>`; // Exibir resultado
});
