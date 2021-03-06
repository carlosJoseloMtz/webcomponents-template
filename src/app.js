import {setupRoutes} from './routes.js'

const applicationTemplate = document.createElement('div')
applicationTemplate.innerHTML = `
  <div class="page-wrapper"></div>
`

class Application extends HTMLElement {

  constructor () {
    super()
  }

  connectedCallback () {
    this.appendChild(applicationTemplate.cloneNode(true))
    const pageWrapper = this.querySelector('.page-wrapper')
    setupRoutes(pageWrapper)
  }
}

customElements.define('pwa-ecommerce', Application)
