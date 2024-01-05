import './header.css';

export const Header = () => {
    const app = document.querySelector('#app');
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'Encrypt What You Want';
    header.appendChild(title)
    app.appendChild(header)
}