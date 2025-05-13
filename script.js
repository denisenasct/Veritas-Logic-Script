const questions = [
  {
    text: "(p ∨ q) → r. Se p é F e q é V, qual o valor de r para a proposição ser verdadeira?",
    options: ["V", "F", "Não é possível saber"],
    correct: "V",
    feedback: {
      V: "Correto! Com p falso e q verdadeiro, (p ∨ q) é verdadeiro. Para que a implicação seja verdadeira, r precisa ser verdadeiro.",
      F: "Errado. Se (p ∨ q) é verdadeiro, e r é falso, a implicação seria falsa.",
      "Não é possível saber": "Errado. Sabemos os valores de p e q, então é possível determinar o valor necessário de r."
    }
  },
  {
    text: "Se ~p ∨ q é F, o que podemos afirmar sobre p e q?",
    options: ["p é F e q é V", "p é V e q é F", "p é V e q é V"],
    correct: "p é V e q é F",
    feedback: {
      "p é F e q é V": "Errado. Isso tornaria ~p verdadeiro e o todo seria verdadeiro.",
      "p é V e q é F": "Correto! ~p é falso e q é falso, então a disjunção é falsa.",
      "p é V e q é V": "Errado. Isso tornaria ~p falso e q verdadeiro, logo o resultado seria verdadeiro."
    }
  },
  {
    text: "(p ∧ q) ↔ r. Se p é V, q é V e r é F, a bicondicional é:",
    options: ["V", "F"],
    correct: "F",
    feedback: {
      V: "Errado. A bicondicional só é verdadeira quando ambos os lados têm o mesmo valor.",
      F: "Correto! p ∧ q é V, mas r é F, então os dois lados são diferentes."
    }
  },
  {
    text: "Se 'Se uma pessoa é vacinada (p), então ela tem menos chance de adoecer gravemente (q)', qual das alternativas representa corretamente a contrapositiva?",
    options: ["Se não é vacinada, então adoece", "Se adoece gravemente, então não foi vacinada", "Se é vacinada, então não adoece"],
    correct: "Se adoece gravemente, então não foi vacinada",
    feedback: {
      "Se não é vacinada, então adoece": "Errado. Isso é a inversa, não a contrapositiva.",
      "Se adoece gravemente, então não foi vacinada": "Correto! Essa é a contrapositiva da proposição.",
      "Se é vacinada, então não adoece": "Errado. Isso é uma modificação da consequente, não a contrapositiva."
    }
  },
  {
    text: "Durante uma campanha de vacinação, foi dito: 'Se todos se vacinarem (p), então a pandemia acaba (q)'. A negação correta dessa frase é:",
    options: ["Todos se vacinam e a pandemia não acaba", "Nem todos se vacinam e a pandemia acaba", "Se ninguém se vacinar, a pandemia continua"],
    correct: "Todos se vacinam e a pandemia não acaba",
    feedback: {
      "Todos se vacinam e a pandemia não acaba": "Correto! A negação de uma implicação é: antecedente verdadeiro e consequente falso.",
      "Nem todos se vacinam e a pandemia acaba": "Errado. Isso não nega a implicação logicamente.",
      "Se ninguém se vacinar, a pandemia continua": "Errado. Isso é uma suposição alternativa, não a negação lógica."
    }
  }
];

let currentQuestionIndex = 0;
let backgroundMusic;

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.text;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.setAttribute("aria-label", option);
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
  const question = questions[currentQuestionIndex];
  const feedback = question.feedback[selected];
  document.getElementById("feedback").textContent = feedback;
  playClick();
}

function loadNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    document.getElementById("question").textContent = "Você completou todas as fases! Parabéns por salvar a vila com lógica!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("next-btn").style.display = "none";
  }
}

function playClick() {
  const audio = new Audio('click.mp3');
  audio.volume = 0.3;
  audio.play();
}

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}

function startMusic() {
  backgroundMusic = new Audio('music.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.2;
  backgroundMusic.play();
}

window.onload = () => {
  displayQuestion();
  startMusic();
};
