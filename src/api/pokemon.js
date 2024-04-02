import axios from "axios";

export const fetchPokemons = async () => {
  let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  await new Promise((r) => setTimeout(r, 1000));
  return data;
};

export const fetchDetails = async (url) => {
  let { data } = await axios.get(url);
  await new Promise((r) => setTimeout(r, 1000));
  return data;
}