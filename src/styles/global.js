import { Theme } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
    background: ${props => props.theme.palette.background.default};
  }
  body, input, button {
    font: 15px 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }
  
  /*Gauge Chart */
  .number{
    color: ${props => props.theme.palette.text.secondary} !important;
    font-size: 24px !important;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 500 !important;
    line-height: 1.167 !important;
    letter-spacing: -0.06px !important;
  }

  .gauge-svg circle{
    stroke-linecap: square !important;
  }
  .gauge-svg circle:nth-child(1){
    stroke: ${props =>
      props.theme.palette.grey[
        props.theme.palette.type === 'light' ? 200 : 700
      ]} !important;
  }
  .gauge-svg circle:nth-child(3){
    stroke: transparent !important;
  }

// `;

// const useStyles = makeStyles(() => createStyles({
//   '@global': {
//     '*': {
//       boxSizing: 'border-box',
//       margin: 0,
//       padding: 0,
//     },
//     html: {
//       '-webkit-font-smoothing': 'antialiased',
//       '-moz-osx-font-smoothing': 'grayscale',
//       height: '100%',
//       width: '100%'
//     },
//     body: {
//       height: '100%',
//       width: '100%'
//     },
//     '#root': {
//       height: '100%',
//       width: '100%'
//     }

//   }
// }));

// const GlobalStyles = () => {
//   useStyles();

//   return null;
// };

// export default GlobalStyles;
