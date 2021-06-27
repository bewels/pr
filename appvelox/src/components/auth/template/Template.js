import React from 'react';

import './template.scss';

const Template = ({children, title, description, imgUrl}) => {

    return (
        <div className="auth-wrapper">
            <div className="auth">
                <header className="header">
                    <span className="logo">Портал пациента</span>
                    <a href="#" className="vfvi"><i className="bi bi-eye" /> Версия для слабовидящих</a>
                </header>
                {children}
            </div>
            <div className="greating-wrapper">
                <h2>{title}</h2>
                <img src={`img/frame/${imgUrl}`} alt="Врачи"/>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default Template;