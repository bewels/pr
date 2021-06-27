import React from 'react';

import './template.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {userExit} from './../../../redux/actions/loginAction'

const MainTemplate = ({children, title, userExit}) => {

    const exit = () => {
        localStorage.removeItem('token');
        
        userExit()
    }

    return (
        <div className="main-wrapper">
            <header className="header">
                <span className="route-name">{title}</span>
                <div className="profile-action">
                    <nav className="profile-nav">
                        <ul className="profile-nav-list">
                            <li className="profile-nav-list-item"><img src="./../img/icon/profile/search.svg" alt="Поиск"/></li>
                            <li className="profile-nav-list-item"><img src="./../img/icon/profile/notifications.svg" alt="Уведомления"/></li>
                            <li className="profile-nav-list-item"><img src="./../img/icon/profile/viewed.svg" alt="Просмотренные"/></li>
                        </ul>
                    </nav>
                    <div className="profile">
                        <div className="avatar">
                            <img src="./../img/moks.png" alt="Ваше фото"/>
                        </div>
                        <div className="menu">
                            <img src="./../img/icon/profile/arrow.svg" alt="Меню"/>

                            <div className="drop-down">
                                <ul className="drop-down-list">
                                    <li className="drop-down-list-item">Профиль</li>
                                    <li className="drop-down-list-item">Мои записи</li>
                                    <li className="drop-down-list-item">Настройки</li>
                                    <li onClick={exit} className="drop-down-list-item">Выход</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                {children}
            </main>
            <aside className="aside">
                <nav className="nav">
                    <div className="logo">
                        Логотип
                    </div>
                    <div className="nav-list">
                        <NavLink to="/profile" className="nav-list-item">
                            <div className="icon">
                                <img src="./../img/icon/heart.svg" alt="Профиль"/>    
                            </div>
                            &nbsp;
                            Профиль
                        </NavLink>
                        <NavLink to="/doctors" className="nav-list-item">
                            <div className="icon">
                                <img src="./../img/icon/doctor.svg" alt="Врачи"/>  
                            </div>
                            &nbsp;
                            Врачи и клиники
                        </NavLink>
                        <NavLink to="/massage" className="nav-list-item">
                            <div className="icon">
                                <img src="./../img/icon/massage.svg" alt="Сообщения"/>
                            </div>
                            &nbsp;
                            Сообщения
                        </NavLink>
                        <NavLink to="/tests" className="nav-list-item">
                            <div className="icon">
                                <img src="./../img/icon/test.svg" alt="Тестирование"/>
                            </div>
                            &nbsp;
                            Тестирование
                        </NavLink>
                        <NavLink to="info" className="nav-list-item">
                            <div className="icon">
                                <img src="./../img/icon/info.svg" alt="Информация"/>
                            </div>
                            &nbsp;
                            Полезно знать
                        </NavLink>
                    </div>
                    <button className="btn">Подать заявку</button>
                </nav>
                <div className="bottom-panel">
                    <span className="help"><i className="bi bi-info-circle"></i>&nbsp;Помощь</span>
                    <img className="logotype" src="./../img/logo/logo-white.png" alt="Логотип"/>
                </div>
            </aside>
        </div>
    );
};

const mapDispathToProps = {
    userExit,
};

export default connect(null, mapDispathToProps)(MainTemplate);