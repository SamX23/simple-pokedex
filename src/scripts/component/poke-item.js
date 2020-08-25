class PokeItem extends HTMLElement {
    constructor() {
        super();
        this._shadowDOM = this.attachShadow({
            mode: 'open'
        });
    };

    set item(item) {
        this._item = item;
        this.render();
    };

    render() {
        this._shadowDOM.innerHTML = `
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${this._item.name}</h3>
                </div>
                <div class="card-body">
                    <div class="row-group">
                        <img src="" alt="">
                    </div>
                    <div class="row-group">
                        <p id="pokeDesc">${this._item.id}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    };
};

customElements.define("poke-item", PokeItem);