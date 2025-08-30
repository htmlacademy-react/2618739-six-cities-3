export const URL_MARKER_DEFAULT =
  '/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/img/pin-active.svg';


export const CITIES = [
  {
    title: 'Paris',
    lat: 48.856614,
    lng: 2.3522219,
    zoom: 12
  },
  {
    title: 'Amsterdam',
    lat: 52.373057,
    lng: 4.892557,
    zoom: 12
  },

  {
    title: 'Cologne',
    lat: 50.9333,
    lng: 6.95,
    zoom: 12
  },
  {
    title: 'Brussels',
    lat: 50.8504,
    lng: 4.34878,
    zoom: 12
  },
  {
    title: 'Hamburg',
    lat: 53.5753,
    lng: 10.0153,
    zoom: 12
  },
  {
    title: 'Dusseldorf',
    lat: 51.2217,
    lng: 6.77616,
    zoom: 12
  },
];

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorites = '/favorite'
}

export enum RequestStatus {
  Idle, Loading, Success, Failed
}

export enum AuthorizationStatus {
  Unknown, Auth, NoAuth
}

export const MAX_REVIEW_LENGTH = 300;
export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_NUM = 10;
export const MAX_OFFER_PHOTOS = 6;
export const MAX_NEAR_PLACES = 3;
