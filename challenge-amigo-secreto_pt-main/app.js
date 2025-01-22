// Array para armazenar os nomes dos amigos
let amigos = [];

// Inclui evento ao apertar tecla no Input
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Para previnir ação padrão
        adicionarAmigo();
    }
        });

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obter o valor do campo de entrada
    const nomeAmigo = document.querySelector("#amigo").value;

    // Validar a entrada
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar o nome ao array
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    document.querySelector("#amigo").value = "";

    // Atualizar a lista de amigos
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    // Obter o elemento da lista
    const lista = document.querySelector("#listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e adicionar os nomes como <li> na lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos à lista antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o nome do amigo sorteado com a frase "Amigo secreto é:"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O Amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}

// Função para limpar a lista de amigos
function limparLista() {
    amigos = []; // Limpar o array de amigos
    atualizarLista(); // Atualizar a lista na tela
    document.getElementById("resultado").innerHTML = ""; // Limpar o resultado do sorteio
}