import React, { useState } from 'react';
import './header.sass';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import logo from './../../files/img/logo.png';

import MenuBtn from './menu-btn/menu-btn.jsx';
import SearchWindow from './search-window/search-window.jsx';
import MenuWindow from './menu-window/menu-window.jsx';

export default function Header() {
	let [ visibleSearch, setVisibleSearch ] = useState(false);
	let [ visibleMenu, setVisibleMenu ] = useState(false);
	let hideControls = false;

	hideControls = visibleSearch || visibleMenu;
	return (
		<header className="main-header">
			<CSSTransition in={visibleSearch} timeout={300} classNames="node" unmountOnExit>
				<SearchWindow close={() => setVisibleSearch(false)} />
			</CSSTransition>
			<CSSTransition in={visibleMenu} timeout={300} classNames="node" unmountOnExit>
				<MenuWindow close={()=>setVisibleMenu(false)} />
			</CSSTransition>

			

			{hideControls ? null : (
				<button onClick={() => setVisibleSearch(true)} className="main-header__search-btn">
					<span className="icon-search" />
				</button>
			)}

			<Link className="main-header__logo" to="/">
				<img alt="Логотип" src={logo} width="100%" />
			</Link>
			{hideControls ? null : <MenuBtn onClick={() => setVisibleMenu(true)} />}
		</header>
	);
}
