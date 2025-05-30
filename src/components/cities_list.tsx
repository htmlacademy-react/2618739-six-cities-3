import { useAppDispatch } from '../hooks/index';
import { setCity } from '../store/actions';

type citiesType = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
type cityEl = { id: number; cityName: citiesType };
type citiesLisrProps = { citiesList: cityEl[] };

function CitiesList({ citiesList }: citiesLisrProps): JSX.Element {
  const dispatch = useAppDispatch();
  const cities = citiesList.map((city: cityEl) => (
    <li className="locations__item" key={city.id}>
      <a className="locations__item-link tabs__item" href="#" onClick={() => {
        dispatch(setCity(city.cityName));
      }}
      >
        <span>{city.cityName}</span>
      </a>
    </li>
  ));
  return (
    <ul className="locations__list tabs__list">
      {cities}
    </ul>);
}

export default CitiesList;
