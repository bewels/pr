import React from 'react';

const ElectronicCard = () => {
    return (
        <div className="electronic-section">
            <span className="title">Электронная карта</span>
            <div className="electronic-card">
                <div className="card">
                    <div className="card-logo">
                        <img  src="./../img/icon/profile/info.svg" alt="Информация"/>
                    </div>
                    <div className="card-info">
                        <h2>Информация о пациенте</h2>
                        <ul className="card-list">
                            <li className="card-list-item">Ваши личные данные</li>
                            <li className="card-list-item">Рекомендации врачей</li>
                            <li className="card-list-item">История болезней</li>
                        </ul>   
                    </div>
                </div>
                <div className="card">
                    <div className="card-logo">
                        <img  src="./../img/icon/profile/result.svg" alt="Результаты"/>
                    </div>
                    <div className="card-info">
                        <h2>Результаты анализов</h2>
                        <span className="description">
                            Вы можете узнать здесь результаты своих анализов
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-logo">
                        <img  src="./../img/icon/profile/addInfo.svg" alt="Добавить"/>
                    </div>
                    <div className="card-info">
                        <h2>Добавить  информацию</h2>
                        <span className="description">
                            Добавляйте в свою электронную медицинскую карту новые данные
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-logo">
                        <img  src="./../img/icon/profile/history.svg" alt="История"/>
                    </div>
                    <div className="card-info">
                        <h2>История приемов</h2>
                        <span className="description">
                            Вся информация о полученных услугах за все время хранится здесь
                        </span>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default ElectronicCard;