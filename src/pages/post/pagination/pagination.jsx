import React from 'react';
import './pagination.sass';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import TagList from './../../../components/tag-list/tag-list.jsx';

let nextArticle = {
	link: '/',
	name: 'Постхоррор, политический баттл и кошмар среди бела дня: как фильмы ужасов изменились за последние годы'
};

let prevArticle = {
	link: '/',
	name: 'Разум Канта, внешнее Фрейда и нечеловеческая субъективность Гуссерля.'
};

function formatString(str){
    return str.substr(0, 20) + '...'
}

export default function Pagination({ className }) {
	return (
		<div className={classnames('pagination', className)}>
            <TagList className='pagination__tag-list'/>
			<div className="pagination__controls">
				<Link to={prevArticle.link} className="pagination__prev">
                    <h4 className="pagination__title">{
                    formatString(prevArticle.name)}</h4>
					<p className="pagination__info">предыдущий</p>
				</Link>
				<Link to={nextArticle.link} className="pagination__next">
                    <h4 className="pagination__title">{
                     formatString(nextArticle.name)}</h4>
					<p className="pagination__info">следующий</p>
				</Link>
			</div>
		</div>
	);
}
