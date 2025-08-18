import { Link } from 'react-router-dom';


export function Page404(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found Ошибка 404. Страница не существует.</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}
