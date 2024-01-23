import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button{
    font: 1rem 'League+Spartan', sans-serif;
  }
  h1, h2, p, span, strong, button, label, input {
    line-height: 100%;
  }
  button {
    cursor: pointer;
  }
`
