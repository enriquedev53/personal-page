import { LitElement, html, css } from 'lit-element';

/**
 * <header-component> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class HeaderComponent extends LitElement {
  /**
   * The styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return [css`
      .header-container {
        background: #022950;
        padding: 12px 0;
        margin-bottom: 10px;
      }

      .header {
        max-width: 80%;
        display: flex;
        justify-content: space-between;
        font-weight: 300;
        margin: 0 auto;
        color: #d6d4d4;
      }

      .ocultar {
        display: none;
      }

      .nav-container {
        display: flex;
        width: 60%;
        align-items: center;
        justify-content: space-between;
      }

      .social-container {
        gap: 12px;
        width: 40%;
        display: flex;
        justify-content: end;
      }

      @media (900px <= width < 1008px) {
        .header {
          max-width: 85%;
        }
      }

      @media (722px <= width < 900px) {
        .header {
          max-width: 90%;
        }

        .nav-container {
          width: 70%;
        }

        .social-container {
          gap: 8px;
          width: 30%;
        }
      }

      @media (520px <= width < 722px) {
        .header {
          max-width: 90%;
        }

        .nav-container {
          width: 100%;
        }

        .social-container {
          display: none;
        }
        
      }

      @media(width < 520px) { 
        .nav-container,
        .social-container {
          display: none;
        }
        
        .ocultar {
          display: block;
        }
      }

      .nav-option {
        trasition: background-color 2s ease-out;
      }

      .nav-option:hover {
        color: white;
        cursor: pointer;
      }

      .social-logo:hover {
        color: white;
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
    return html`
      <div class="header-container">
        <header class="header">
          <nav class="nav-container">
            <svg width="80" height="30" viewBox="0 0 264.00000000000006 86.61972381420698" class="gold-icon"><defs id="SvgjsDefs5638"><linearGradient id="SvgjsLinearGradient5643"><stop id="SvgjsStop5644" stop-color="#b88746" offset="0"></stop><stop id="SvgjsStop5645" stop-color="#fdf5a6" offset="1"></stop></linearGradient></defs><g id="SvgjsG5639" featurekey="1p4tPl-0" transform="matrix(0.30959607129896655,0,0,0.30959607129896655,-2.1699588094077535,-2.200299239748251)" fill="url(#SvgjsLinearGradient5643)"><g xmlns="http://www.w3.org/2000/svg"><polygon points="248.189,155.77 57.009,155.77 94.009,192.77 285.189,192.77  "></polygon><polygon points="107.009,205.77 144.009,242.77 335.199,242.77 298.199,205.77  "></polygon><polygon points="614.765,105.77 614.414,105.77 564.685,105.77 433.372,237.074 302.059,105.77 252.329,105.77 251.979,105.77    7.009,105.77 44.009,142.77 288.979,142.77 433.099,286.89 433.372,286.617 433.645,286.89 577.765,142.77 822.733,142.77    859.733,105.77  "></polygon><polygon points="581.554,192.77 772.733,192.77 809.733,155.77 618.554,155.77  "></polygon><polygon points="531.544,242.77 722.733,242.77 759.733,205.77 568.544,205.77  "></polygon><path d="M325.302,71.599c0,29.897,24.322,54.22,54.218,54.22c11.13,0,21.702-3.305,30.772-9.589l23.017,24.114l23.415-24.529   c9.124,6.472,20.14,10.004,31.362,10.004c29.897,0,54.221-24.323,54.221-54.22c0-12.127-4.07-23.857-11.521-33.372l29.705-31.12   c0,0-94.786,22.387-127.176,30.714C401.203,29.566,306.14,7.107,306.14,7.107l30.245,31.689   C329.217,48.207,325.302,59.736,325.302,71.599z M515.371,54.375c3.237,5.127,4.988,11.115,4.988,17.223   c0,17.798-14.478,32.278-32.273,32.278c-5.669,0-11.112-1.445-15.949-4.208L515.371,54.375z M351.854,55.003l42.964,45.015   c-4.682,2.534-9.9,3.858-15.298,3.858c-17.794,0-32.271-14.48-32.271-32.278C347.249,65.667,348.831,60.001,351.854,55.003z"></path></g></g><g id="SvgjsG5640" featurekey="dYASrj-0" transform="matrix(1,0,0,1,132,107)" fill="#ffffff"><path d=""></path></g></svg>
            <span class="nav-option">About Me</span>
            <span class="nav-option">Experience</span>
            <span class="nav-option">Career</span>
            <span class="nav-option">Contact Me</span>
          </nav>
          <nav class="social-container">
            <svg class="social-logo" fill="currentcolor" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>social-logo</title><path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path></svg>
            <svg class="social-logo" fill="currentcolor" width="30px" height="30px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-instagram" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"></path></g></svg>
          </nav>
          <h1 class="ocultar">Mobile Header</h1>
        </header>
      </div>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
