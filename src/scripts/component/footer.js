class FootBar extends HTMLElement {
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
    };

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
           :host {
                font-weight: bold;
                position: fixed;
                bottom: 0;
                text-align: center;
                width: 100%;
                height: 35px;
                background: rgb(0, 139, 253);
                border-radius: 50px 50px 0 0;
                border-top: 3px solid rgba(48, 200, 214);
                animation: lineRGB 6s linear 1s infinite alternate;
            }
        </style>
        <p>Copyright &COPY; 2020 - Made with ❤️ by Sami Kalammallah</p>
        `;
    };
};

customElements.define("foo-ter", FootBar);