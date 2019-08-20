import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/iconos.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux'; //Para crea el almacenamiento
import { Provider } from 'react-redux'; //Para proveer la comunicación entre componentes
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

//Crea el almacenamiento
const store = createStore(
	reducers, // Todos los Reducers
    {}, // Estado inicial
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);