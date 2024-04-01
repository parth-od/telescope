/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { fetchDetails, fetchPokemons } from "./pokemon";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import Loader from "../../components/loader";

function Pokemons() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const pokemons = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });
  return (
    <div>
      {pokemons.data.results.map((p, pi) => (
        <div key={pi} className="my-1 p-1">
          <Button variant="text" onClick={() => setSelectedPokemon(p)}>
            {p.name}
          </Button>
          {selectedPokemon?.name === p.name && (
            <Suspense fallback={<Loader description={"Loading pokemon..."} />}>
              <PokemonDetails
                name={selectedPokemon?.name}
                url={selectedPokemon?.url}
              />
            </Suspense>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pokemons;

const PokemonDetails = ({ name, url }) => {
  const { data } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchDetails(url),
  });
  console.log(data, "pokemon details");
  return (
    <Paper elevation={3} className="bg-primary text-gray-100 my-2">
      <Box className="flex flex-row items-center">
      <Avatar className="h-16 w-16" src={data.sprites.front_default} />
      <Box className="flex flex-row">
        <Typography className="text-gray-500">
          {data.abilities.map(
            (a, ai) =>
              `${a.ability.name}${ai !== data.abilities.length - 1 ? ", " : ""}`
          )}
        </Typography>
      </Box>
      </Box>
      
    </Paper>
  );
};
