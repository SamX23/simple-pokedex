class PokeItem extends HTMLElement {
  set item(item) {
        this._item = item;
        this.render();
    };

    render() {
        this.innerHTML = `
        <style>
            .container {
                text-align: center;
                max-width: 500px;
                margin: 25px auto;
                margin-bottom: 50px;
            }

            .container img {
                padding: 5px;
                max-width: 350px;
            }
        </style>

        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                    ${this._item.name.toUpperCase()}
                    </h3>
                </div>

                <div class="card-body">
                    <div class="row-group">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${this._item.id}.png" alt="">
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