// Função para validar e enviar o formulário
function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  var form = event.target; // Captura o formulário atual

  if (form.checkValidity() && validarEmail()) {
    // Se o formulário e o campo de e-mail forem válidos
    alert("O formulário foi enviado!");
    form.reset(); // Limpa os campos do formulário
  } else {
    // Se o formulário for inválido, exibe mensagens de validação
    form.reportValidity();
  }
}

// Função para validar todos os campos obrigatórios
function validarCamposObrigatorios(form) {
  var campos = form.querySelectorAll('input[required], select[required], textarea[required]');

  campos.forEach(function(campo) {
    campo.addEventListener('input', function() {
      campo.setCustomValidity('');
    });

    campo.addEventListener('invalid', function() {
      if (campo.validity.valueMissing) {
        campo.setCustomValidity('Este campo é obrigatório.');
      } else {
        campo.setCustomValidity('');
      }
    });
  });
}

// Função para validar o campo de e-mail
function validarEmail() {
  var emailInput = document.getElementById('email_contato');
  var email = emailInput.value;

  // Expressão regular para validar o formato do e-mail
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    return true; // E-mail válido
  } else {
    emailInput.setCustomValidity("Digite um endereço de e-mail válido.");
    return false; // E-mail inválido
  }
}

// Captura todos os formulários da página
var forms = document.querySelectorAll('form');

// Adiciona um evento de envio para cada formulário
forms.forEach(function(form) {
  form.addEventListener('submit', enviarFormulario);
  validarCamposObrigatorios(form);
});

function exibirMensagem() {
  alert("O botão foi pressionado!");
}

// Captura todos os botões de contato
var buttons = document.querySelectorAll('.button_contato button');

// Adiciona um evento de clique para cada botão
buttons.forEach(function(button) {
  button.addEventListener('click', exibirMensagem);
});


var lista = document.getElementById("span");

function expandirNoticias() {
  lista.style.display = "block";
}

function esconderNoticias() {
  lista.style.display = "none";
}