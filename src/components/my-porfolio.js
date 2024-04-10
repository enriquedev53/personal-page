import { LitElement, html, css } from 'lit-element';

/**
 * <main-component> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class MyPortfolio extends LitElement {

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
      display: flex;
      flex-wrap: wrap;
      /* position: absolute; */
      width: 768px;
      background-color: var(--bg-aside, white);
      border-radius: 20px;
      gap: var(--gap-aside, 20px);
      padding: var(--padding-aside, 16px);
      /* min-width: var(--min-width-aside, 300px);
      max-width: var(--min-width-aside, 600px); */
      /* margin-top: 450px; */
    }

    article {
      --img-scale: 1.001;
      --title-color: black;
      --link-icon-translate: -20px;
      --link-icon-opacity: 0;
      position: relative;
      border-radius: 16px;
      box-shadow: none;
      width: 240px;
      background: #fff;
      transform-origin: center;
      transition: all 0.4s ease-in-out;
      overflow: hidden;
    }

    article a::after {
      position: absolute;
      inset-block: 0;
      inset-inline: 0;
      cursor: pointer;
      content: "";
    }

    /* basic article elements styling */
    article h2 {
      margin: 0 0 18px 0;
      /* font-family: "Bebas Neue", cursive;
      font-size: 1.9rem;
      letter-spacing: 0.06em; */
      color: var(--title-color);
      transition: color 0.3s ease-out;
    }

    figure {
      margin: 0;
      padding: 0;
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }

    article img {
      max-width: 100%;
      transform-origin: center;
      transform: scale(var(--img-scale));
      transition: transform 0.4s ease-in-out;
    }

    .article-body {
      padding: 24px;
    }

    article a {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      color: #28666e;
    }

    article a:focus {
      outline: 1px dotted #28666e;
    }

    article a .icon {
      min-width: 24px;
      width: 24px;
      height: 24px;
      margin-left: 5px;
      transform: translateX(var(--link-icon-translate));
      opacity: var(--link-icon-opacity);
      transition: all 0.3s;
    }

    /* using the has() relational pseudo selector to update our custom properties */
    article:has(:hover, :focus) {
      --img-scale: 1.1;
      --title-color: #28666e;
      --link-icon-translate: 0;
      --link-icon-opacity: 1;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }


    /************************ 
    Generic layout (demo looks)
    **************************/


    .articles {
      display: grid;
      max-width: 1200px;
      margin-inline: auto;
      padding-inline: 24px;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }

    .sr-only:not(:focus):not(:active) {
      clip: rect(0 0 0 0); 
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap; 
      width: 1px;
    }
  `];
  }

  static get properties() {
    return {
      arrayProjects: {
        type: String,
        attribute: 'array-projects'
      }
    };
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();
    this.arrayProjects = '';
  }

  handleProjects() {
    return html `
      ${this.arrayProjects.map(({title, description, img, href}) => html`
        <article>
          <div class="article-wrapper">
            <figure>
              <img src=${img} alt="" />
            </figure>
            <div class="article-body">
              <h2>${title}</h2>
              <p>${description}</p>
              <a href=${href} target="_blank" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      `)}
    `;
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html `
      <section class="container">
        ${this.handleProjects()}
      </section>
    `;
  }
}

customElements.define('my-portfolio', MyPortfolio);
