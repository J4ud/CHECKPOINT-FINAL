import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { vinyl } from '../types/vinyl';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
	apiKey: 'AIzaSyDh92aZrtNHcinugRA5FxHjQ7SVAvtHL1k',
	authDomain: 'jaud-is-dead.firebaseapp.com',
	projectId: 'jaud-is-dead',
	storageBucket: 'jaud-is-dead.appspot.com',
	messagingSenderId: '489824330433',
	appId: '1:489824330433:web:ae7ef945e16a845fe8ea40',
	measurementId: 'G-Y3DYENY557',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addProduct = async (formData: Omit<vinyl, 'id'>) => {
	// Agregar datos
	try {
		const docRef = await addDoc(collection(db, 'vinyls'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getProduct = async () => {
	const querySnapshot = await getDocs(collection(db, 'vinyls'));
	const arrayProducts: Array<vinyl> = [];
	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};
// Obtener datos
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.data());
// });
