import React, { useState } from 'react';
import './side-bar.sass';
import classnames from 'classnames';

import logoImg from './../../../files/img/logo.png';

import TagList from './../../../components/tag-list/tag-list.jsx';

function BlockWrap({ className, children, title }) {
	return (
		<div className={classnames('side-bar__block-wrap', className)}>
			<div className="side-bar__block-wrap-title">
				<span className="icon-right-dir" />
				<span>{title}</span>
			</div>

			{children}
		</div>
	);
}

export default function SideBar({ className }) {
	let [ email, setEmail ] = useState('');

	function subscribeHandler(e) {
		e.preventDefault();
	}

	return (
		<div className={classnames('side-bar', className)}>
			<form onSubmit={subscribeHandler} className="side-bar__subscribe-form">
				<img src={logoImg} />
				<div className="side-bar__field-wrap">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Введите ваш email..."
					/>
				</div>
				<button className="side-bar__subscribe-submit" type="submit">
					Подписаться
				</button>
			</form>

			<BlockWrap className='side-bar__tag-cloud' title="Теги">
				<TagList />
			</BlockWrap>

            <BlockWrap className='side-bar__latest' title="Последние">
				йцвйцв
			</BlockWrap>
		</div>
	);
}
