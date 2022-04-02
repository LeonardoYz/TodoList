import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    /*======== Colors ========*/
    --blue-clr: hsl(214, 84%, 56%);
    --red-clr: hsl(0, 79%, 63%);

    --secondary-clr: hsl(0, 0%, 0%);
    --dark-clr: hsl(0, 0%, 20%);
    --dark-gray-clr: hsl(0, 0%, 51%);
    --light-gray-clr: hsl(0, 0%, 74%);
    --neutral-clr: hsl(0, 0%, 100%);

    /*======== Font Size ========*/
    --big-font-size: 1.125rem; // 18px
    --normal-font-size: 0.875rem; // 14px
    --small-font-size: 0.75rem; // 12px
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    color: var(--dark-clr);
  }

  /*==== RESET =========================*/
  img { 
    width: 100%;
    height: auto;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body, 
  input, 
  textarea, 
  button {
    font: 400 var(--normal-font-size) 'Montserrat', sans-serif;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`