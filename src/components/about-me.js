import { LitElement, html, css } from 'lit-element';

/**
 * <main-component> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class AboutMe extends LitElement {

  /**
   * The styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return [css `
    * {
      color: black;
    }

    section {
      display: grid;
      /* position: absolute; */
    }

    p {
      font-size: 14px;
      margin: 0;
    }

    span {
      font-size: 16px;
    }

    .title {
      font-weight: var(--weight-title-aside, 600);
      font-size: var(--size-title-aside, 18px);
    }

    .left-information {
      display: flex;
      flex-direction: column;
      padding: 67px 0 0 24px;
    }

    .right-information {
      display: flex;
      flex-direction: column;
      padding: 65px 24px 0 0;
    }

    .container {
      color: black;
      /* display: grid; */
      /* position: absolute; */
      width: 768px;
      background-color: var(--bg-aside, white);
      border-radius: 20px;
      gap: var(--gap-aside, 20px);
      padding: var(--padding-aside, 16px);
      /* min-width: var(--min-width-aside, 300px);
      max-width: var(--min-width-aside, 600px); */
      margin-top: 445px;
    }
  `];
  }

  /**
   * Static getter properties.
   *
   * @returns { Object }
   */
  static get properties() {
    return {};
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html `
      <section class="container">
        <span class="title">Sobre mí</span>
        <span>🎯 4 años de experiencia desarrollando software innovador e implementando las mejores prácticas de diseño responsivo, usabilidad semántica, control de versiones y despliegues.</span>
        <span>🖥 He trabado con diversos frameworks y librerías entre las que destacan React, Angular and Lit Element llegando a tener resultados que superan las expectativas de los clientes.</span>
        <span>🚀 Soy un apasionado de la tecnología y compartir mi conocmiento mediante charlas y talleres me ha permitido motivar a decenas de estudiantes a adentrarse en la programación.</span>
      </section>
    `;
  }
}

customElements.define('about-me', AboutMe);
