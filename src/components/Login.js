import { Link } from 'react-router-dom';
import Header from "./Header";

function Login() {
    return(
        <div className="page">
            <Header />
            <div className="login">
                <h1 className="login__title">Вход</h1>
                <form className="login__form">
                    <input name="email" placeholder="Email" className="login__input" type="email" minLength="2" required />
                    <input name="password" placeholder="Пароль" className="login__input" type="password" minLength="2" required />
                    <button className="login__button">Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Login;