import React from 'react';
import './grid-card.sass';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PostCategory from '../post-elements/post-category/post-category.jsx';
import PostCreated from '../post-elements/post-created/post-created.jsx';
import PostCounter from '../post-elements/post-counter/post-counter.jsx';

export default function GridCard({ className, large }) {
	let text = (
		<p className="grid-card__text">
			История четырёх семей, живущих спокойной и размеренной жизнью в маленьком немецком городке.
		</p>
	);

	return (
		<div className={classnames('grid-card', className)}>
			<Link
				style={{
					backgroundImage: `url(${'https://avatars.mds.yandex.net/get-zen_doc/1923220/pub_5d4a9fa823371c00afdccc1d_5d93383f78125e00b10f3349/scale_1200'})`
				}}
				className="grid-card__img-link"
				to="/sa"
			/>
			<div className="grid-card__content">
				<div className="grid-card__flex">
					<PostCategory className="grid-card__category" text="Музыка" />
					<PostCreated  />
				</div>
				<Link to="/" className="grid-card__name">
					История четырёх семей
				</Link>
				{large ? text : null}
				<PostCounter />
			</div>
		</div>
	);
}
