const mensagens = [
    "Linux",
    "Docker",
    "Kubernetes/Openshift",  
    ".Net",
    "MySQL",
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