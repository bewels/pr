import React from 'react';
import MainTemplate from './mainTemplate/MainTemplate';

const Main = () => {
	return (
		<MainTemplate title={'Главная'}>
			<div className="main-page">
				<h1>Appvelox</h1>
				<span>Добро пожаловать!</span>
			</div>
		</MainTemplate>
	);
};

export default Main;