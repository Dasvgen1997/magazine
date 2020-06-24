import React, { useState } from 'react';
import './search-window.sass';
import classnames from 'classnames';

import FullscreenWindow from './../../../components/fullscreen-window/fullscreen-window.jsx';

export default function SearchWindow({ className, close }) {
	let [ value, setValue ] = useState('');

	function submitHandler(e) {
		e.preventDefault();
	}

	return (
		<FullscreenWindow close={close}>
			<form onSubmit={submitHandler} className={classnames('search-window', className)}>
				<label className="search-window__flex">
					<input
						className="search-window__input"
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder="Поиск_"
					/>
					<button className="search-window__btn">
						<span className="icon-search" />
					</button>
				</label>
				<div className="search-window__line" />
			</form>
		</FullscreenWindow>
	);
}
