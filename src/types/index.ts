export type TBook = {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
};

export type TChar = {
  fullName: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: string[];
  image: string;
  birthdate: string;
  index: number;
};

export type THouse = {
  house: string;
  emoji: string;
  founder: string;
  colors: string[];
  animal: string;
  index: number;
};

export type TSpell = {
  spell: string;
  use: string;
  index: number;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};