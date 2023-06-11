const mensagens = [
    "Linux",
    "Docker",
    "HTML & CSS",
    "Javascript",
    "Cloud",
    "Inteligência Artificial",
    "Máquina Virtual"
    // Adicione mais mensagens aqui, se desejar
  ];
  
  const mensagemElement = document.getElementById("mensagem");
  
  function changeMessage() {
    const randomIndex = Math.floor(Math.random() * mensagens.length);
    mensagemElement.textContent = mensagens[randomIndex];
  }
  
  setInterval(changeMessage, 5000);
  