// Definimos updateProgressBar fuera de generatePassword para que no se vuelva a definir cada vez.
function updateProgressBar(password) {
  let strength = 0;

  // Incrementa la fortaleza por cada criterio cumplido
  if (password.length > 10) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25; // Mayúsculas
  if (/[0-9]/.test(password)) strength += 25; // Números
  if (/[^A-Za-z0-9]/.test(password)) strength += 25; // Caracteres especiales

  // Actualiza la barra de progreso
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = strength + '%';
  progressBar.setAttribute('aria-valuenow', strength);

  // Cambia el color de la barra basado en la fortaleza de la contraseña
  if (strength < 50) {
    progressBar.classList.remove('bg-success', 'bg-warning');
    progressBar.classList.add('bg-danger');
  } else if (strength < 75) {
    progressBar.classList.remove('bg-success', 'bg-danger');
    progressBar.classList.add('bg-warning');
  } else {
    progressBar.classList.remove('bg-warning', 'bg-danger');
    progressBar.classList.add('bg-success');
  }
}

// Esta es la función que se llama cuando el usuario quiere generar una nueva contraseña.
function generatePassword() {
  var length = parseInt(document.getElementById("longitud").value);
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";

  if (document.getElementById("caracteresesp").checked) {
    charset += "()*&^%$#@!";
  }

  if (document.getElementById("numeros").checked) {
    charset += "0123456789";
  }

  if (document.getElementById("simbolos").checked) {
    charset += "~`-_=+[{]}\\|;:'\",<.>/?";
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("contraseña").value = password;

  // Llamamos a updateProgressBar pasándole la contraseña generada para actualizar la barra.
  updateProgressBar(password);
}
