class HeadBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
    };

    connectedCallback() {
        this.id = this.getAttribute("id") || null;
        this.class = this.getAttribute("class") || null;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            :host {
                text-align: center;
                width: 100%;
                height: auto;
                display: block;
                background: rgb(0, 139, 253);
                border-radius: 0px 0px 50px 50px;
                border-bottom: 3px solid rgba(48, 200, 214);
                animation: lineRGB 6s linear 1s infinite alternate;
            }
            
            :host > h1 {
                margin: 0;
                padding: 5px;
            }
        </style>

        <h1>I ❤️
            <span id="R">R</span>
            <span id="G">G</span>
            <span id="B">B</span>
        </h1>
        `;
    };
};

customElements.define("head-er", HeadBar);