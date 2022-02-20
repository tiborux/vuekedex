<template>
  <List :items="pokemonList" class="pokemon-list">
    <template #default="{ item }">
      <Pokemon :pokemon="item" />
    </template>
  </List>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useSearchStore } from '../store/index';
  import List from './list.vue';
  import Pokemon from './pokemon.vue';

  /** Search store **/
  const searchStore = useSearchStore();

  /** List of Pokemon filtered by the query */
  const pokemonList = computed(() => searchStore.pokemonList);
</script>

<style>
  .pokemon-list {
    display: flex;
    flex-flow: row wrap;
  }
</style>
