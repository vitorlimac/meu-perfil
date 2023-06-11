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
  let mensagemIndex = 0;
  
  function exibirMensagem() {
    mensagemElement.textContent = mensagens[mensagemIndex];
    mensagemIndex++;
  
    if (mensagemIndex === mensagens.length) {
      mensagemIndex = 0;
    }
  }
  
  setInterval(exibirMensagem, 5000);