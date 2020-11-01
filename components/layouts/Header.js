import * as React from 'react'
import styled from '@emotion/styled'

const root = styled("header")`
  text-align: center;
  width: 100%;
  display: block;
  background: rgb(0, 139, 253);
  border-radius: 0 0 50px 50px;
  border: 3px solid rgba(48, 200, 214);
  animation: lineRGB 6s linear 1s infinite alternate;
  & > h1 {
    padding: 5px;
    font-family: "Black Ops One";
  }
`

const Header = () => (
        <root>
            <h1>POKEDEX</h1>
        </root>
    )

export default Header
