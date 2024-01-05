import './textInput.css';

export const TextInput = (field, id) => {
    const containerDiv = document.querySelector('.inputs-div');

    const inputDiv = document.createElement('div');
    inputDiv.classList = 'input-div';

    const input = document.createElement('textarea');
    input.placeholder = `${field}`
    input.id = `${id}`;

    inputDiv.append(input);
    containerDiv.append(inputDiv)
}