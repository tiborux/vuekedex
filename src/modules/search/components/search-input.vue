<template>
  <input
    v-model="query"
    class="search-input"
    inputmode="search"
    type="search"
    @input="updateQuery"
  />
</template>

<script setup lang="ts">
  import { onMounted, toRefs, watch } from 'vue';
  import { debounce } from '../../../utils/debounce';
  import { requestEachPokemon } from '../store/actions/request-each-pokemon.action';
  import { useSearchStore } from '../store/index';
  import { DebouncedFunction } from '../../../utils/types';

  const props = withDefaults(
    defineProps<{
      instantDebounceInMs?: number;
    }>(),
    { instantDebounceInMs: 600 }
  );

  const searchStore = useSearchStore();
  let debouncedRequest: DebouncedFunction<[string]>;
  const { instantDebounceInMs } = toRefs(props);
  const { query } = toRefs(searchStore.$state);

  onMounted(() => {
    searchStore.request();
  });

  watch(
    () => searchStore.query,
    () => {
      search();
    }
  );

  function updateQuery(): void {
    searchStore.query = query.value;
  }

  function search(): void {
    if (query.value.length >= 2) {
      if (!debouncedRequest) {
        debouncedRequest = debounce(searchStore.requestEachPokemon, instantDebounceInMs.value);
      }
      debouncedRequest('');
    } else {
      searchStore.matchedPokemon = [];
    }
  }
</script>
