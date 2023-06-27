document.addEventListener("DOMContentLoaded", function() {
  // Funcionalidade 1: Adicionar um evento de clique para exibir um alerta quando os botões "Clique aqui! Estamos online" forem clicados
  var buttonContato = document.querySelectorAll(".button_contato button");

  buttonContato.forEach(function(button) {
    button.addEventListener("click", function() {
      alert("Botão clicado!");
    });
  });

  // Funcionalidade 2: Validar o formulário antes de enviar
  var form = document.getElementById("area_contatos");
var buttonEnviar = document.getElementById("button_contato_form");

buttonEnviar.addEventListener("click", function(event) {
  event.preventDefault();

  var nome = document.getElementById("nome_contato").value;
  var email = document.getElementById("email_contato").value;
  var telefone = document.getElementById("telefone_contato").value;
  var cidade = document.getElementById("cidade_contato").value;

  if (nome === "" || email === "" || telefone === "" || cidade === "") {
    alert("Por favor, preencha todos os campos do formulário.");
  } else {
    form.submit();
    exibirMensagemConfirmacao();
  }
});

function exibirMensagemConfirmacao() {
  var mensagemConfirmacao = document.createElement("p");
  mensagemConfirmacao.textContent = "Formulário enviado com sucesso!";

  var areaContatos = document.getElementById("area_contatos");
  areaContatos.appendChild(mensagemConfirmacao);
}

  // Funcionalidade 3: Alterar a cor de fundo do cabeçalho quando o usuário rolar a página
  var header = document.querySelector("header");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Funcionalidade 4: Adicionar um evento de clique para exibir uma mensagem de confirmação ao clicar no link "Trabalhe conosco"
  var linkTrabalheConosco = document.querySelector("#curriculo a");

  linkTrabalheConosco.addEventListener("click", function(event) {
    var confirmacao = confirm("Deseja enviar seu currículo?");

    if (!confirmacao) {
      event.preventDefault();
    }
  });

  // Funcionalidade 5: Abrir janela pop-up ao passar o mouse sobre o advogado
  var advogados = document.querySelectorAll(".advogado");

  advogados.forEach(function(advogado) {
    advogado.addEventListener("mouseover", function() {
      var url = this.querySelector("a").getAttribute("href");
      var popup = window.open(url, "advogadoPopup", "width=800,height=600");
      popup.focus();
    });
  });

  function validarFormulario() {
    var nome = document.getElementById('nome_curriculo').value;
    var cpf = document.getElementById('cpf_curriculo').value;
    var email = document.getElementById('email_curriculo').value;
    
    // Verificar se os campos obrigatórios estão preenchidos
    if (nome === '' || cpf === '' || email === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    
    // Validar o formato do e-mail utilizando expressão regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }
    
    // Validar o formato do CPF utilizando expressão regular
    var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert('Por favor, insira um CPF válido no formato XXX.XXX.XXX-XX.');
      return false;
    }
    
    // Se todas as validações passaram, o formulário está correto
    alert('Formulário válido. Enviando...');
    return true;
  }
});
