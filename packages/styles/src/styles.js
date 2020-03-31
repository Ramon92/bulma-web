import bulmaStyles from 'bulma/css/bulma.min.css';
import { css, unsafeCSS } from 'lit-element';

export const bwStyles = css`
  ${unsafeCSS(bulmaStyles)}
  * {
    box-sizing: border-box;
  }
`;
