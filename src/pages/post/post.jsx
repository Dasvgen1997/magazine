import React from 'react';
import './post.sass';

import PostCategory from './../../components/post-elements/post-category/post-category.jsx';
import PostCreated from './../../components/post-elements/post-created/post-created.jsx';
import PostCounter from './../../components/post-elements/post-counter/post-counter.jsx';

import Pagination from './pagination/pagination.jsx';
import AddComment from './add-comment/add-comment.jsx';
import CommentList from './comment-list/comment-list.jsx';
import AuthorCard from './../../components/author-card/author-card.jsx';

function Post() {
	return (
		<section className="post-page">
			<div className='post-page__banner'>
				<img src='https://knife.media/wp-content/uploads/2020/04/1-3-1024x683.jpg' />
			</div>
			<div className="post-page__info">
				<PostCategory className='post-page__category' />
				<div className="post-page__flex">
					<PostCreated className="post-page__created" />
					<PostCounter className="post-page__counter" />
				</div>
			</div>
			<h3 className="post-page__title">Разум Канта, внешнее Фрейда и нечеловеческая субъективность Гуссерля.</h3>

			<div className="post-page__content">
				<h3>Кант: философия — наука о внутреннем</h3>
				<p>
					В европейской философии впервые вопрос о человеке поставил Кант во введении к «Логике». Что значит
					поставить вопрос? Это значит спросить себя: что есть человек не в связи с Богом, не в природе, а сам
					по себе. Чтобы спросить о человеке самом по себе, Канту потребовалось отличить школьное понятие
					философии от мирового. Отличив их, Кант скажет: философия есть наука о «внутреннем принципе выбора
					между разными целями».
				</p>

				<img src="https://knife.media/wp-content/uploads/2020/06/Pandemiya_i_soczialnyi_reiting_3-1024x717.jpg" />

				<h3>Человек — единственное существо в мире, которое научилось относиться к самому себе.</h3>
				<p>
					Мыслить — значит воображать. Как это стало возможно? Очень просто. Благодаря тому, что однажды
					взорвались галлюцинации и человек узнал себя в наскальной живописи. Человек рожден ни трудом, ни
					природой, ни обществом. Он рожден взрывом галлюцинаций. Что такое галлюцинации? Галлюцинации — то
					место, где заканчивается природа и начинается человеческое. Что значит взрыв? Это значит, что
					вопреки законам эволюции человек «выбрал» не жизнь в природе, а свои грезы, и поэтому его жизнь
					стала иной. Она подчинена до конца дней его образам, речи, мысли. Все его желания подчинены воле,
					соотношению того, что он хочет, с тем, что он может. У природы нет никакой надобности в воле.
				</p>
				<img src="https://knife.media/wp-content/uploads/2020/06/Pandemiya_i_soczialnyi_reiting_22-1024x717.jpg" />
			</div>

			<Pagination className='author-page__pagination' />
			<AuthorCard link className='author-page__author' />
			<AddComment className='author-page__add-comment' />
		</section>
	);
}

export default Post;
