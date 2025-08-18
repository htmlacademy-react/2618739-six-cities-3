import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/api-actions';


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
  const submit = () => {
    dispatch(login({ email: userLogin, password: userPassword }));
  };
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
            <div className="login__form form">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" data-testid="email" placeholder="Email" required onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  getLogin(target.value);
                }}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" data-testid="password">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  getPassword(target.value);
                }}
                />
              </div>
              <button className="login__submit form__submit button" data-testid="submitButton" onClick={submit}>Sign in</button>
            </div>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
