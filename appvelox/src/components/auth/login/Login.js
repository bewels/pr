import React, { useState } from 'react';
import Template from '../template/Template';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { userSucces } from './../../../redux/actions/loginAction';
import './login.scss';
import useHttp from '../../../hook/http.hook';

const Login = ({userSucces}) => {

    const [data, setData] = useState({login: '', password: ''});

    const history = useHistory();

    const {response, loading, error} = useHttp();

    const inputHandler = (e) => {

        setData({...data, [e.target.name]: e.target.value});

    }

    const login = async (e) => {

        e.preventDefault();

        await response('auth/login', 'POST', data);

        userSucces();
    }

    return (
        <Template imgUrl="frame-log.png" title="Добро пожаловать!" description="Вместе с нами медицина стала проще!">
            <section className="section-login">
                <h2>Вход</h2>
                <span className="massage">У вас нет аккаунта?&nbsp;
                    <span 
                        onClick={() => history.push('/register')}
                    >
                        Зарегистрироваться
                    </span>
                </span>
                {error ? <span className="massage">{error}</span> : null}
                <form onSubmit={login} className="form">
                    <input 
                        onChange={inputHandler} 
                        placeholder="Почта или телефон" 
                        name="login" 
                        type="text" 
                        required
                        value={data.login}
                    />
                    <input 
                        onChange={inputHandler} 
                        placeholder="Пароль" 
                        name="password" 
                        type="password" 
                        required
                        value={data.password}
                    />
                    <span className="massage">Забыли пароль?&nbsp;
                        <span 
                            onClick={() => history.push('/restore')}
                        >
                            Востановить</span>
                    </span>
                    <button disabled={loading} className="submit-btn">{loading ? 'Подождите' : 'Войти'}</button>
                </form>
                <img className="logotype" src="./img/logo/logo.png" alt="Логотип"/>
            </section>
        </Template>
    );
};



const mapDispathToProps = {
    userSucces,
};

export default connect(null, mapDispathToProps)(Login);