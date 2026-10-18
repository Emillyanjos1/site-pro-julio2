const nomesDasFotos = [
  "foto-01.jpg",
  "foto-02.jpg",
  "foto-03.jpg",
  "foto-04.jpg",
  "foto-05.jpg",
  "foto-06.jpg",
];

const grade = document.querySelector("#fotos");
let fotosCarregadas = 0;

nomesDasFotos.forEach((nome, indice) => {
  const figura = document.createElement("figure");
  const imagem = document.createElement("img");

  figura.className = "gallery-photo";
  imagem.src = `fotos/${nome}`;
  imagem.alt = `Lembrança ${indice + 1} de Emilly e Julio`;
  imagem.addEventListener("load", () => {
    fotosCarregadas += 1;
    const estadoVazio = grade.querySelector(".gallery-empty");
    if (estadoVazio) estadoVazio.remove();
  });
  imagem.addEventListener("error", () => figura.remove());
  figura.append(imagem);
  grade.append(figura);
});

window.setTimeout(() => {
  if (fotosCarregadas === 0) {
    const estadoVazio = document.createElement("p");
    estadoVazio.className = "gallery-empty";
    estadoVazio.textContent = "As fotos de vocês vão aparecer aqui.";
    grade.append(estadoVazio);
  }
}, 250);