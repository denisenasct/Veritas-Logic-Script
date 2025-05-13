const scenes = [
  {
    theme: "A Simulação",
    avatar: "img/avatar-default.png",
    text: "Você acorda. A realidade está borrada. A lógica foi distorcida. A IA controla a vila através de fake news e falácias. Este não é um quiz. É uma simulação. E você é a variável mais instável.",
    choices: [
      { text: "Infiltrar-se no sistema de desinformação", next: 1 },
      { text: "Buscar a raiz lógica da corrupção", next: 2 }
    ]
  },
  {
    theme: "Falácia do Consequente",
    avatar: "img/avatar-fakenews.png",
    text: "Você entra no núcleo da propaganda. Um político digital diz: 'Se sou honesto, então não há corrupção'. Agora, há corrupção exposta. Mas ele diz que nunca foi honesto. Há algo errado... a simulação treme. Identifique a falha lógica e fragmente o argumento da IA.",
    choices: [
      { text: "Injetar código: (p → q) ∧ q ⇒ p", next: 3 },
      { text: "Injetar código: q ∧ ¬p ⇒ erro lógico", next: 4 }
    ]
  },
  {
    theme: "De Morgan na prática",
    avatar: "img/avatar-fakenews.png",
    text: "A IA criptografou a frase: 'Não vacinado ou não doente significa sistema seguro'. Seu protocolo exige negar a expressão usando leis de De Morgan. Inicie a sequência lógica.",
    choices: [
      { text: "Executar: p ∧ q", next: 5 },
      { text: "Executar: ¬p ∧ ¬q", next: 6 }
    ]
  },
  {
    theme: "Erro de simulação",
    avatar: "img/avatar-default.png",
    text: "Você aplicou a lógica incorreta. O sistema se fortaleceu. Retorne ao ponto de entrada e recompile o raciocínio.",
    choices: [
      { text: "Recompilar argumento", next: 1 }
    ]
  },
  {
    theme: "Falha quebrada",
    avatar: "img/avatar-health.png",
    text: "Você aplicou: q ∧ ¬p. A IA falha em manter coerência. Um buraco de segurança se abre. A integridade lógica se reinstaura.",
    choices: [
      { text: "Avançar pelo túnel lógico", next: 7 }
    ]
  },
  {
    theme: "Porta lógica desbloqueada",
    avatar: "img/avatar-health.png",
    text: "Expressão negada com sucesso: ¬(¬p ∨ ¬q) ≡ p ∧ q. O sistema admite inconsistência. Uma brecha de lógica foi aberta. Um novo mundo está ao seu alcance.",
    choices: [
      { text: "Entrar na lógica central da IA", next: 7 }
    ]
  },
  {
    theme: "Código inválido",
    avatar: "img/avatar-default.png",
    text: "Expressão não reconhecida pela estrutura lógica. Reinicie a unidade de negação e tente novamente.",
    choices: [
      { text: "Reiniciar módulo De Morgan", next: 2 }
    ]
  },
  {
    theme: "Lógica de Controle",
    avatar: "img/avatar-war.png",
    text: "Você adentra o núcleo. Linhas de código descem do céu. A IA pergunta: Qual expressão equivale a (p → q)? Escolha o fragmento correto para acessar o Sistema Raiz.",
    choices: [
      { text: "Executar: ¬p ∨ q", next: 8 },
      { text: "Executar: p ∧ ¬q", next: 9 }
    ]
  },
  {
    theme: "Acesso concedido",
    avatar: "img/avatar-war.png",
    text: "Equivalência reconhecida: (p → q) ≡ ¬p ∨ q. A IA começa a ruir. Códigos caem como chuva. O sistema precisa de reinicialização.",
    choices: []
  },
  {
    theme: "Acesso negado",
    avatar: "img/avatar-default.png",
    text: "Você usou a negação da implicação, não a equivalência. A IA desconfiou e blindou o núcleo. Reiniciar tentativa lógica?",
    choices: [
      { text: "Voltar ao núcleo lógico", next: 7 }
    ]
  }
];

