import CryptoJS from "crypto-js";

export const encrypt = () => {
  const inputText = document.querySelector("#text");
  let text = inputText.value;

  const inputKey = document.querySelector("#key");
  let key = inputKey.value;

  if (!text || !key) {
    alert("Both fields must be completed");
  } else {
    //Cifrar el mensaje
    const outputText = document.querySelector(".output-text");
    outputText.innerHTML = CryptoJS.AES.encrypt(text, key).toString();
  }
};
