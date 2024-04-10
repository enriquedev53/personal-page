import { LitElement, html, css } from 'lit-element';

/**
 * <aside-multisection> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
export class AsideMultisection extends LitElement {
    /**
     * Static getter properties.
     *
     * @returns { Object }
     */
    static properties = {
      arrayInformation: {
        type: Array,
        attribute: 'array-information'
      }
    }
    /**
     * Constructor for the component.
     * Binding and props initialization.
     */
    constructor() {
        super();
        this.arrayInformation = [{
          title: "Idiomas que domino",
          text: 'Español, English',
        },{
          title: "Public profile & URL",
          href: 'https://www.linkedin.com/in/enriquedev53/'
        }];
    }
    /**
     * The styles for the component.
     *
     * @returns {Array}
     */
    static get styles() {
        return [css`
          .container {
            color: black;
            display: inline;
            background-color: var(--bg-aside, white);
            border-radius: 20px;
            gap: var(--gap-aside, 2px);
            padding: var(--padding-aside, 16px);
            min-width: var(--min-width-aside, 300px);
            max-width: var(--min-width-aside, 600px);;
          }

          .title {
            font-weight: var(--weight-title-aside, 700);
            font-size: var(--size-title-aside, 18px);
          }

          .text {
            margin: var(--margin-text-aside, 0);
            font-size: var(--size-text-aside, 14px);
          }

          hr {
            width: 100%;
            margin: 8px 0;
          }

          a {
            display: block;
          }
        `];
    }

    _buildInformation(array) {
      return html`
      <!-- <img src="../src/icons/lapiz.png" width="24" height="24" alt=""></img> -->
      <div class="container">
        ${array.map(({title, text, href}, index) => {
          if(title && href) {
            return html `
              ${index ? html`<hr size="1" color="#d4d4d4"/>` : ''}
              <span class="title">${title}</span>
              <a href="${href}" target="_blank" class="text">${href}</a>
            `;
          }
          if(title && text) {
            return html `
              ${index ? html`<hr size="1" color="#d4d4d4"/>` : ''}
              <span class="title">${title}</span>
              <p class="text">${text}</p>
            `;
          }
        })}
      </div>
      `;
    }

    /**
     * Renders the component.
     *
     * @returns {HTMLElement}
     */
    render() {
        return html`
          ${
            this.arrayInformation.length 
            ? this._buildInformation(this.arrayInformation) 
            : ''
          }
        `;
    }
}

customElements.define('aside-multisection', AsideMultisection);