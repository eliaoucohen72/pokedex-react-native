import { GetSinglePokemon } from "@/types/GetSinglePokemon";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useLocalSearchParams } from "expo-router";
import { PokemonDetails } from "../../components/PokemonDetails";

export default function Pokemon() {
  const { id } = useLocalSearchParams();
  const { data } = useFetchQuery(`/pokemon/${id}/`);
  const pokemon: GetSinglePokemon = { ...data };

  return data?.isFetching ? null : <PokemonDetails id={id} pokemon={pokemon} />;
}
