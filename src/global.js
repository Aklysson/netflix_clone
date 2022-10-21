import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300&display=swap');
}

body{
    background-color: #111;
    color: #fff;
    margin: 0;
    
}
`