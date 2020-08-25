import './poke-item.js';

class PokeList extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({
            mode: 'open'
        });
    };

    connectedCallback() {
        this.class = this.getAttribute("id") || null;
    };

    set poke(poke) {
        this._poke = poke;
        this.render();
    };

    renderError(message) {
        this._shadowDOM.innerHTML = `
        <style>
            *{
                text-align:center;
                font-size:15px;
            }
            h2 {
                color: rgba(0, 0, 0, 0.5);
                user-select: none;
        }
        </style>`;
        this._shadowDOM.innerHTML += `<h2>${message}</h2>`;
    };

    render() {
        this._shadowDOM.innerHTML = "";
        this._poke.forEach(item => {
            const itemElement = document.createElement("poke-item");
            itemElement.item = item;
            this._shadowDOM.appendChild(itemElement);
        });
    };
};

customElements.define("poke-list", PokeList);