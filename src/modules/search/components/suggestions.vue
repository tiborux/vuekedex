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
  import { computed } from 'vue';
  import { PokemonModel } from '../../../models/pokemon.model';
  import { useSearchStore } from '../store/index';
  import List from './list.vue';

  const searchStore = useSearchStore();

  const { maxItemsToRender } = withDefaults(
      defineProps<{
        maxItemsToRender: number;
      }>(),
      { maxItemsToRender: 8 }
  );

  /** List of Pokemon suggestions */
  const suggestions = computed(() => searchStore.suggestions.slice(0, maxItemsToRender));

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
