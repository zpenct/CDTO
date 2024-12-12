import { TFilter } from "../hooks";

export const fetchBooks = async (filter?: TFilter) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/books?page=${filter?.page}&search=${
      filter?.search
    }`
  );

  const data = await response.json();
  return data;
};

export const fetchChars = async (filter?: TFilter) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/characters?page=${filter?.page}&search=${
      filter?.search
    }`
  );
  const data = await response.json();
  return data;
};

export const fetchSpells = async (filter?: TFilter) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/spells?page=${filter?.page}&search=${
      filter?.search
    }`
  );
  const data = await response.json();
  return data;
};

export const fetchHouses = async (filter?: TFilter) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/houses?page=${filter?.page}&search=${
      filter?.search
    }`
  );
  const data = await response.json();
  return data;
};

export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};