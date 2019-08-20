import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux'; // Conector de los Reducers con el componente
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Tabla from './Tabla';

import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {
    /* 
    constructor() {
		super();
		this.state = {
			usuarios: []
		}
	}
    */
     
    componentDidMount() {
		// const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
		// this.setState({
		// 	usuarios: respuesta.data
		// });
		
		//Evita que se vuelva a consulta el endpoint de los usuarios
        if(!this.props.usuarios.length){
			this.props.traerTodos();
		}
        
    }
    
    ponerContenido = () => {
		if (this.props.cargando) {
			return <Spinner />;
        }
        if (this.props.error) {
			return <Fatal mensaje={ this.props.error } />;
        }
		return (
			<Tabla />
		)
	};
    
	/* ponerFilas = () => this.props.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	)); */

	render() {
        //console.log(this.props.cargando);
        //console.log(this.props.error);
		return (
			<div>
				<h1>Usuarios</h1>
				{ this.ponerContenido() }
			</div>
		)
	}
};

// Función que define que Reducers se le entrega a el componente.
const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);