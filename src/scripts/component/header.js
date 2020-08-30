class HeadBar extends HTMLElement {
    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.class = this.getAttribute("class") || null;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            head-er {
                text-align: center;
                width: 100%;
                display: block;
                background: rgb(0, 139, 253);
                border-radius: 0px 0px 50px 50px;
                border: 3px solid rgba(48, 200, 214);
                animation: lineRGB 6s linear 1s infinite alternate;
            }
            
            head-er > h1 {
                padding: 5px;
                font-family: "Black Ops One";
            }
        </style>

        <h1>Pokemon Search</h1>
        `;
    };
};

customElements.define("head-er", HeadBar);