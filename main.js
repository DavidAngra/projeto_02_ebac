const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="img/aprovado.png" alt="emoji celebrando" />`;
const imgReprovado = `<img src="img/reprovado.png" alt="emoji decepcionado" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const notaMinima = parseFloat(prompt("Digite uma nota mínima:"));

let linhas = "";

form.addEventListener("submit", function (ev) {
   ev.preventDefault();

   adicionaLinha();
   atualizaTabela();
   atualizaMediaFinal();
});

function adicionaLinha() {
   const inputNomeAtividade = document.getElementById("nome-atividade");
   const inputNotaAtividade = document.getElementById("nota-atividade");

   if (atividades.includes(inputNomeAtividade.value)) {
      alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`);
   } else {
      atividades.push(inputNomeAtividade.value);
      notas.push(parseFloat(inputNotaAtividade.value));

      let linha = `<tr>\n
      <td>${inputNomeAtividade.value}</td>\n
      <td>${inputNotaAtividade.value}</td>\n
      <td>${
         inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
      }</td>\n
      </tr>`;

      linhas += linha;
   }

   inputNomeAtividade.value = "";
   inputNotaAtividade.value = "";
}

function atualizaTabela() {
   const corpoTabela = document.querySelector("tbody");
   corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
   const mediaFinal = calculaMediaFinal();
   document.getElementById("media-final-valor").innerHTML =
      mediaFinal.toFixed(1);
   document.getElementById("media_final-resultado").innerHTML =
      mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
   let somaDasNotas = 0;
   for (let i = 0; i < notas.length; i++) {
      somaDasNotas += notas[i];
   }
   return somaDasNotas / notas.length;
}
