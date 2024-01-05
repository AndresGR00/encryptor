import CryptoJS from "crypto-js";

export const decrypt = () => {
  const inputText = document.querySelector("#text");
  let text = inputText.value;

  const inputKey = document.querySelector("#key");
  let key = inputKey.value;

  if (!text || !key) {
    alert("Both fields must be completed");
  } else {
    const outputText = document.querySelector(".output-text");

    // Decifrar el mensaje
    const decryptedMessage = CryptoJS.AES.decrypt(text, key);
    const decryptedText = decryptedMessage.toString(CryptoJS.enc.Utf8);

    // Mostrar el texto descifrado
    outputText.innerHTML = decryptedText;
  }
};
