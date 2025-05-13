const scenes = [
  {
    theme: "Introdução",
    avatar: "img/avatar-default.png",
    text: "Você é uma lógica viva. A vila está em caos, dominada por fake news e manipulação. Seu dever: restaurar a clareza.",
    choices: [
      { text: "Entrar no mundo das Fake News", next: 1 }
    ]
  },
  {
    theme: "Fake News Políticas",
    avatar: "img/avatar-fakenews.png",
    text: "Um político diz: 'Se sou honesto, então não há corrupção'. Você detecta algo errado...",
    choices: [
      { text: "Negar a proposição logicamente", next: 2 },
      { text: "Aceitar o argumento como válido", next: 3 }
    ]
  },
  {
    theme: "Corretamente negado",
    avatar: "img/avatar-fakenews.png",
    text: "Você negou a implicação: 'Sou honesto e há corrupção'. A vila começa a despertar. Avançar?",
    choices: [
      { text: "Sim, rumo à guerra ética", next: 4 }
    ]
  },
  {
    theme: "Ilusão aceita",
    avatar: "img/avatar-default.png",
    text: "A vila acredita em tudo. A IA se fortalece. Você volta ao ponto anterior.",
    choices: [
      { text: "Tentar de novo", next: 1 }
    ]
  },
  {
    theme: "Guerra e Ética",
    avatar: "img/avatar-war.png",
    text: "O general diz: 'Se há ameaça, então podemos atacar'. Mas houve ataque sem ameaça.",
    choices: [
      { text: "Identificar falácia de afirmação do consequente", next: 5 },
      { text: "Concordar com o ataque", next: 6 }
    ]
  },
  {
    theme: "Você venceu a falácia",
    avatar: "img/avatar-war.png",
    text: "Parabéns! Você venceu o discurso falacioso. A ética retorna à vila.",
    choices: []
  },
  {
    theme: "Você caiu na falácia",
    avatar: "img/avatar-default.png",
    text: "Você foi manipulado. Reiniciando...",
    choices: [
      { text: "Recomeçar do capítulo Guerra", next: 4 }
    ]
  }
];

let currentScene = 0;

function renderScene() {
  const scene = scenes[currentScene];
  document.getElementById("theme-banner").textContent = `🌍 Capítulo: ${scene.theme}`;
  document.getElementById("avatar-img").src = scene.avatar;
  document.getElementById("story-text").textContent = scene.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      playClick();
      currentScene = choice.next;
      renderScene();
    };
    choicesDiv.appendChild(btn);
  });
}

function playClick() {
  const audio = new Audio('click.mp3');
  audio.volume = 0.4;
  audio.play();
}

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}

window.onload = renderScene;
