import TOffer from '../types/offers';


const mockOffers = [{
  id: 0,
  title: 'Beautiful &amp; luxurious studio at great location',
  price: 100,
  rating: 4.8,
  type: 'Apartment',
  city: 'Amsterdam',
  location: [52.3909553943508, 4.85309666406198],
  isFavorite: true,
  isPremium: true,
  description: 'luxurious studio at great location',
  bedrooms: 3,
  goods: ['Kettle', 'Fridge'],
  host: 'Ann',
  images: ['img/apartment-01.jpg',],
  maxAdults: 3
},
{
  id: 1,
  title: 'Good room',
  price: 200,
  rating: 3,
  type: 'Room',
  city: 'Amsterdam',
  location: [52.3609553943508, 4.85309666406198],
  isFavorite: true,
  isPremium: true,
  description: 'Just a good room',
  bedrooms: 3,
  goods: ['Kettle', 'Fridge'],
  host: 'Daniel',
  images: ['img/apartment-small-03.jpg',],
  maxAdults: 3
},
{
  id: 2,
  title: 'Passiflora',
  price: 300,
  rating: 5,
  type: 'Room',
  city: 'Amsterdam',
  location: [52.3909553943508, 4.929309666406198],
  isFavorite: true,
  isPremium: true,
  description: 'Place to rest',
  bedrooms: 3,
  goods: ['Kettle', 'Fridge'],
  host: 'Shaen',
  images: ['img/room-small.jpg',],
  maxAdults: 3
},
{
  id: 3,
  title: 'Bells of Bockler',
  price: 400,
  rating: 4.9,
  type: 'Apartment',
  city: 'Amsterdam',
  location: [52.3809553943508, 4.939309666406198],
  isFavorite: true,
  isPremium: true,
  description: 'Cool',
  bedrooms: 3,
  goods: ['Kettle', 'Fridge'],
  host: 'Ann',
  images: ['img/apartment-small-04.jpg',],
  maxAdults: 3
},
{
  id: 4,
  title: 'Moulin Rouge',
  price: 400,
  rating: 4.9,
  type: 'Apartment',
  city: 'Paris',
  location: [48.83, 2.3],
  isFavorite: true,
  isPremium: true,
  description: 'Cool',
  bedrooms: 3,
  goods: ['Kettle', 'Fridge'],
  host: 'Ann',
  images: ['img/apartment-small-04.jpg',],
  maxAdults: 3
}];

//export default mockOffers;

const getOffers = (): TOffer[] => (mockOffers);

export default getOffers;
