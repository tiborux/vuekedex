<template>
  <input
      v-model="query"
      @input="updateQuery"
      class="search-input"
      inputmode="search"
      type="search"
  />
</template>

<script setup lang="ts">
import { onMounted, toRefs, watch } from 'vue';
import { debounce } from '../../../utils/debounce';
import { useSearchStore } from '../store/index';
import { DebouncedFunction } from '../../../models/types';

const searchStore = useSearchStore();
const { query } = toRefs(searchStore.$state);

let debouncedRequest: DebouncedFunction<[string]>;

const { instantDebounceInMs } = withDefaults(
    defineProps<{
      instantDebounceInMs: number;
    }>(),
    { instantDebounceInMs: 600 }
);

onMounted(() => {
  searchStore.query = 'all';
  searchStore.request();
});

watch(
    () => searchStore.query,
    query => {
      if (query !== 'all') {
        search();
      }
    }
);

function updateQuery(): void {
  searchStore.query = query.value;
}

function search(): void {
  if (query.value.length >= 2) {
    if (!debouncedRequest) {
      debouncedRequest = debounce(searchStore.requestFiltered, instantDebounceInMs);
    }
    searchStore.suggestions = searchStore.filteredPokemon;
    debouncedRequest('');
  } else {
    searchStore.pokemonList = [];
  }
}
</script>
