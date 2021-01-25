import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
body{
    background:#1b1b1b;
    font-family: 'Inter', sans-serif;

}
button{
    font-weight:lighter;
    font-size:1rem;
    padding:5px;
    cursor:pointer;
    border:2px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s  ease;
    font-family: 'Inter', sans-serif;
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#23d997;
        color:white;
    }
}

h2{
    font-weight:lighter;
    font-size:4rem;
}
h3{
    color:white
}
h4{
    font-weight:bold;
    font-size:2rem;
}
a{
    font-size:1.1rem;
}
span{
    color:#23d997;
    font-weight:bold;
}
p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%

}
`;

export default GlobalStyle;