import React, { useState } from 'react';
import { connect } from 'react-redux';
import { regChange } from '../../../../redux/actions/regAction';
const PersonalData = ({regChange}) => {
    const [value, setValue] = useState({sex: true, dateBrih: ''});
    const changeHandler = (e) =>{
        if(e.target){
            setValue({...value, [e.target.name]: e.target.value});
        }
    }
    return (
        <>
            <input type="text" name="surname" placeholder="Фамилия" required/>
            <input type="text" name="name" placeholder="Имя" required/>
            <input type="text" name="patronymic" placeholder="Отчество"/>
            <div className="sex">
                <span className="label">Пол:</span>
                <input onChange={changeHandler} name="sex" value={true} id="male" type="radio" required />
                <label htmlFor="male">М</label>
                <input onChange={changeHandler} name="sex" value={false} id="female" type="radio" required/>
                <label htmlFor="female">Ж</label>
                <input onChange={changeHandler} type="date" name="dateBrih" className="date" required/>
            </div>
            <input type="text" name="registrationAddress" placeholder="Адрес регистрации"/>
            <input type="text" name="mainAddress" placeholder="Адрес проживания" />
            <button onClick={() => regChange(value)} className="submit-btn">Далее</button> 
        </>
    );
};

const mapDispathToprops = {
    regChange
}

export default connect(null, mapDispathToprops)(PersonalData);