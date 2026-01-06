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

const form = document.getElementById("formAgendamento");
const msg = document.getElementById("msgStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    msg.textContent = "Solicitação enviada com sucesso!";
    form.reset();
  } else {
    msg.textContent = "Erro ao enviar. Tente novamente.";
  }
});
