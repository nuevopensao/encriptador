document.getElementById('encryptBtn').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var encryptedText = btoa(inputText); // Utiliza Base64 para encriptar
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    var encryptedText = document.getElementById('inputText').value;
    try {
        var decryptedText = atob(encryptedText); // Utiliza Base64 para desencriptar
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = "Texto inválido para desencriptar";
    }
});
