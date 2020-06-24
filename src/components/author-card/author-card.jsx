import React from 'react';
import './author-card.sass';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function AuthorCard({ className, link }) {
	let name = link ? (
		<Link className="author-card__name link"> Jonas Kahnwald</Link>
	) : (
		<h4 className="author-card__name">Jonas Kahnwald</h4>
	);

	return (
		<div className={classnames('author-card', className)}>
			<img
				className="author-card__avatar"
				src="https://mfst.igromania.ru/wp-content/uploads/2019/07/tma-serial.jpg"
			/>
			<div className="author-card__info">
				{name}
				<p className="author-card__about">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam expedita quibusdam, sit vero
					laboriosam quos veniam temporibus voluptas minima dolorum minus neque repellendus commodi sint saepe
					amet impedit aut repellat.
				</p>

                социалки
			</div>
		</div>
	);
}
