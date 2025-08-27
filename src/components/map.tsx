import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { City, Point } from '../types/map_types';
import TOffer from '../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks';
import { selectActiveOfferId } from '../store/selectors/offers';

type MapProps = {
  city: City;
  offers: TOffer[];
  style: { height: string } | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map(props: MapProps): JSX.Element {
  const { city, offers, style } = props;
  const activeCard = useAppSelector(selectActiveOfferId);
  const selectedCard = offers[activeCard];
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const selectedPoint: Point = { title: selectedCard.title, lat: selectedCard.location.latitude, lng: selectedCard.location.longitude };
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.location.latitude === selectedPoint.lat && offer.location.longitude === selectedPoint.lng
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      map.setView({ lat: city.lat, lng: city.lng });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, city, activeCard]);

  return <section className="cities__map map" {...style ? { style } : null} ref={mapRef} data-testid='map'></section>;
}

export default Map;
