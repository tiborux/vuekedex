import { PokemonModel } from '../../../../models/pokemon.model';
import { useSearchStore } from '../index';

export const requestEachPokemon = () => {
  const searchStore = useSearchStore();
  searchStore.matchedPokemon = [];
  searchStore.filteredPokemon.forEach((pokemon: PokemonModel) => {
    searchStore.request(pokemon.url)
  });
};
