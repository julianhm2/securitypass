function verifyLink() {
  var url = document.getElementById('urlInput').value;
  var apiKey = 'AIzaSyDILfxFBF6bPearHJla7lfOx_JPTu_xxl0'; // Asegúrate de que esta es tu clave API correcta
  var apiURL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=' + apiKey;

  var data = {
    client: {
      clientId: "securitypassword",
      clientVersion: "1.0"
    },
    threatInfo: {
      threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url: url }]
    }
  };

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    var resultElement = document.getElementById('result');
    if (data.matches && data.matches.length > 0) {
      resultElement.textContent = 'Enlace malicioso encontrado';
    } else {
      resultElement.textContent = 'El enlace es seguro';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('result').textContent = 'Error al escanear el enlace.';
  });
}
