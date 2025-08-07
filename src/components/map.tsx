import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { City, Point } from '../types/map_types';
import TOffer from '../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../hooks';
import { selectActiveOffer } from '../store/selectors/offers';

type MapProps = {
  city: City;
  offers: TOffer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const { city, offers } = props;
  const activeCard = useAppSelector(selectActiveOffer);
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

  return <div style={{ height: '500px' }} ref={mapRef} data-testid='map'></div>;
}

export default Map;
