import TOffer from '../types/offers';
import { useAppSelector } from './index';
import { selectSorting } from '../store/selectors/offers';

function useSortOffers(selectedOffers: TOffer[]): TOffer[] {
  const selectedSorting = useAppSelector(selectSorting);
  switch (selectedSorting) {
    case 'Price: low to high':
      return (selectedOffers.sort((a, b) => a.price - b.price));
    case 'Price: high to low':
      return (selectedOffers.sort((a, b) => a.price - b.price).reverse());
    case 'Top rated first':
      return (selectedOffers.sort((a, b) => a.rating - b.rating).reverse());
    default:
      return (selectedOffers);
  }
}

export default useSortOffers;
