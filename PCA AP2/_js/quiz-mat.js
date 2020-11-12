var p = [   // Array de Pergunta
  { pergunta: '1. Qual das alternativas representa os números naturais "N" ?',
    alternativas: {
      0: "A - {0, 1, 2, 3, 4, 5...}",
      1: "B - {1, 2, 3, 4, 5, 6...}",
      2: "C - {2, 4, 6, 8, 10...}",
      3: "D - {1, 3, 5, 7, 9,...}",
    },
    resposta: 0 
  },

  { pergunta: '2. Qual das alternativas representa os números naturais não-nulos "N*" ?',
    alternativas: {
      0: "A - {0, 1, 2, 3, 4, 5...}",
      1: "B - {1, 2, 3, 4, 5, 6...}",
      2: "C - {2, 4, 6, 8, 10...}",
      3: "D - {1, 3, 5, 7, 9,...}",
    },
    resposta: 1
  },

  { pergunta: '3. Qual antecessor e sucessor do número 1, respectivamente ?',
    alternativas: {
      0: "A - 1 e 2",
      1: "B - 2 e 3",
      2: "C - 0 e 3",
      3: "D - 0 e 2",
    },
    resposta: 3
  },

  { pergunta: '4. Qual antecessor e sucessor do número 10, respectivamente ?',
    alternativas: {
      0: "A - 8 e 12",
      1: "B - 9 e 8",
      2: "C - 9 e 11",
      3: "D - 11 e 9",
    },
    resposta: 2
  },

  { pergunta: '5. O que são Número Naturais "N" ?',
    alternativas: {
      0: 'A - São todos os números existentes',
      1: 'B - São todos os números positivos ( não incluindo o número 0 )',
      2: 'C - É o conjunto dos números inteiros não-negativos até o número 99999',
      3: 'D - É o conjunto dos números inteiros não-negativos com número ilimitado elementos',
    },
    resposta: 3
  },

  { pergunta: '6. Quanto é 2 + 3 ?',
    alternativas: {
      0: "A)  5",
      1: "B)  3",
      2: "C)  23",
      3: "D)  11",
    },
    resposta: 0
  },

  { pergunta: '7. Quanto é 5 + 5 ?',
    alternativas: {
      0: "A)  5",
      1: "B)  20",
      2: "C)  55",
      3: "D)  10",
    },
    resposta: 1
  },

  { pergunta: '8. Quanto é 5 - 3 ?',
    alternativas: {
      0: "A)  2",
      1: "B)  4",
      2: "C)  8",
      3: "D)   10",
    },
    resposta: 0
  },

  { pergunta: '9. Quanto é 20 - 10 ?',
    alternativas: {
      0: "A)  15",
      1: "B)  10",
      2: "C)  5",
      3: "D)  1",
    },
    resposta: 1
  },

  { pergunta: '10. Quanto é 5 - 10 ?',
    alternativas: {
      0: 'A)  5',
      1: 'B)  15',
      2: 'C)  -5',
      3: 'D)  10',
    },
    resposta: 2
  },
];
var intro = window.document.getElementById("intro");
var inicio = window.document.getElementById("materia");  // TELA INICIAL
var tela = window.document.getElementById("quiz"); // TELA DO QUIZ
var tela_final = window.document.getElementById("result"); // TELA FINAL COM RESULTADOS
var perguntaAtualTexto = window.document.getElementById("perguntaAtualTexto"); // PEGANDO O TEXTO
var pergunta = window.document.getElementById("pergunta"); // VARIÁVEL DE PERGUNTAS
var alternativa = []; // ARRAY DE ALTERNATIVAS
var resultado_final = window.document.getElementById("resultado_final"); // VARIÁVEL PARA TEXTO DE RESULTADO FINAL.
var mensagem_final = window.document.getElementById("mensagem_final");

alternativa[0] = window.document.getElementById("resp1");
alternativa[1] = window.document.getElementById("resp2");
alternativa[2] = window.document.getElementById("resp3");
alternativa[3] = window.document.getElementById("resp4");




var n = 0 // Variável para guardar e acrescentar valores ao índice do array que está sendo chamado

function proximaPergunta(){ // Botão Próximo Executando a função de trocar perguntas e respostas de acordo com o índice do Array p

  limparAlternativa();

  if (n === 0) {
    intro.classList.toggle("inativa");
    inicio.classList.toggle("inativa");
    tela.classList.toggle("inativa");


  pergunta.innerText = p[0].pergunta;
  alternativa[0].innerText = p[0].alternativas[0];
  alternativa[1].innerText = p[0].alternativas[1];
  alternativa[2].innerText = p[0].alternativas[2];
  alternativa[3].innerText = p[0].alternativas[3];


  } else if(n<=9 && n > 0) {

  pergunta.innerText = p[n].pergunta;
  alternativa[0].innerText = p[n].alternativas[0];
  alternativa[1].innerText = p[n].alternativas[1];
  alternativa[2].innerText = p[n].alternativas[2];
  alternativa[3].innerText = p[n].alternativas[3];

}else {
  tela.classList.toggle("inativa");
  tela_final.classList.toggle("inativa");
}

  var perguntaAtual = n;

  perguntaAtualTexto.innerText = perguntaAtual;

  n++;

  console.log('Indice atual: '+ perguntaAtual);
  console.log(`Pergunta atual: ${perguntaAtual + 1}`);

}

var acertos = a;
var a = 0;
function verificaResposta(alternativaClicada) {
  let perguntaAtual;
  // PEGANDO RESULTADO A PARTIR DO BOTAO DA ALTERNATIVA
  let alternativaSelecionada;
  alternativaSelecionada = alternativaClicada;
  // FIM PEGANDO RESULTADO.

//  VERIFICANDO SE ALTERNATIVA SELECIONADA É IGUAL A RESPOSTA

   perguntaAtual = perguntaAtualTexto.innerText; // PEGANDO TEXTO DA VARIAVEL ESCONDIDA

  // Se a alternativa clicada for igual a resposta da pergunta atual, faça:
  if (alternativaSelecionada === p[perguntaAtual].resposta) {

    alternativa[alternativaSelecionada].classList.add("acerto");
    a++;
    acertos = a;

  } else {

    // INDICE DA ALTERNATIVA = RESPOSTA DA PERGUNTA ATUAL, DENTRO DO ARRAY DE PERGUNTAS.
    alternativa[p[perguntaAtual].resposta].classList.add("acerto");
    alternativa[alternativaSelecionada].classList.add("erro");
  }
  resultado_final.innerText = `Sua pontuação é: ${acertos} / 10`
  mensagem_final.innerText = "Obrigado por realizar o QUIZ, caso queira refazê-lo recarregue a página."
}


function limparAlternativa() {

  alternativa[0].classList.remove("erro");
  alternativa[1].classList.remove("erro");
  alternativa[2].classList.remove("erro");
  alternativa[3].classList.remove("erro");

  alternativa[0].classList.remove("acerto");
  alternativa[1].classList.remove("acerto");
  alternativa[2].classList.remove("acerto");
  alternativa[3].classList.remove("acerto");

}

