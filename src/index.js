import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App';

import AppComponent from './components/Main'

let store = createStore(todoApp)


// Render the main component into the dom
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	,
	document.getElementById('app'));
