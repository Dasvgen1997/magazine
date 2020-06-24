import React from 'react';
import './post-category.sass';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export default function PostCategory({ className}) {
	return (
		<Link to='/' className={classnames('post-category', className)}>
			Категория
		</Link>
	);
}
