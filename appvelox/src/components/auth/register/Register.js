import React, { useState, useRef, useEffect } from 'react';
import Template from '../template/Template';

import './register.scss';
import { useHistory } from 'react-router-dom';
import DataForLogin from './dataForLogin/DataForLogin';
import PersonalData from './parsonalData/PersonalData';
import Representatives from './representatives/Representatives';
import { useSwitch } from '../../../hook/switch.hook';
import { connect } from 'react-redux';
import { regChange } from '../../../redux/actions/regAction';
import axios from 'axios';
import useHttp from '../../../hook/http.hook';

const Register = ({regChange, user}) => {

    const history = useHistory();

    const [count, setCount] = useState(0);

    const tabsList = useRef(null);

    const form = useRef(null);

    const {loading, error, response} = useHttp();

    const switchInput = useSwitch();

    const screens = [<DataForLogin />, <PersonalData />, <Representatives />];


    const switchScreen = (e) => {

        const target = e.target.classList.contains('tab') ? e.target : e.target.parentNode;

        const tabs = tabsList.current.childNodes;

        const index = switchInput(tabs, target);

        if(index > count) return;

        setCount(index);

    }

    useEffect(() => {

        const tabs = tabsList.current.childNodes;

        tabs[count].classList.add('active');

        tabs.forEach((item, i) => {

            if(i > count) {
                item.classList.remove('active');
            }

        });

        form.current.childNodes.forEach(item => {

            if(!user[item.name]) return;

            item.value = user[item.name];

        });

    }, [count, user]);

    const saveValue = () => {
        form.current.childNodes.forEach(item => {

            regChange({[item.name]: item.value});

        });
    }
    
    const submitHandler = (e) => {

        e.preventDefault();

        saveValue();

        if(count < 2) {
            setCount(count + 1);
            return;
        }

        response('auth/register', 'POST', user);

    }


    return (
        <Template imgUrl="frame-reg.png" title="Начните следить за своим здоровьем вместе с нами!" description="Вместе с нами медицина стала проще!">
            <section className="section-register">
                <h2>Регистрация</h2>
                <span className="sub-title massage">У вас уже есть аккаунт? <span onClick={() => history.push('/login')}>Войти</span></span>
                <span className="massage">{error ? error:null}</span>
                <div ref={tabsList} className="tabs">
                    <div onClick={switchScreen} className="data-for-login tab">
                        <div className="cricle">1</div>
                        <span>Данные для входа</span>
                    </div>
                    <div onClick={switchScreen} className="personal-data tab">
                        <div className="cricle">2</div>
                        <span>Личная информация</span>
                    </div>
                    <div onClick={switchScreen} className="representatives tab">
                        <div className="cricle">3</div>
                        <span>Представители</span>
                    </div>
                </div>
                <form ref={form} onSubmit={submitHandler} className="form-register">
                    {screens[count]}
                </form>
                <img className="logotype" src="./img/logo/logo.png" alt="Логотип"/>
            </section>
        </Template>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.regUser,
    };
}

const mapDispathToProps = {
    regChange,
};

export default connect(mapStateToProps, mapDispathToProps)(Register);