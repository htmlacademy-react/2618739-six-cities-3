import { fetchMockOffer } from '../mock/offers';
import { Sorting } from '../types/sorting';
import useSortOffers from './sorting';
import { renderHook } from '@testing-library/react';

describe('sorting hook', () => {
  it('Shoud sort offers from by default', () => {
    const mockOffers = [fetchMockOffer(), fetchMockOffer()];
    const sorting = Sorting.Default;
    const { result } = renderHook(() => useSortOffers(mockOffers, sorting));
    expect(result.current).toBe(mockOffers);
  });
  it('Shoud sort offers from low price to high', () => {
    const mockOffers = [fetchMockOffer(), fetchMockOffer()];
    const sorting = Sorting.Low
    const { result } = renderHook(() => useSortOffers(mockOffers, sorting));
    expect(result.current[0].price).toBeLessThan(result.current[1].price);
  });
  it('Shoud sort offers from high price to low', () => {
    const mockOffers = [fetchMockOffer(), fetchMockOffer()];
    const sorting = Sorting.Hight
    const { result } = renderHook(() => useSortOffers(mockOffers, sorting));
    expect(result.current[1].price).toBeLessThan(result.current[0].price);
  });
  it('Shoud sort offers from high price to low', () => {
    const mockOffers = [fetchMockOffer(), fetchMockOffer()];
    const sorting = Sorting.Rated
    const { result } = renderHook(() => useSortOffers(mockOffers, sorting));
    expect(result.current[1].rating).toBeLessThan(result.current[0].rating);
  });
});
