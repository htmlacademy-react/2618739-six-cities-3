import { useState, ChangeEvent, FormEventHandler } from 'react';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { setCity } from '../../store/actions';
import { CITIES } from '../../const';
import { FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { validate as validateEmail } from 'email-validator';


function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const [userLogin, setLogin] = useState('');
  const [userPassword, setPassword] = useState('');
  const getLogin = (newLogin: string) => {
    setLogin(newLogin);
  };
  const getPassword = (newPassword: string) => {
    setPassword(newPassword);
  };
  function checkAndDispatch(email: string, password: string) {
    if (!validateEmail(email)) {
      toast.error('Incorrect e-mail');
      return;
    }
    if (password.length < 2) {
      toast.error('Incorrect password');
      return;
    }
    dispatch(login({ email: email, password: userPassword }));

  }
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    checkAndDispatch(userLogin, userPassword);
  };
  const handleEnterPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      checkAndDispatch(userLogin, userPassword);
    }
  };
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)].title;
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login" data-testid="loginForm">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" data-testid="email" placeholder="Email" defaultValue="" required onBlur={({ target }: ChangeEvent<HTMLInputElement>) => {
                  getLogin(target.value);
                }}
                />
                <ToastContainer />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" >Password</label>
                <input className="login__input form__input" data-testid="password" type="password" name="password" placeholder="Password" required onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  getPassword(target.value);
                }}
                onKeyDown={handleEnterPress}
                />
              </div>
              <button className="login__submit form__submit button" data-testid="submitButton" >Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={() => {
                store.dispatch(setCity(randomCity));
              }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
