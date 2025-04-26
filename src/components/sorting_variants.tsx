import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectSorting } from '../store/selectors/offers';
import { setSorting } from '../store/actions';

function SortingVariants(): JSX.Element {
  const selectedSorting = useAppSelector(selectSorting);
  const [isExpanded, setExpand] = useState(false);
  function expand() {
    setExpand(!isExpanded);
  }
  const dispatch = useAppDispatch();
  function sortOffers(e: React.MouseEvent<HTMLElement>) {
    if (e.currentTarget.textContent) {
      dispatch(setSorting(e.currentTarget.textContent));
    }
  }

  function isActive(variant: string): boolean | undefined {
    if (variant === selectedSorting) {
      return (true);
    } else {
      return (false);
    }
  }
  const sortingVariants = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  return (
    <form className="places__sorting" action="#" method="get" onClick={expand}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isExpanded ?
        (
          <ul className="places__options places__options--custom places__options--opened">
            {sortingVariants.map((variant) => (<li className={isActive(variant) ? 'places__option places__option--actives' : 'places__option'} onClick={sortOffers} tabIndex={0} key={variant}>{variant}</li>))}
          </ul>
        ) : null}
    </form >
  );
}
export default SortingVariants;
