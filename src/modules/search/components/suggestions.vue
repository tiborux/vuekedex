<template>
  <List :items="suggestions" class="suggestions-list">
    <template #default="{ item }">
      <button @click="updateQuery(item)">
        {{ item.name }}
      </button>
    </template>
  </List>
</template>

<script setup lang="ts">
  import { computed, toRefs } from 'vue';
  import { PokemonModel } from '../../../models/pokemon.model';
  import { useSearchStore } from '../store/index';
  import List from './list.vue';

  const searchStore = useSearchStore();

  const props = withDefaults(
    defineProps<{
      maxItemsToRender?: number;
    }>(),
    { maxItemsToRender: 8 }
  );

  const { maxItemsToRender } = toRefs(props);
  /** List of Pokemon suggestions */
  const suggestions = computed(() => {
    return searchStore.query.length >= 2
      ? searchStore.suggestions.slice(0, maxItemsToRender.value)
      : [];
  });

  /** Updates the query of the search with the value of the suggestion */
  function updateQuery(suggestion: PokemonModel): void {
    searchStore.query = suggestion.name;
  }
</script>
<style lang="scss">
  button {
    border: none;
    cursor: pointer;
  }
</style>
