import Storage, { PersistanceKeys } from '../utils/storage';
import { Actions, AppState, Observer } from '../types/store';
import { reducer } from './reducer';
import { Screens } from '../types/navigation';

const emptyState = {
	screen: Screens.ADDPRODUCTS,
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};
