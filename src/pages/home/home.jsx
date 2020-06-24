import React from 'react';
import './home.sass';
import { Helmet } from 'react-helmet';

import Slider from './slider/slider.jsx';
import Grid from './grid/grid.jsx';



function Home() {
	return (
		<div className="home-page">
			<Helmet>
				<title>Главная</title>
			</Helmet>
            <Slider/>
			<Grid/>
		</div>
	);
}

export default Home;
