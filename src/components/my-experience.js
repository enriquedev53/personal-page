import { LitElement, html, css } from '../../node_modules/lit-element/lit-element.js';

/**
 * <main-component> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class MyExperience extends LitElement {

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

    /* .title {
      font-weight: var(--weight-title-aside, 600);
      font-size: var(--size-title-aside, 18px);
    } */

    .title-job {
      font-weight: var(--weight-title-aside, 600);
      font-size: var(--size-title-aside, 16px);
    }

    /* .section-container {
      color: black;
      width: 768px;
    } */

    .info-container {
      display: grid;
      gap: 8px;
      margin-top: 14px;
      grid-template-columns: auto 1fr;
    } 

    .company-container {
      /* padding: 4px; */
      display: grid;
    }

    .company {
      font-size: 14px;
    } 

    .company-time {
      color: rgba(8, 0, 0, 60%);
      font-weight: 400;
      font-size: 14px;
    }

    .description {
      padding: 8px 0;
    }

    .photo-container {
      /* width: 60px;  */
      width: 48px; 
      height: 48px;
      border: 3px solid white;
      /* background-image: url('../src/img/bbva.jpg'); */
      background-size:cover;
      background-position:bottom;
      background-repeat:no-repeat;
    }

    /* .principal-container {
      background-color: var(--bg-aside, white);
      border-radius: 20px;
      padding: var(--padding-aside, 16px);
    } */
  `];
  }

  /**
   * Static getter properties.
   *
   * @returns { Object }
   */
  static get properties() {
    return {
      experienceInformation: {
        type: Array,
        attribute: false
      }
    };
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();
    this.experienceInformation = [];
  }

  _experiences(array) {
    return array.map(({title, company, time, address, description, imagePath}) => {
      return html `
        <div class="info-container">
          <div class="photo-container" style="background-image: url('${imagePath}');"></div>
          <div>
            <div class="company-container">
              <span class="title-job">${title}</span>
              <span class="company">${company}</span>
              <span class="company-time">${time}</span>
              <span class="company-time">${address}</span>
            </div>
            <p class="company description">${description}</p>
          </div>
          </div>
      `;
    });
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html `
      ${this._experiences(this.experienceInformation)}
    `;
  }
}

customElements.define('my-experience', MyExperience);
