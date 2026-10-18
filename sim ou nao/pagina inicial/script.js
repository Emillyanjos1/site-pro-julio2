const dialog = document.querySelector("#dialog-senha");
const form = document.querySelector("#form-senha");
const input = document.querySelector("#senha");
const error = document.querySelector("#erro-senha");

const abrirDialogSenha = (event) => {
  event.preventDefault();
  error.textContent = "";
  dialog.showModal();
  input.focus();
};

document.querySelector("#abrir-galeria").addEventListener("click", abrirDialogSenha);
document.querySelector("#abrir-historia").addEventListener("click", abrirDialogSenha);

document.querySelector("#fechar-dialog").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const senhaCorreta = "22062025";
  const senhaDigitada = input.value.replace(/\D/g, "");

  if (senhaDigitada === senhaCorreta) {
    window.location.href = "fotos.html";
    return;
  }

  error.textContent = "Essa não é a data certa. Tente mais uma vez.";
  input.focus();
});