// <header></header>
class VHeader extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	render() {
		const banner = this.ownerDocument.createElement('header');
		const Vtitle = this.ownerDocument.createElement('h1');
		Vtitle.innerText = 'VINYL STORE';

		banner.appendChild(Vtitle);
		this.shadowRoot?.appendChild(banner);
	}
}

window.customElements.define('v-header', VHeader);
export default VHeader;
