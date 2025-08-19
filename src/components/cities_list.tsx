import { useAppDispatch, useAppSelector } from '../hooks/index';
import { setCity } from '../store/actions';
import { memo } from 'react';
import { selectCity } from '../store/selectors/offers';

type citiesType = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
type cityEl = { id: number; cityName: citiesType };
type citiesList = cityEl[];

function CitiesList(): JSX.Element {
  const citiesList: citiesList =
    [
      { id: 1, cityName: 'Paris' },
      { id: 2, cityName: 'Cologne' },
      { id: 3, cityName: 'Brussels' },
      { id: 4, cityName: 'Amsterdam' },
      { id: 5, cityName: 'Hamburg' },
      { id: 6, cityName: 'Dusseldorf' }
    ];
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(selectCity);
  const cities = citiesList.map((city: cityEl) => (
    <li className="locations__item" key={city.id}>
      <a className={city.cityName === selectedCity ? "locations__item-link tabs__item tabs__item--active" : "locations__item-link tabs__item"} href="#" onClick={() => {
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

export default memo(CitiesList);
