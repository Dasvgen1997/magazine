import React, { useState } from 'react';
import './contacts.sass';
import { Helmet } from 'react-helmet';

export default function Contacts() {
	let [ message, setMessage ] = useState('');
	let [ name, setName ] = useState('');
	let [ email, setEmail ] = useState('');

	function submitHandler(e) {
		e.preventDefault();
	}

	return (
		<div className="contacts-page">
			<Helmet>
				<title>Контакты</title>
			</Helmet>

			<div className="contacts-page__title-layout">
				<div className="contacts-page__title-filter">
					<h1 className="contacts-page__title-text">Контакты</h1>
				</div>
			</div>

			<div className="contacts-page__content-section">
				<div className="contacts-page__info-section">
					<h3 className="contacts-page__info-title">Наши адреса:</h3>
					<div className="contacts-page__info-flex">
						<div className="contacts-page__info-place">
							<h3 className="contacts-page__info-subtitle">Московская редакция</h3>
							<ul className="contacts-page__info-list">
								<li>ул. Ленина 12</li>
								<li>+1-(234)-567-890</li>
							</ul>
						</div>
						<div className="contacts-page__info-email">
							<h3 className="contacts-page__info-subtitle">Email</h3>
							<ul className="contacts-page__info-list">
								<li>dasvgen@gmail</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="contacts-page__form-section">
					<div className="contacts-page__form-title">
						<span className="icon-right-dir" />
						<span>Напишите нам</span>
					</div>
					<form onSubmit={submitHandler} className="contacts-page__form">
						<div className="contacts-page__form-field-wrap">
							<textarea
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Сообщение..."
							/>
						</div>
						<div className="contacts-page__form-flex">
							<div className="contacts-page__form-field-wrap">
								<input
									name="email"
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
								/>
							</div>
							<div className="contacts-page__form-field-wrap">
								<input
									name="name"
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Имя"
								/>
							</div>
						</div>
						<button type="submit" className="contacts-page__form-submit">
							Отправить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
