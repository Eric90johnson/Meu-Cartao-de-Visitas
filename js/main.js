/* 1. PEGAR O ELEMENTO HTML
   Pedimos pro JS buscar a tag <img> dentro da classe .cartao */
const imagemPerfil = document.querySelector('.cartao img');

/* 2. LISTA DE CORES
   Um array (lista) com cores legais para sortear */
const cores = [
  "#00B37E", // Verde (Original)
  "#FF008E", // Rosa Choque
  "#FBA94C", // Laranja
  "#8257E5", // Roxo
  "#04D361"  // Verde Claro
];

/* 3. A FUNÇÃO DE MUDANÇA
   Criamos uma função que sorteia um número e troca a borda */
function mudarCorBorda() {
  // Sorteia um número entre 0 e o tamanho da lista de cores
  const numeroAleatorio = Math.floor(Math.random() * cores.length);
  
  // Pega a cor correspondente ao número sorteado
  const corSorteada = cores[numeroAleatorio];
  
  // Aplica a nova cor na borda da imagem
  imagemPerfil.style.borderColor = corSorteada;
}

/* 4. O "OUVIDO" (EVENT LISTENER)
   Ficamos vigiando: quando houver um 'click' na imagem, execute a função */
imagemPerfil.addEventListener('click', mudarCorBorda);