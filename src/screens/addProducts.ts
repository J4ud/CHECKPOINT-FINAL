import '../components/export';
import { VinylForm } from '../components/export';
import VHeader from '../components/header/header';
import screenMenu from '../components/screenMenu/screenMenu';

class addProduct extends HTMLElement {
	vinylForm: VinylForm;
	vheader: VHeader;
	screenmenu: screenMenu;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		this.vinylForm = new VinylForm();
		this.vheader = new VHeader();
		this.screenmenu = new screenMenu();
		this.render;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const banner = this.ownerDocument.createElement('v-header');
		const menu = this.ownerDocument.createElement('screen-menu');
		const VinylForm = this.ownerDocument.createElement('vinyl-form');
		this.shadowRoot?.appendChild(banner);
		this.shadowRoot?.appendChild(menu);
		this.shadowRoot?.appendChild(VinylForm);
	}
}

customElements.define('add-product', addProduct);
export default addProduct;
