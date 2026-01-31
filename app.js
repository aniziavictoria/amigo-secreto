const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const btnAdd = document.querySelector(".btn-secondary");
const btnSortear = document.querySelector(".btn-primary");

let nomes = [];

btnAdd.addEventListener("click", () => {
    const nome = input.value.trim();

    if (!nome) {
        alert("Digite um nome válido.");
        return;
    }

    nomes.push(nome);
    input.value = "";
    renderLista();
});

btnSortear.addEventListener("click", () => {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome.");
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.innerHTML = `<li>🎉 O amigo secreto é <strong>${sorteado}</strong></li>`;
});

function renderLista() {
    lista.innerHTML = "";
    nomes.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
