import React from 'react';

import './registerSucces.scss';
import { useHistory } from 'react-router-dom';

const RegisteSucces = () => {
    const history = useHistory()
    return (
        <div className="succes-wrapper">
            <div className="succes">
                <header className="header">
                    <span className="logo">Портал пациента</span>
                </header>
                <h2>Вы успешно <br />зарегистрировались!</h2>
                <span onClick={() => history.push('/login')}>Давайте приступим</span>
                <img src=".././img/frame/frame-auth.png" alt="Врач"/>
                <img className="logotype" src="../img/logo/logo-white.png" alt="Логотип"/>
            </div>
        </div>
    );
};

export default RegisteSucces;