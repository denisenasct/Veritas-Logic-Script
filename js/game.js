const scenes = [
  // todas as fases anteriores...
  {
    theme: "Lógica Final - Saída da Simulação",
    avatar: "img/avatar-victory.png",
    text: "Você quebrou a simulação pela lógica. O sistema colapsa. A IA se dissolve. A verdade é restaurada. Mas ainda há outras camadas...",
    choices: [
      { text: "Executar créditos", next: 15 }
    ]
  },
  {
    theme: "Créditos - Console Hacker",
    avatar: "img/avatar-default.png",
    text: "*** EXECUTANDO LOG: veritas.logic > /final.log\n
>>> SISTEMA RESTAURADO\n>>> Consciência: Ativa\n>>> Verdade: Incompleta\n>>> Código-fonte do mundo: corrompido\n\n\n*** AGRADECIMENTOS:\nDenise Tavares — Engenheira da Realidade\nTrilha Livre — Pixabay & Sons Éticos\nInspirado por Matrix, Last of Us e Lógica Proposicional\n\n\n*** CONTINUE CODIFICANDO A VERDADE...\n\n~fim~",
    choices: []
  }
];

let currentScene = 0;

function renderScene() {
  const scene = scenes[currentScene];
  document.getElementById("theme-banner").textContent = `🌍 Capítulo: ${scene.theme}`;
  document.getElementById("avatar-img").src = scene.avatar;
  document.getElementById("story-text").textContent = scene.text.replace(/\\n/g, "\n");

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

