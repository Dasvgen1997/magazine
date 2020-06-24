import React from 'react';
import './menu-btn.sass';
import classnames from 'classnames';

export default function MenuBtn({ className, onClick }) {
	return (
		<div onClick={onClick} className={classnames('menu-btn', className)}>
			<span className="menu-btn__line" /> <span className="menu-btn__line" /> <span className="menu-btn__line" />
		</div>
	);
}
