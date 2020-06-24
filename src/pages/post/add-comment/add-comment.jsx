import React, { useState } from 'react';
import './add-comment.sass';
import classnames from 'classnames';

export default function AddComment({ className }) {
	let [ message, setMessage ] = useState('');
	let [ name, setName ] = useState('');
	let [ email, setEmail ] = useState('');

	function submitHadnler(e){
		e.preventDefault()
	}

	return (
		<div className={classnames('add-comment', className)}>
			<div className="add-comment__section-title">
				<span className="icon-right-dir" />
				<span>Добавить комментарий</span>
			</div>
			<form 
			onSubmit={submitHadnler}
			className="add-comment__form">
				<p>Ваш электронный адрес не будет опубликован. Обязательные поля помечены *</p>
				<div className="add-comment__form-field-wrap">
					<textarea
						required
						placeholder="Ваш комментарий...*"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className="add-comment__textarea"
					/>
				</div>
				<div className="add-comment__flex">
					<div className="add-comment__form-field-wrap">
						<input
							type="text"
							placeholder="Ваше имя*"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="add-comment__form-field-wrap">
						<input
							type="email"
							placeholder="Ваш Email*"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
				</div>
				<button className="add-comment__submit">Отправить</button>
			</form>
		</div>
	);
}
