import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
// :root{
//     --primary-color: #007bff;
//     --primary-color-light: #057FFF;
//     --secondary-color: #6c757d;
//     --background-dark-color: #10121A;
//     --background-dark-grey: #191D2B;
//     --border-color: #2e344e;
//     --background-light-color: #F1F1F1;
//     --background-light-color-2: rgba(3,127,255,.3);
//     --white-color: #FFF;
//     --font-light-color: #a4acc4;
//     --font-dark-color: #313131;
//     --font-dark-color-2: #151515;
//     --sidebar-dark-color: #191D2B;
//     --scrollbar-bg-color: #383838;
//     --scrollbar-thump-color: #6b6b6b;
//     --scrollbar-track-color: #383838;

// }
.light-theme{
    --primary-color: #E63946;
    --primary-color-light: #EC9A9A;
    --secondary-color: #ECDEDC;
    --background-dark-color: #D4EDE8;
    --background-dark-grey: #7FB5C8;
    --border-color: #7FB5C8;
    --background-light-color: #D4EDE8;
    --background-light-color-2: rgba(230,57,70,.3);
    --white-color: #13212A;
    --font-light-color: #1F3747;
    --font-dark-color: #1F3747;
    --font-dark-color-2: #13212A;
    --sidebar-dark-color: #A8DADC;
    --scrollbar-bg-color: #7FB5C8;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #7FB5C8;
}
.dark-theme{
    --primary-color: #E63946;
    --primary-color-light: #EC9A9A;
    --secondary-color: #3E2D2B;
    --background-dark-color: #283A53;
    --background-dark-grey: #191D32;
    --border-color: #467494;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(230,57,70,.3);
    --white-color: #FFF;
    --font-light-color: #D4EDE8;
    --font-dark-color: #1F3747;
    --font-dark-color-2: #13212A;
    --sidebar-dark-color: #375773;
    --scrollbar-bg-color: #5590B4;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #5590B4;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
    list-style: none;
    text-decoreation: none;
    font-family: 'Mitr', sans-serif;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;

}
h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
    }
}
span{
    color: var(--primary-color);
}
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
`;
export default GlobalStyled;