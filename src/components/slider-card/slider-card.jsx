import React from 'react';
import './slider-card.sass';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PostCategory from '../post-elements/post-category/post-category.jsx';
import PostCreated from '../post-elements/post-created/post-created.jsx';

export default function SliderCard({ className }) {
	return (
		<section className={classnames('slider-card', className)}>
			<Link
				style={{
					backgroundImage: `url(${'https://www.starobserver.com.au/wp-content/uploads/2016/08/The-Last-of-Us%E2%84%A2-Remastered_20140803111218.jpg'})`
				}}
				className="slider-card__img-link"
				to="/sa"
			>
				<div className="slider-card__filter" />
			</Link>
			<div className="slider-card__content">
				<div className="slider-card__flex">
					<PostCategory className="slider-card__category" text="философия" />
					<PostCreated />
				</div>

				<Link className="slider-card__name">Название это статьи должно быть определёенной</Link>
			</div>
		</section>
	);
}
