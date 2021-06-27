import React from 'react';

const Representatives = () => {
    return (
        <>
            <span className="massage">Укажите данные вашего представителя (например, член семьи) или иного лица для экстренного информирования</span>
            <input type="text" name="memberSurname" placeholder="Фамилия" required/>
            <input type="text" name="memberName" placeholder="Имя" required/>
            <input type="text" name="memberPatronymic" placeholder="Отчество"/>
            <input type="text" name="memberPhone" placeholder="Телефон"/>
            <button className="submit-btn">Зарегистрироваться</button>   
        </>
    );
};

export default Representatives;