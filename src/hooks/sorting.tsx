import TOffer from '../types/offers';
import { Sorting } from '../types/sorting';

function useSortOffers(selectedOffers: TOffer[], selectedSorting: Sorting | undefined): TOffer[] {
  switch (selectedSorting) {
    case Sorting.Low:
      return (selectedOffers.sort((a, b) => a.price - b.price));
    case Sorting.Hight:
      return (selectedOffers.sort((a, b) => a.price - b.price).reverse());
    case Sorting.Rated:
      return (selectedOffers.sort((a, b) => a.rating - b.rating).reverse());
    default:
      return (selectedOffers);
  }
}

export default useSortOffers;
