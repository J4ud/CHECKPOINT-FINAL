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
class VinylForm extends HTMLElement {
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

	render() {
		const addCont = this.ownerDocument.createElement('div');
		const tittle = this.ownerDocument.createElement('title');

		const pName = this.ownerDocument.createElement('input');
		pName.placeholder = 'Nombre del vinilo';
		pName.addEventListener('change', this.changeName);
		this.shadowRoot?.appendChild(pName);

		const artName = this.ownerDocument.createElement('input');
		artName.placeholder = 'Nombre del artista';
		artName.addEventListener('change', this.changeArtist);
		this.shadowRoot?.appendChild(artName);

		const pPrice = this.ownerDocument.createElement('input');
		pPrice.placeholder = 'Precio del vinilo';
		pPrice.addEventListener('change', this.changePrice);
		this.shadowRoot?.appendChild(pPrice);

		const pStock = this.ownerDocument.createElement('input');
		pStock.placeholder = 'Unidades en stock';
		pStock.addEventListener('change', this.changeStock);
		this.shadowRoot?.appendChild(pStock);

		const img = this.ownerDocument.createElement('input');
		img.placeholder = 'Link de la imagen';
		img.addEventListener('change', this.changeImg);
		this.shadowRoot?.appendChild(img);

		const save = this.ownerDocument.createElement('button');
		save.innerText = 'Guardar producto';
		save.addEventListener('click', this.submitForm);
		this.shadowRoot?.appendChild(save);
	}
}

window.customElements.define('vinyl-form', VinylForm);
export default VinylForm;
