import './screens/export';
import { addObserver, appState } from './store';
import { Screens } from './types/navigation';
import addProduct from './screens/addProducts';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		switch (appState.screen) {
			case Screens.ADDPRODUCTS:
				const addProduct = this.ownerDocument.createElement('add-product');
				this.shadowRoot?.appendChild(addProduct);
				break;

			case Screens.HOME:
				const login = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(login);
				break;

			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
