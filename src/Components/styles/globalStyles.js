import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        scroll-behavior: smooth;
        
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: #101010;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #7ED957;
        border-radius: 5px;
    }

`

export default GlobalStyle