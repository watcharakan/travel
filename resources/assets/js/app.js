
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  {BrowserRouter,Route,Switch} from 'react-router-dom'; 
import reducers from './reducers';
import promise from 'redux-promise';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<App />
	</Provider>

	, document.querySelector('.container-wrapper'));
registerServiceWorker();
