

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
 

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
	render() {
		const { user, signOut, signInWithGoogle } = this.props;

		return (
			<div>
				{user ? <p className="Hola">Hola, {user.displayName}</p> : <p></p>}

				{user ? (
					<button className="Boton" onClick={signOut}>Cerrar sesión</button>
				) : (
					<button className="Boton" onClick={signInWithGoogle}>Ingrese con una cuenta google</button>
				)}
			</div>
		);
	}
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Login);