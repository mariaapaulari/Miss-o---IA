const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  {
    enunciado: "Quais são os movimentos que marcaram a história do brasil",
    alternativas: ["Revolução Liberal de (1821)", "Guerra da Independência do Brasil (1822-1823)"],
  },
  {
    enunciado: "Quais são os dois países que fazem fronteira com o Brasil?",
    alternativas: ["Argentina", "Uruguai"],
  },
  { 
    enunciado: "Quais são os dois planetas do nosso sistema solar que são gasosos?",
    alternativas:["Saturno", "Júpiter"],
  },
  {
    enunciado: "Quais são os dois oceanos que banham a América do Sul?",
    alternativas: ["Oceano Atlântico", "Oceano Pacífico"],
  },
  {
    enunciado: "Quais são os dois países que fazem parte do Reino Unido?",
    alternativas:["Inglaterra", "Escócia"],
  },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() { 
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
   mostraAlternativas();
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(opcao));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
  function respostaSelecionada(opcaoSelecionada) {
     const afirmacoes = opcaoSelecionada.afirmacoes;
     historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
}
mostraPergunta();