// <header></header>
class screenMenu extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	render() {
		const menu = this.ownerDocument.createElement('div');
		const home = this.ownerDocument.createElement('button');
		const addProducts = this.ownerDocument.createElement('button');
		const modProducts = this.ownerDocument.createElement('button');
		home.innerText = 'HOME';
		addProducts.innerText = 'ADD';
		modProducts.innerText = 'MOD';

		menu.appendChild(home);
		menu.appendChild(addProducts);
		menu.appendChild(modProducts);

		this.shadowRoot?.appendChild(menu);
	}
}

window.customElements.define('screen-menu', screenMenu);
export default screenMenu;
