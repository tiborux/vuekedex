import { PokemonModel } from '../../../models/pokemon.model';

export interface SearchState {
  query: string;
  rows: number;
  matchedPokemon: PokemonModel[];
  allPokemon: PokemonModel[];
  suggestions: PokemonModel[];
}
