import React from 'react';
import './menu-window.sass';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import FullscreenWindow from './../../../components/fullscreen-window/fullscreen-window.jsx';

export default function MenuWindow({ className, close }) {
	return (
		<FullscreenWindow close={close}>
			<div className={classnames('menu-window', className)}>
				<ul onClick={close} className="menu-window__menu-list">
					<li>
						<NavLink exact activeClassName='menu-window__active' to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink activeClassName='menu-window__active' to="/contacts">Контакты</NavLink>
					</li>
                    <li>
						<NavLink activeClassName='menu-window__active' to="/about">О нас</NavLink>
					</li>
					<li>
						<NavLink activeClassName='menu-window__active' to="/post/text">Пост тест</NavLink>
					</li>
					<li>
						<NavLink activeClassName='menu-window__active' to="/author/text">Автор тест</NavLink>
					</li>
				</ul>
			</div>
		</FullscreenWindow>
	);
}
