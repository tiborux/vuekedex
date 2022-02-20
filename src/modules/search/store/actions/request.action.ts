import { setup } from 'axios-cache-adapter';
import { useSearchStore } from '../index';

const basicUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=2000';
const api = setup({
  baseURL: basicUrl,
  cache: {
    maxAge: 15 * 60 * 1000
  }
});

export const request = (url?: string) => {
  const searchStore = useSearchStore();

  api.get(url ?? basicUrl).then(async (response: any) => {
    if (!url) {
      searchStore.allPokemon = response.data.results;
    } else {
      searchStore.matchedPokemon.push(response.data);
    }
  });
};
