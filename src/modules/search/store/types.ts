import { PokemonModel } from '../../../models/pokemon.model';

export interface SearchState {
  query: string;
  rows: number;
  pokemonList: PokemonModel[];
  allPokemon: PokemonModel[];
  suggestions: PokemonModel[];
}
