function generatePassword() {
  var length = parseInt(document.getElementById("longitud").value);
  var charset = "abcdefghijklmnopqrstuvwxyz";
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
}
