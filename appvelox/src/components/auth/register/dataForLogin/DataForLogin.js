import React from 'react';

const DataForLogin = () => {
    return (
        <>
            <input type="email" name="email" placeholder="Почта" required/>
            <input type="text" name="number" placeholder="Телефон" required/>
            <input type="password" name="password" placeholder="Пароль" required/>
            <input type="password" name="confirm" placeholder="Повторите пароль" required/>
            <input type="checkbox" id="consent" className="custom-checkbox" required/>
            <label htmlFor="consent">Я согласен на:</label>
            <div className="consent-list">
                <span className="massage">-&nbsp;<span>Обработку персональных данных (ФЗ 152)</span></span>
                <span>-&nbsp;Передачу персональных данных третьим лицам</span>
                <span>-&nbsp;Обращение для информирования и напоминания</span>
            </div>
            <button className="submit-btn">Далее</button>
        </>
    );
};

export default DataForLogin;