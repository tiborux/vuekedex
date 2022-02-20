<template>
  <input
    v-model="query"
    @input="search"
    class="search-input"
    inputmode="search"
    type="search"
  />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { debounce } from '../../../utils/debounce';
  import { useSearchStore } from '../store/index';
  import { DebouncedFunction } from '../../../models/types';

  const query = ref('');
  const searchStore = useSearchStore();
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

  function search(): void {
    if (query.value.length >= 2) {
      searchStore.query = query.value;
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
