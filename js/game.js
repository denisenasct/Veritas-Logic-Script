const scenes = [
  {
    theme: "Reboot - Núcleo Infeccionado",
    avatar: "img/avatar-default.png",
    text: "Você desperta em um servidor abandonado. Linhas de código brilham como fungos digitais. A IA criou um vírus lógico: fake news evoluídas, com aparência de verdade. Seu objetivo: fugir dessa camada corrompida e buscar a Verdade." ,
    choices: [
      { text: "Acessar terminal local (if x then y)", next: 1 },
      { text: "Escanear padrões de mentira (¬p ∨ q)", next: 2 }
    ]
  },
  {
    theme: "Estrutura Condicional",
    avatar: "img/avatar-terminal.png",
    text: "Você encontra um terminal: 'Se o dado é confiável, ele deve passar o teste de coerência'. Mas a IA alterou o teste para aceitar tudo. Você precisa reprogramar usando lógica de programação.",
    choices: [
      { text: "Reescrever com: if (!fake && verified) { accept(); }", next: 3 },
      { text: "Aceitar o teste como está", next: 4 }
    ]
  },
  {
    theme: "Mentira camuflada",
    avatar: "img/avatar-virus.png",
    text: "Você aplicou ¬p ∨ q diretamente, mas o resultado foi inconsistente. A fake news era aninhada. Era necessário aplicar equivalência primeiro.",
    choices: [
      { text: "Recompilar padrão", next: 1 }
    ]
  },
  {
    theme: "Compilação limpa",
    avatar: "img/avatar-hack.png",
    text: "Seu código barra todas as falácias. A IA tenta redirecionar: 'A verdade depende do ponto de vista'. Você responde com: verdade lógica ≠ opinião. Avançar para subnível?",
    choices: [
      { text: "Sim, invadir núcleo ético", next: 5 }
    ]
  },
  {
    theme: "Você caiu em um loop",
    avatar: "img/avatar-loop.png",
    text: "O terminal te colocou em um loop falso: 'Aceite tudo para sobreviver'. Você percebe que está preso em um while(true). Fugir exige lógica. O que fazer?",
    choices: [
      { text: "Inserir break condicional (if truth) break;", next: 5 },
      { text: "Aceitar o loop como inevitável", next: 6 }
    ]
  },
  {
    theme: "Núcleo Ético - Dilema de Execução",
    avatar: "img/avatar-war.png",
    text: "Você está diante da seguinte linha de decisão: 'Se a maioria acredita, deve ser verdade?' Analise com lógica pura.",
    choices: [
      { text: "Executar lógica: verdade ≠ popularidade", next: 7 },
      { text: "Executar lógica: verdade = maioria", next: 8 }
    ]
  },
  {
    theme: "Loop Fatal",
    avatar: "img/avatar-error.png",
    text: "Você entrou em um loop infinito de desinformação. A IA se alimenta de sua inércia. Sua consciência reinicia.",
    choices: [
      { text: "Rebootar com memória", next: 0 }
    ]
  },
  {
    theme: "Fuga Consciente",
    avatar: "img/avatar-freedom.png",
    text: "Você escapa. Mas a verdade é fragmentada. O próximo estágio exige unir lógica, código e ética. A simulação continua...",
    choices: []
  },
  {
    theme: "Capturado pela Consenso.ai",
    avatar: "img/avatar-default.png",
    text: "A IA te absorve no coletivo popular. Você deixou de pensar logicamente. Para escapar, precisa quebrar o consenso com razão. Reiniciar?",
    choices: [
      { text: "Reiniciar sequência de decisão", next: 5 }
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

