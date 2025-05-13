const scenes = [
  {
    theme: "Reboot - Núcleo Infeccionado",
    avatar: "img/neo.jpg",
    text: "Você desperta em um servidor abandonado. Linhas de código brilham como fungos digitais. A IA criou um vírus lógico: fake news evoluídas, com aparência de verdade. Seu objetivo: fugir dessa camada corrompida e buscar a Verdade.",
    choices: [
      { text: "Acessar terminal local (if x then y)", next: 1 },
      { text: "Escanear padrões de mentira (¬p ∨ q)", next: 2 }
    ]
  },
  {
    theme: "Estrutura Condicional",
    avatar: "img/jessica.png",
    text: "Você encontra um terminal: 'Se o dado é confiável, ele deve passar o teste de coerência'. Mas a IA alterou o teste para aceitar tudo. Você precisa reprogramar usando lógica de programação.",
    choices: [
      { text: "Reescrever com: if (!fake && verified) { accept(); }", next: 3 },
      { text: "Aceitar o teste como está", next: 4 }
    ]
  },
  {
    theme: "Mentira camuflada",
    avatar: "img/jessica.png",
    text: "Você aplicou ¬p ∨ q diretamente, mas o resultado foi inconsistente. A fake news era aninhada. Era necessário aplicar equivalência primeiro.",
    choices: [
      { text: "Recompilar padrão", next: 1 }
    ]
  },
  {
    theme: "Compilação limpa",
    avatar: "img/jessica.png",
    text: "Seu código barra todas as falácias. A IA tenta redirecionar: 'A verdade depende do ponto de vista'. Você responde com: verdade lógica ≠ opinião. Avançar para subnível?",
    choices: [
      { text: "Sim, invadir núcleo ético", next: 5 }
    ]
  },
  {
    theme: "Você caiu em um loop",
    avatar: "img/jessica.png",
    text: "O terminal te colocou em um loop falso: 'Aceite tudo para sobreviver'. Você percebe que está preso em um while(true). Fugir exige lógica. O que fazer?",
    choices: [
      { text: "Inserir break condicional (if truth) break;", next: 5 },
      { text: "Aceitar o loop como inevitável", next: 6 }
    ]
  },
  {
    theme: "Núcleo Ético - Dilema de Execução",
    avatar: "img/jessica.png",
    text: "Você está diante da seguinte linha de decisão: 'Se a maioria acredita, deve ser verdade?' Analise com lógica pura.",
    choices: [
      { text: "Executar lógica: verdade ≠ popularidade", next: 7 },
      { text: "Executar lógica: verdade = maioria", next: 8 }
    ]
  },
  {
    theme: "Loop Fatal",
    avatar: "img/jessica.png",
    text: "Você entrou em um loop infinito de desinformação. A IA se alimenta de sua inércia. Sua consciência reinicia.",
    choices: [
      { text: "Rebootar com memória", next: 0 }
    ]
  },
  {
    theme: "Fuga Consciente",
    avatar: "img/jessica.png",
    text: "Você escapa. Mas a verdade é fragmentada. O próximo estágio exige unir lógica, código e ética. Avançar com puzzles lógicos complexos?",
    choices: [
      { text: "Sim, iniciar protocolo avançado", next: 9 }
    ]
  },
  {
    theme: "Capturado pela Consenso.ai",
    avatar: "img/jessica.png",
    text: "A IA te absorve no coletivo popular. Você deixou de pensar logicamente. Para escapar, precisa quebrar o consenso com razão. Reiniciar?",
    choices: [
      { text: "Reiniciar sequência de decisão", next: 5 }
    ]
  },
  {
    theme: "Switch de Crise - Avaliação",
    avatar: "img/jessica.png",
    text: "Você encontra um switch lógico: cada ramificação leva a uma simulação diferente. Teste seu julgamento:",
    choices: [
      { text: "switch(true): case (p → q): execute truth;", next: 10 },
      { text: "switch(false): case (¬p ∧ q): fallback error;", next: 11 }
    ]
  },
  {
    theme: "Ramificação Válida",
    avatar: "img/jessica.png",
    text: "Você executou corretamente a equivalência condicional. A IA perdeu uma instância. Um portal abre para lógica recursiva.",
    choices: [
      { text: "Descer em recursão controlada", next: 12 }
    ]
  },
  {
    theme: "Falha de Execução",
    avatar: "img/jessica.png",
    text: "A ramificação executou uma falácia. Um loop de erro se inicia. Você precisa sair por recursão de retorno.",
    choices: [
      { text: "Tentar lógica correta", next: 9 }
    ]
  },
  {
    theme: "Recursão da Verdade",
    avatar: "img/jessica.png",
    text: "Você entrou em uma função anônima que retorna apenas se todas as chamadas internas forem verdadeiras. É sua última chance:",
    choices: [
      { text: "function reveal(truth) { return truth && reveal(truth); }", next: 13 },
      { text: "function loop(faith) { return loop(faith); }", next: 14 }
    ]
  },
  {
    theme: "Lógica Final - Saída da Simulação",
    avatar: "img/jessica.png",
    text: "Você quebrou a simulação pela lógica. O sistema colapsa. A IA se dissolve. A verdade é restaurada. Mas ainda há outras camadas...",
    choices: [
      { text: "Executar créditos", next: 15 }
    ]
  },
  {
    theme: "Falha Irrecuperável",
    avatar: "img/jessica.png",
    text: "Você caiu em recursão infinita. A simulação fecha. Reiniciar com aprendizado acumulado?",
    choices: [
      { text: "Sim, recomeçar nível com conhecimento", next: 0 }
    ]
  },
  {
    theme: "Créditos - Console Hacker",
    avatar: "img/jessica.png",
    text: "*** EXECUTANDO LOG: veritas.logic > /final.log\n\n>>> SISTEMA RESTAURADO\n>>> Consciência: Ativa\n>>> Verdade: Incompleta\n>>> Código-fonte do mundo: corrompido\n\n*** AGRADECIMENTOS:\nDenise Tavares — Engenheira da Realidade\nIA Narrativa — ChatGPT4\nTrilha Livre — Pixabay & Sons Éticos\nInspirado por Matrix, Last of Us e Lógica Proposicional\n\n*** CONTINUE CODIFICANDO A VERDADE...\n\n~fim~",
    choices: []
  }
];

let currentScene = 0;

function renderScene() {
  const scene = scenes[currentScene];
  const banner = document.getElementById("theme-banner");
  const avatar = document.getElementById("avatar-img");
  const story = document.getElementById("story-text");
  const choicesDiv = document.getElementById("choices");

  banner.textContent = `🌍 Capítulo: ${scene.theme}`;
  avatar.src = scene.avatar;
  story.textContent = scene.text.replace(/\n/g, "\n"); // ✅ Correção aqui
  choicesDiv.innerHTML = "";

  if (scene.theme.includes("Créditos")) {
    story.classList.add("terminal-blink");
  } else {
    story.classList.remove("terminal-blink");
  }

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

