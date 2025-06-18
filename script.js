function mostrarTutorial(tipo) {
    const conteudo = document.getElementById('conteudo');
  
    let texto = '';
  
    switch (tipo) {
      case 'ligar':
        texto = `
          <h2>Como Fazer uma Ligação</h2>
          <ol>
            <li>Aperte no ícone de telefone verde.</li>
            <li>Escolha um contato ou digite o número.</li>
            <li>Aperte no botão verde para ligar.</li>
            <li>Para desligar, toque no botão vermelho.</li>
          </ol>
          <img src="Fotos/Telefone.jpg" alt="Como ligar" class="tutorial-img">
          <img src="Fotos/Telefone2.jpg" alt="Como ligar" class="tutorial-img">
          <img src="Fotos/Telefone3.jpg" alt="Como ligar" class="tutorial-img">
          <img src="Fotos/Telefone4.jpg" alt="Como ligar" class="tutorial-img">
        `;
        break;
  
      case 'mensagem':
        texto = `
          <h2>Como Enviar uma Mensagem</h2>
          <ol>
            <li>Abra o aplicativo de mensagens.</li>
            <li>Toque em nova mensagem.</li>
            <li>Digite o número ou selecione um contato.</li>
            <li>Escreva a mensagem e toque em enviar.</li>
          </ol>
          <img src="Fotos/Mensagem1.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem2.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem3.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem4.jpg" alt="Enviar Mensagem" class="tutorial-img">
        `;
        break;
  
      case 'foto':
        texto = `
          <h2>Como Tirar uma Foto</h2>
          <ol>
            <li>Aperte no ícone da câmera.</li>S
            <li>Enquadre o que deseja fotografar.</li>
            <li>Aperte o botão branco grande no centro.</li>
          </ol>
          <img src="Fotos/Camera1.jpg" alt="Tirar Foto" class="tutorial-img">
          <img src="Fotos/Camera2.jpg" alt="Tirar Foto" class="tutorial-img">
          <img src="Fotos/Camera3.jpg" alt="Tirar Foto" class="tutorial-img">
        `;
        break;
  
      case 'whatsapp':
        texto = `
          <h2>Como Usar o WhatsApp</h2>
          <ol>
            <li>Abrir o aplicativo do WhatsApp.</li>
            <li>Selecionar um contato.</li>
            <li>Escrever a mensagem ou apertar o microfone para falar.</li>
            <li>Enviar a mensagem.</li>
          </ol>
          <img src="Fotos/Mensagem1.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem5.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem6.jpg" alt="Enviar Mensagem" class="tutorial-img">
          <img src="Fotos/Mensagem4.jpg" alt="Enviar Mensagem" class="tutorial-img">
        `;
        break;
  
      case 'volume':
        texto = `
          <h2>Como Ajustar o Volume</h2>
          <ol>
            <li>Use os botões laterais do celular para aumentar ou diminuir o volume.</li>
            <li>Também é possível ajustar em Configurações > Som.</li>
          </ol>
          <img src="Fotos/Botão_lateral.webp" alt="Ajustar volume" class="tutorial-img">
          <img src="Fotos/Som.jpg" alt="Ajustar volume" class="tutorial-img">
        `;
        break;
  
      case 'wifi':
        texto = `
          <h2>Como Conectar no Wi-Fi</h2>
          <ol>
            <li>Vá em Configurações.</li>
            <li>Toque em "Wi-Fi".</li>
            <li>Escolha a rede desejada.</li>
            <li>Digite a senha e conecte.</li>
          </ol>
          <img src="Fotos/Wifi.jpg" alt="Como conectar no wifi" class="tutorial-img">
          <img src="Fotos/Wifi2.jpg" alt="Como conectar no wifi" class="tutorial-img">
          <img src="Fotos/Wifi3.jpg" alt="Como conectar no wifi" class="tutorial-img">
        `;
        break;
    }
  
    conteudo.innerHTML = texto;
  }