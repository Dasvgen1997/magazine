import React from 'react';
import './post-counter.sass';
import classnames from 'classnames';

export default function PostCounter({ className }) {
	return (
		<div className={classnames('post-counter', className)}>
			<p className="icon-comment post-counter__comment">
				<span>12</span>
			</p>
			<p className="icon-eye post-counter__eye">
				<span>12</span>
			</p>
		</div>
	);
}
