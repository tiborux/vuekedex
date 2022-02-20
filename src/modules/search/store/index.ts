import { defineStore } from 'pinia';
import { PokemonModel } from '../../../models/pokemon.model';
import { requestEachPokemon } from './actions/request-each-pokemon.action';
import { request } from './actions/request.action';
import {  SearchState } from './types';

export const useSearchStore = defineStore({
  id: 'search',
  state: () =>
    ({
      query: '',
      rows: 0,
      allPokemon: [],
      matchedPokemon: [],
      suggestions: []
    } as SearchState),
  actions: {
    request,
    requestEachPokemon
  },
  getters: {
    filteredPokemon(): PokemonModel[] {
      return this.allPokemon.filter(pokemon => pokemon.name.includes(this.query));
    },
    suggestions(): PokemonModel[] {
      return this.filteredPokemon.filter(pokemon => pokemon.name !== this.query && this.query.length >= 2);
    }
  }
});
