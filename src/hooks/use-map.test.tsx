import useMap from './use-map';
import { renderHook } from '@testing-library/react';


describe('map hook', () => {
  it('Shoud sort offers from by default', () => {
    const mockMap = document.createElement("map");
    document.body.appendChild(mockMap);
    const ref = {
      current: mockMap,
    };
    const { result } = renderHook(() => useMap(ref));
    expect(result.current).toBeDefined();
  });
});
