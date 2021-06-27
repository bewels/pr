import React, { useState } from 'react';



const Doctor = ({info, createRecord}) => {
    
    const [date, setDate] = useState('');

    const nowDate = new Date();

    const {name, surname, patronymic, address, specialization, _id} = info;

    const fullName = `${surname} ${name[0].toUpperCase()}. ${patronymic[0].toUpperCase()}.`;

	return (
        <li className="doctors-list-item">
            <span className="address">{address}</span>  
            <form onSubmit={(e) => createRecord(e, date, _id)} className="doctor-info">
                <div className="doctor">
                    <img src='./../img/moks.png' alt="Доктор"/>
                    <div>
                        <span className="name">{fullName}</span>
                        <span className="specialty">{specialization}</span>
                    </div>
                </div>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="datetime-local" min={nowDate} name="date" required/>
                <button className="btn" data-id={_id}>Записаться</button>
            </form>
        </li>
	);
};

export default Doctor;