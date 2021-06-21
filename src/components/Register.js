import { Link } from 'react-router-dom';
import Header from "./Header";


function Register() {
    return(
        <div className="page">
            <Header />
            <div className="register">
                <h1 className="register__title">Регистрация</h1>
                <form className="register__form">
                    <input name="email" placeholder="Email" className="register__input" type="email" minLength="2" required />
                    <input name="password" placeholder="Пароль" className="register__input" type="password" minLength="2" required />
                    <button className="register__button">Зарегистрироваться</button>
                </form>
                <p className="register__signature">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
            </div>
        </div>
    )
}

export default Register;