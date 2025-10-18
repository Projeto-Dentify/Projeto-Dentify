const container = document.getElementById("carrossel-container");
const slides = document.querySelectorAll(".slide");
const imagensPorPagina = 3;
const totalPaginas = Math.ceil(slides.length / imagensPorPagina);

let paginaAtual = 0;

function atualizarCarrossel() {
  const deslocamento = paginaAtual * imagensPorPagina * 300; // 300px por imagem
  container.style.transform = `translateX(-${deslocamento}px)`;
  container.style.transition = "transform 0.5s ease"; // animação suave
}

function avancar() {
  if (paginaAtual < totalPaginas - 1) {
    paginaAtual++;
  } else {
    // Se estiver na última página, volta para a primeira
    paginaAtual = 0;
  }
  atualizarCarrossel();
}

function voltar() {
  if (paginaAtual > 0) {
    paginaAtual--;
  } else {
    // Se estiver na primeira página, vai para a última
    paginaAtual = totalPaginas - 1;
  }
  atualizarCarrossel();
}
