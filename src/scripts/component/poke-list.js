import './poke-item.js';

class PokeList extends HTMLElement {
     set poke(poke) {
        this._poke = poke;
        this.render();
    };

    renderError(message) {
        this.innerHTML = `
        <style>
            *{
                text-align:center;
                font-size:15px;
            }
            h2 {
                color: rgba(0, 0, 0, 0.5);
                user-select: none;
        }
        </style>
        `;
        this.innerHTML += `<h2>${message}</h2>`;
    };

    render() {
        this.innerHTML = "";
        this._poke
        console.log(`poke`,
            this._poke.abilities)
        const itemElement = document.createElement("poke-item");
        itemElement.item = { id: this._poke.id, name: this._poke.name }
        this.appendChild(itemElement);
    };
};

customElements.define("poke-list", PokeList);