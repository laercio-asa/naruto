console.log("API do Naruto carregada com sucesso!");
let personagens;

// Obter todos os personagens
// fetch() é uma função do JavaScript usada para fazer requisições HTTP
// O método .then() serve para tratar o resultado de uma PROMISE do fetch
// O método .json() converte a resposta em um objeto JavaScript json.
// data é o nome da variável que armazena o resultado da requisição
// console.log() exibe o resultado no console do navegador
fetch('https://naruto-br-api.site/characters')
  .then(response => response.json())
  .then(data => personagens = data);
console.log("Deu certo!");
console.log(personagens);

// Função para mostrar um personagem
function mostrarPersonagem() {
    // mostrar todos os personagens
    console.log(personagens);
    // mostrar o primeiro personagem - 0 é o índice do array entre []
    //console.log(personagens[0]);
    // length é uma propriedade que conta os itens do array
    let id = Math.floor(Math.random() * personagens.length);
    console.log(id);
    let personagem = personagens[id];
    console.log(personagem.name);
    console.log(personagem.power);
    console.log(personagem.village.name);
    console.log(personagem.images[0].image_url);
    document.getElementById("imagem").src = personagem.profile_image;

}