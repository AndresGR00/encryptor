import './output.css';

export const Output = () => {
    const main = document.querySelector('.output-div');
    const outputDiv = document.createElement('div');
    outputDiv.classList = 'output-div';
    const output = document.createElement('p');
    output.classList = 'output-text';
    output.innerHTML = 'Result';

    outputDiv.appendChild(output);
    main.appendChild(outputDiv);
}