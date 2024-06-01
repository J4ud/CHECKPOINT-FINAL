import { vinyl } from '../../types/vinyl';
import { addProduct, getProduct } from '../../services/firebase';

const formData: Omit<vinyl, 'id'> = {
	name: '',
	price: 0,
	artist: '',
	stock: 0,
	img: '',
};
// <vinylCard></vinylCard>
class vinylCard extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}

	changeName(e: any) {
		console.log(e.target.value);
		formData.name = e?.target?.value;
	}

	changePrice(e: any) {
		console.log(e.target.value);
		formData.price = e?.target?.value;
	}
	changeStock(e: any) {
		console.log(e.target.value);
		formData.stock = e?.target?.value;
	}
	changeImg(e: any) {
		console.log(e.target.value);
		formData.img = e?.target?.value;
	}
	changeArtist(e: any) {
		console.log(e.target.value);
		formData.artist = e?.target?.value;
	}

	submitForm() {
		addProduct(formData);
	}

	async render() {
		const vinyls = await getProduct();
		vinyls.forEach((prod: vinyl) => {
			const container = this.ownerDocument.createElement('section');

			const name = this.ownerDocument.createElement('h3');
			name.innerText = prod.name;
			container.appendChild(name);

			const artist = this.ownerDocument.createElement('h3');
			name.innerText = prod.artist;
			container.appendChild(artist);

			const price = this.ownerDocument.createElement('h3');
			price.innerText = String(prod.price);
			container.appendChild(price);

			const stock = this.ownerDocument.createElement('h3');
			price.innerText = String(prod.stock);
			container.appendChild(stock);
			const img = this.ownerDocument.createElement('h3');
			price.innerText = String(prod.img);
			container.appendChild(img);
			this.shadowRoot?.appendChild(container);
		});
	}
}
window.customElements.define('vinyl-card', vinylCard);
export default vinylCard;
