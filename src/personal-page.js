import { LitElement, html, css } from '../node_modules/lit-element/lit-element.js';
import { arrayAside, experience, projects } from './data/data.js';
import './components/header-component.js';
import './components/main-component.js';
import './components/aside-multisection.js';
import './components/about-me.js';
import './components/my-porfolio.js';
import './components/my-experience.js';

class PersonalPage extends LitElement {
  static properties = {
    header: { type: String },
    arrayAside: {
      type: Array
    }
  }

  static styles = css`
    *,
    html,
    body {
      box-sizing: border-box;
    }

    main-component,
    about-me,
    my-portfolio {
      display: flex;
      justify-content: end;
    }

    my-experience {
      display: grid;
      justify-content: end;
    }

    /* header-component {
      margin-bottom: 10px; */
    /* } */

    .container {
      display: flex;
      justify-content: center;
      gap: 20px;
      background: #004182;
    } 

    aside-multisection {
      display: flex;
    } 

    .aside-container {
      display: flex;
      gap: 10px;
      flex-direction: column;
    }

    .main-container {
      display: grid;
      gap: 10px;
    }

    .principal-container {
      justify-self: end;
      background-color: var(--bg-aside, white);
      border-radius: 10px;
      padding: var(--padding-aside, 16px);
      width: 800px;
      
    }

    .title {
      font-weight: var(--weight-title-aside, 600);
      font-size: var(--size-title-aside, 18px);
      color: black;
    }

    .section-container {
      color: black;
      /* width: 768px; */
    }

    @media (width <= 1200px) {
        .aside-container {
          display: none;
        }
      }
  `;

  constructor() {
    super();
    this.header = 'My app';
    this.arrayAsideReceive = arrayAside;
  }

  render() {
    return html`
      <header-component></header-component>
      <div class="container">
        <div class="main-container">
          <main-component></main-component>
          <about-me></about-me>
          <my-portfolio .arrayProjects=${projects}></my-portfolio>
          <div class="principal-container">
            <span class="title">Experiencia</span>
            <section class="section-container">
              <my-experience .experienceInformation=${experience}></my-experience>
            </section>
          </div>
        </div>
        <div class="aside-container">
          <aside-multisection></aside-multisection>
        </div>
      </div>
    `;
  }
}

customElements.define('personal-page', PersonalPage);