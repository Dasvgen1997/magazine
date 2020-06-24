import React from 'react';
import './App.sass';
import { connect } from 'react-redux';
import Header from './modules/header/header.jsx';

import back1 from './files/img/back1.jpg';
import back2 from './files/img/back2.jpg';
import back3 from './files/img/back3.jpg';

import Router from './router.jsx';

let imgsArray = [back1, back2, back3];




function App({ backImg }) {
	return (
		<div style={{ backgroundImage: `url(${imgsArray[backImg]})` }} className="App">
			<Header />
			<Router/>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		backImg: state.ui.backImg
	};
}

export default connect(mapStateToProps, null)(App);
