import React from 'react';
import './page-wrap.sass';
import classnames from 'classnames';

import SideBar from './side-bar/side-bar.jsx';

export default function PageWrap({ className, children, title }) {
	return (
		<div className={classnames('page-wrap', className)}>
			<h2 className="page-wrap__title">{title}</h2>
			<div className="page-wrap__flex">
				<div className="page-wrap__content">{children}</div>
				<SideBar className="page-wrap__side-bar" />
			</div>
		</div>
	);
}
