import React from 'react';
import './post-created.sass';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function PostCreated({ className }) {
	return (
		<div className={classnames('post-created', className)}>
			<Link> &nbsp; Alex Mea &nbsp;</Link>
			&nbsp; /
			<Link>&nbsp; 5 дней назад &nbsp;</Link>
		</div>
	);
}
