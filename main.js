const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="img/aprovado.png" alt="emoji celebrando" />`;
const imgReprovado = `<img src="img/reprovado.png" alt="emoji decepcionado" />`;

let linhas = "";

form.addEventListener("submit", function (ev) {
   ev.preventDefault();

   const inputNomeAtividade = document.getElementById("nome-atividade");
   const inputNotaAtividade = document.getElementById("nota-atividade");

   let linha = `<tr>\n
   <td>${inputNomeAtividade.value}</td>\n
   <td>${inputNotaAtividade.value}</td>\n
   <td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>\n
   </tr>`;

   linhas += linha;

   const corpoTabela = document.querySelector("tbody");
   corpoTabela.innerHTML = linhas;

   inputNomeAtividade.value = "";
   inputNotaAtividade.value = "";
});
