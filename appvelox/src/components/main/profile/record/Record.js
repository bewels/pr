import React from 'react';

const Record = ({info}) => {

    const {date, doctorId: {address, name, surname, patronymic, specialization}, _id} = info;

    const newDate = new Date(date)

    const fullDate = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'full'}).format(newDate);

    const fullTime = new Intl.DateTimeFormat('ru-RU', { timeStyle: 'short'}).format(newDate);

    const fullName = `${surname} ${name[0].toUpperCase()}. ${patronymic[0].toUpperCase()}.`;
    
    return (
        <li className='record-list-item'>
            <div className="info">
                <h3><span>{fullDate[0].toUpperCase() + fullDate.slice(1)}</span>&nbsp;|&nbsp;<span>{fullTime}</span></h3>
                <span className="address">{address}</span>
            </div>
            <div className="doctor-info">
                <div className="doctor">
                    <img src='./../img/moks.png' alt="Доктор"/>      
                    <div>
                        <span className="name">{fullName}</span>
                        <span className="specialty">{specialization}</span>
                    </div>
                </div>
                <button className="btn" data-id={_id}>Отменить</button>
            </div>
        </li>
    );
};

export default Record;