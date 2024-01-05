import './button.css';

export const Button = (name, action) => {
    const containerDiv = document.querySelector('.buttons-div');
    const button = document.createElement('button');
    button.textContent = `${name}`;
    button.addEventListener('click', action);

    containerDiv.appendChild(button);
}