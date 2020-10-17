import React from 'react'

const style = `
    *{
        box-sizing: border-box;
    }
    :host{
        max-width: 700px;
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        background: rgb(0, 139, 253);
        border-radius: 50px 50px 0 0;
        border: 3px solid rgba(48, 200, 214);
        animation: lineRGB 6s linear 1s infinite alternate;
    }
`

function Footer() {
    return (
        <div>
            <p>Copyright &COPY; 2020 - Made with ❤️ by Sami Kalammallah</p>
        </div>
    )
}

export default Footer
