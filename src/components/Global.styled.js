import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --white:#e1e1e1;
    --black:#000;
}
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--white);
    }
`;
