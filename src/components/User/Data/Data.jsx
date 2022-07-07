
import hotel1 from '../../../assets/pexels-konstantinos-eleftheriadis-2034335.jpg';
import hotel2 from '../../../assets/pexels-amar-saleem-70441.jpg';
import hotel3 from '../../../assets/325004232.jpg';

import bedroom1 from '../../../assets/pexels-max-vakhtbovych-6782428.jpg';
import bathroom2 from '../../../assets/pexels-max-vakhtbovych-7031908.jpg';
import bathroom3 from '../../../assets/pexels-jean-van-der-meulen-1457847.jpg'

import bedroom4 from '../../../assets/pexels-julie-aagaard-2467285.jpg';
import bedroom5 from '../../../assets/pexels-pixabay-210265.jpg';
import bedroom6 from '../../../assets/wp6957302-hotel-room-wallpapers.jpg';

import hotel3_1 from '../../../assets/325006667.jpg';
import hotel3_2 from '../../../assets/325004270.jpg';
import hotel3_3 from '../../../assets/325004170.jpg';
import hotel3_4 from '../../../assets/325003381.jpg';
import hotel3_5 from '../../../assets/325003382.jpg';
import hotel3_6 from '../../../assets/325002008.jpg';
import hotel3_7 from '../../../assets/325001863.jpg';
import hotel3_8 from '../../../assets/325001880.jpg';
import hotel3_9 from '../../../assets/325001786.jpg';
import hotel3_10 from '../../../assets/325001787.jpg';
import hotel3_11 from '../../../assets/325001766.jpg';
import hotel3_12 from '../../../assets/370208651.jpg';
import hotel3_13 from '../../../assets/325004210.jpg';

import kitchen1 from '../../../assets/pexels-max-vakhtbovych-8143944.jpg';


const Data =[
    
        {
            id: 1, hotel: hotel1, name: 'Rebone Hotel', alt: 'bedroom', description: 'Located in Johannesburg, 2 miles from Sandton City Mall, Green Gables has accommodations with a shared lounge, free private parking and a garden.',
            location: 'Sandton City', price: 250, duration: 'per night',
            link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.703645210326!2d28.056532634887706!3d-26.108590999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cd4b5c8237b%3A0x6881a081c712edaf!2sMINT%20Hotel%2084%20on%20Katherine!5e0!3m2!1sen!2sza!4v1656496706918!5m2!1sen!2sza',
            gallary: [{ galId: 1, image: bedroom1 }, { galId: 2, image: bathroom2 }, { galId: 3, image: kitchen1 }],
            hotelDetails: {
                amenities: 'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone', view: 'swimming pool', size: '20m²', bedType: 'queen bed', categories: 'standard single room', descriptive: "Superior Double Rooms in our hotel are perfectly equipped for traveling couples or friends. The park or olive grove view will bring you unforgettable memories.\n" +
                    "These rooms were designed with open-concept living area and are very bright & spacious – they are available with either double or queen beds. Room sizes are different – from 30 to 35 sqm. The interior is made with a warm-palette tons of walls and furniture. A work desk and stationary set are at your disposal. Makeup mirror and chair are also included. \n" +
                    "The bathrooms are equipped with shower or bathtub. \n" +
                    "For honeymoons we have special propositions and services which may find out via direct contact."
            },
        },
        {
            id: 2, hotel: hotel2, name: 'Lebute Hotel', alt: 'bedroom', description: 'his peaceful hotel offers stylish accommodations in Johannesburg’s suburb of Sandton. It features 2 swimming pools set within gardens, as well as 2 gourmet restaurants and a modern fitness center.',
            location: 'Sandton', price: 300, duration: 'per night',
            link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.71973550945!2d28.057637802957395!3d-26.059392761155916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573325b4d1ba3%3A0x821d3744f2229eb0!2sSandton%20Sun!5e0!3m2!1sen!2sza!4v1656506597818!5m2!1sen!2sza',
            gallary: [{ galId: 1, image: bathroom3 }, { galId: 2, image: bedroom4 }, { galId: 3, image: bedroom5 }, { galId: 4, image: bedroom6 }],
            hotelDetails: {
                amenities: 'air-conditioning, free wi-fi, hairdryer, in-room safety, laundry, minibar, telephone, microwave, cable', view: 'swimming pool, sea', size: '40m²', bedType: 'queen bed & king bed', categories: 'hotel ', descriptive: `Well situated in Sandton of Johannesburg, Daisy Place has a garden and free WiFi. Located 2.3 km from Sandton City Mall, the property provides an outdoor swimming pool and free private parking.

                The apartment comes with 2 bedrooms, 4 bathrooms, bed linen, towels, a flat-screen TV with satellite channels, a dining area, a fully equipped kitchen, and a patio with garden views. The air-conditioned apartment also has a seating area, washing machine and a bathroom with a shower and a bath.
                
                Montecasino is 12.9 km from the apartment, while Johannesburg Stadium is 12.9 km from the property. The nearest airport is O.R. Tambo International, 25.7 km from Daisy Place, and the property offers a paid airport shuttle service.`
            }
        },
        {
            id: 3, hotel: hotel3, name: 'Ekhayalami Hotel', alt: 'bedroom', description: 'Located in Cape Town, 5 miles from Table Mountain, Vida Nova Retreat provides accommodations with a restaurant, free private parking, an outdoor swimming pool and a bar.',
            location: 'Cape Town', price: 350, duration: 'per night',
            link: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13228.578755684342!2d18.3795401!3d-34.0144968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8e9e3a3e89d178e1!2sVida%20Nova%20Retreat!5e0!3m2!1sen!2sza!4v1656510121019!5m2!1sen!2sza',
            gallary: [{galId:1, image:hotel3_1}, {galId:2, image:hotel3_2}, {galId:3, image:hotel3_3}, {galId:4, image:hotel3_4}, {galId:5, image:hotel3_5}, {galId:6, image:hotel3_6}, {galId:7, image:hotel3_7}, {galId:8, image:hotel3_8}, {galId:9, image:hotel3_9}, {galId:10, image:hotel3_10}, {galId:11, image:hotel3_11}, {galId:12, image:hotel3_12}, {galId:13, image:hotel3_13}],
            hotelDetails: {
                amenities: 'flat-screen TV, a private bathroom, bed linen and towels, safety deposit box, closet and an electric tea pot', view: 'pool, table mountain', size: '30m²', bedType: 'platform hotel bed', categories: 'An apartment', descriptive: `Located in Cape Town, 8 km from Table Mountain, Vida Nova Retreat provides accommodations with a restaurant, free private parking, an outdoor swimming pool and a bar. 11.3 km from CTICC and 12.9 km from Robben Island Ferry, the property has a shared lounge and a garden. The hotel features family rooms.

                At the hotel, all rooms come with a desk, a flat-screen TV, a private bathroom, bed linen and towels. Each room has a safety deposit box, while selected rooms will provide you with a patio and others also have pool views. All guest rooms will provide guests with a closet and an electric tea pot.
                
                Guests at Vida Nova Retreat can enjoy a à la carte breakfast.
                
                At the accommodation guests are welcome to use a hot tub.
                
                V&A Waterfront is 12.9 km from Vida Nova Retreat, while Constantia Glen Winery is 3.2 km away. The nearest airport is Cape Town International Airport, 20.9 km from the hotel.
                
                Couples in particular like the location – they rated it 9.9 for a two-person trip.`
            }
        },
]

export default Data;