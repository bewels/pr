import React, { useRef, useState } from 'react';
import Template from '../template/Template';

import './restore.scss';
import { useHistory } from 'react-router-dom';
import { useSwitch } from '../../../hook/switch.hook';

const Restore = () => {
    const [timer] = useState(15);
    const [confirm, setConfirm] = useState('');
    const [validate, setValidate] = useState(false)
    const inputList = useRef(null);
    const history = useHistory()
    const chek = 111222;
    const switchInput = useSwitch()
        // const timerId = setInterval(() => {
        //     const time = timer - 1
        //     if(time === 0){
        //         clearInterval(timerId)
        //     }
        //     setTimer(time)
        // }, 1000)

    const inputHandler = (e) => {
        const inputs = inputList.current.childNodes;
        
        if(!e.target.value) {
            if(switchInput(inputs, e.target) === 0) {
                setConfirm(confirm.slice(0, -1));
                return 
            }

            setConfirm(confirm.slice(0, -1));
            inputs[switchInput(inputs, e.target) - 1].focus();
            return;
        }
        setConfirm(confirm + e.target.value);

        if(switchInput(inputs, e.target) === inputs.length - 1 || !e.target.value){
            return;
        }

        inputs[switchInput(inputs, e.target) + 1].focus();
    }

    const generateInput = () => {
        const inputs = [];
        for (let i = 0; i < 6; i++){
            inputs.push(<input key={i} onChange={inputHandler} type="text" pattern="\d [0-9]" className={validate ? 'warning': ''} maxLength="1" required/>)
        }
        return inputs;
    }

    const submitHandler = () => {
        if (parseInt(confirm) === parseInt(chek)) {
            setValidate(false)
            history.push('/restore/password')
            return
        }
        setValidate(true)
    }

    return (
        <Template imgUrl="frame-log.png" title="Добро пожаловать!" description="Вместе с нами медицина стала проще!">
            <section className="section-restore">
                <h2>Ввостановление пароля</h2>
                <span className="sub-title">На ваш номер выслан код восстановления</span>

                <div className="restore-form">
                    <div ref={inputList} className="input-list">
                        {generateInput()}
                    </div>
                    <span className="timer">
                        {timer !== 0 ? <span className="timer-count">Повторить отправку через 00:{timer}</span>: <a href="#" className="massage">Повторить отправку</a>}
                    </span>
                    <button onClick={submitHandler} type="button" className="submit-btn">Далее</button>
                </div>
                <span className="massage">Другой способ восстановления</span>
                <img className="logotype" src="./img/logo/logo.png" alt="Логотип"/>
            </section>
        </Template>
    );
};

export default Restore;