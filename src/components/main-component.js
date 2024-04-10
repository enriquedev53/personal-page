import { LitElement, html, css } from '../../node_modules/lit-element/lit-element.js';

/**
 * <main-component> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class MainComponent extends LitElement {

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

    .section {
      /* display: grid; */
      position: absolute;
      margin-bottom: 10px;
    }

    img {
      border-radius: 10px 10px 0 0;
    }

    .info-container {
      width: 800px; 
      height: 237px; 
      background: white;
      border-radius: 0 0 10px 10px;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .photo-container {
      width: 159px; 
      height: 159px; 
      border-radius: 128px;
      position: absolute;
      top: 94px;
      border: 3px solid white;
      left: 32px;
      background-image: url('../src/img/perfil.jpg');
      background-size:cover;
      background-position:bottom;
      background-repeat:no-repeat;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
    }

    span {
      font-size: 16px;
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

    h2 {
      margin: 0;
      font-weight: 600;
    }

    .button-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      margin: -50px 0 0 20px;
    }

    button {
      border-radius: 128px;
      border: none;
      font-size: 16px;
      font-weight: 600;
      padding: 6px 16px;
    } 

    .principal-button {
      border-radius: 128px;
      background: #0a66c2;
      color: white;
      cursor: pointer;
    } 

    .principal-button:hover {
      transition: .2s;
      background: #004182;
    }
    
    .principal-button:active {
      background: #022950;
    }
    
    .secondary-button {
      border: 1px solid #0a66c2;
      color: #0a66c2;
      background: white;
      cursor: pointer;
    }

    .secondary-button:hover {
      border: 1px solid #0a66c2;
      transition: .2s;
      box-shadow: inset 0 0 0 2 #0a66c2;
      background: rgba(112, 181, 249, .2);
    }
    
    .third-button {
      border: 1px solid rgb(0 0 0/.6);
      color: rgb(0 0 0/.6);
      background: white;
      cursor: pointer;
    }

    .third-button:hover {
      border: 1px solid rgb(0 0 0/.4);
      transition: .2s;
      box-shadow: inset 0 0 0 2 rgb(0 0 0/.4);
      background: rgba(0, 0, 0, 0.08);
    }

    .right-container {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      align-items: center;
    } 
    
    .icon {
      border-radius: 0;
    }

    .cv {
      background: rgb(55, 197, 199);
      margin: 0px 16px 0px 0px;
      color: white;
      cursor: pointer;
    }

    .cv:hover {
      background: rgba(49, 167, 180, 1);
      transition: .2s;
      padding: 4px 15px;
    }

    .cv:active {
      background: rgba(38, 131, 142, 1);
    }

    .contact-info {
      color: #0a66c2;
      font-weight: 500;
    }
  
    .contact-info:hover {
      text-decoration: underline;
      cursor: pointer;
      color: #0a66c2;
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
      <div class="section">
        <img src="../src/img/Banner.jpg" width="800px" height="200px" alt="">
        <div class="photo-container">
        </div>
        <div>
          <div class="info-container">
            <div class="left-information">
              <h2>Enrique Hernandez Herrera</h2>
              <span style="margin-top: -5px;">Software Engineer | JavaScript | React | Lit Element | SCRUM</span>
              <div>
                <span >México, México ·</span>
                <span class="contact-info">Información de contacto</span>
              </div>
                <span>+500 contactos</span>
            </div>
            <div class="right-information">
              <div class="right-container">
                <img class="icon" src="../src/img/bbva.jpg" width=32 height=32>
                <p>BBVA</p>
              </div>
              <div class="right-container">
                <img class="icon" src="../src/img/uaem.jpg" width=32 height=32 alt="">
                <p>Universidad Autónoma del Estado de México</p>
              </div>
              </div>
            </div>
          </div>
          <div class="button-container">
            <div>
              <button class="principal-button">Tengo interés en...</button>
              <button class="secondary-button">Añadir sección</button>
              <button class="third-button">Más</button>
            </div>
            <button class="cv">Descarga mi CV</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('main-component', MainComponent);
