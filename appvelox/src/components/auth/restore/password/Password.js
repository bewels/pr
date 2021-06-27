import React from 'react';
import Template from '../../template/Template';

import './password.scss'

const Password = () => {
    return (
        <Template imgUrl="frame-log.png" title="Добро пожаловать!" description="Вместе с нами медицина стала проще!">
            <section className="section-restore">
                <h2>Восстановление пароля</h2>
                <span className="sub-title">Придумайте новый пароль</span>
                <form className="form-restore-password">
                    <input 
                        placeholder="Пароль" 
                        name="password" 
                        type="password" 
                        required
                    />
                    <input 
                        placeholder="Повторите парольль" 
                        name="confirm" 
                        type="password" 
                        required
                    />
                    <button type="submit" className="submit-btn">Восстановить</button>
                </form>
                <img className="logotype" src="./img/logo/logo.png" alt="Логотип"/>
            </section>
        </Template>
    );
};

export default Password;