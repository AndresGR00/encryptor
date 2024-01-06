import "./textInput.css";

export const TextInput = (field, id, inputType) => {
  const containerDiv = document.querySelector(".inputs-div");

  const inputDiv = document.createElement("div");
  inputDiv.classList = "input-div";

  const input = document.createElement(`${inputType}`);
  input.placeholder = `${field}`;
  input.id = `${id}`;

  if (input.id === "key") {
    input.type = "password";
  }

  inputDiv.append(input);
  containerDiv.append(inputDiv);
};
