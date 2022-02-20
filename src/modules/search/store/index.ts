import { defineStore } from 'pinia';
import { PokemonModel } from '../../../models/pokemon.model';
import { setup } from 'axios-cache-adapter';
import { SearchState } from './types';

const basicUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=2000';
const api = setup({
  baseURL: basicUrl,
  cache: {
    maxAge: 15 * 60 * 1000
  }
});

export const useSearchStore = defineStore({
  id: 'search',
  state: () =>
    ({
      query: '',
      rows: 0,
      allPokemon: [],
      pokemonList: [],
      suggestions: []
    } as SearchState),
  actions: {
    request(url?: string) {
      api.get(url ?? basicUrl).then(async (response: any) => {
        if (this.query === 'all') {
          this.allPokemon = response.data.results;
        } else {
          this.pokemonList.push(response.data);
        }
      });
    },
    requestFiltered() {
      this.pokemonList = [];
      this.filteredPokemon.forEach(pokemon => {
        this.request(pokemon.url);
      });
    }
  },
  getters: {
    filteredPokemon(): PokemonModel[] {
      return this.allPokemon.filter(pokemon => pokemon.name.includes(this.query));
    }
  }
});
