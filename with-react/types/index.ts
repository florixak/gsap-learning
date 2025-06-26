type NavLink = {
  id: string;
  title: string;
};

type Cocktail = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

type Profile = {
  imgPath: string;
};

type Feature = string;

type Good = string;

type StoreInfo = {
  heading: string;
  address: string;
  contact: {
    phone: string;
    email: string;
  };
};

type OpeningHour = {
  day: string;
  time: string;
};

type Social = {
  name: string;
  icon: string;
  url: string;
};

type Slider = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
};

export type {
  NavLink,
  Cocktail,
  Profile,
  Feature,
  Good,
  StoreInfo,
  OpeningHour,
  Social,
  Slider,
};
