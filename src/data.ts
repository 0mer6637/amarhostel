export const HOSTEL = {
  name: 'Amar Boys Hostel & PG',
  shortName: 'Amar Boys Hostel',
  whatsapp: 'https://wa.me/918074602355',
  phoneTelugu: '9849397836',
  phoneTeluguLink: 'tel:+919849397836',
  phoneHindi: '9177568585',
  phoneHindiLink: 'tel:+919177568585',
  address:
    'Amar Boys Hostel, Milardevpally, Subhan Colony, Chandrayangutta, Hyderabad, Telangana 500005',
  addressShort:
    'Milardevpally, Subhan Colony, Chandrayangutta, Hyderabad, Telangana 500005',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=Amar+boys+hostel+Chandrayangutta+Hyderabad',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.04129075425!2d78.4568797!3d17.3135568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd46c8fb9045%3A0x5ea36854c9f4907d!2sAmar%20boys%20hostel!5e0!3m2!1sen!2sin!4v1788193322265!5m2!1sen!2sin',
};

export const IMAGES = {
  heroBuilding:
    'https://images.pexels.com/photos/18165722/pexels-photo-18165722.jpeg?auto=compress&cs=tinysrgb&w=1600',
  aboutRoom:
    'https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&w=1200',
  foodThali:
    'https://images.pexels.com/photos/29148133/pexels-photo-29148133.jpeg?auto=compress&cs=tinysrgb&w=1200',
  foodThali2:
    'https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?auto=compress&cs=tinysrgb&w=800',
  eggs:
    'https://images.pexels.com/photos/4869425/pexels-photo-4869425.jpeg?auto=compress&cs=tinysrgb&w=800',
  livingRoom:
    'https://images.pexels.com/photos/5137980/pexels-photo-5137980.jpeg?auto=compress&cs=tinysrgb&w=1200',
  bedroom:
    'https://images.pexels.com/photos/6890398/pexels-photo-6890398.jpeg?auto=compress&cs=tinysrgb&w=1200',
  buildingFacade:
    'https://images.pexels.com/photos/27459248/pexels-photo-27459248.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export type PageId = 'home' | 'facilities' | 'contact' | 'location';

export const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'contact', label: 'Contact' },
  { id: 'location', label: 'Location' },
];
