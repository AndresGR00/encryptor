import './mainHTML.css';

export const Main = () => {
    const app = document.querySelector('#app');
    
    const main = document.createElement('main');

    const inputsDiv = document.createElement('div');
    inputsDiv.classList = 'inputs-div';

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList = 'buttons-div';

    const errorDiv = document.createElement('div');
    errorDiv.classList = 'error-div';

    const outputDiv = document.createElement('div');
    outputDiv.classList = 'output-div';

    main.appendChild(inputsDiv);
    main.appendChild(buttonsDiv);
    main.appendChild(errorDiv);
    main.appendChild(outputDiv);
    app.appendChild(main);
}