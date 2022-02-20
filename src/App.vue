<template>
  <Search />
  <Suggestions />
  <div class="pokemon-list">
    <Pokemon :pokemon="pokemon" v-for="pokemon in pokemonList"></Pokemon>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue';
  import Search from './modules/search/components/search.vue';
  import Suggestions from './modules/search/components/suggestions.vue';
  import { useSearchStore } from './modules/search/store/index';
  import Pokemon from './modules/search/components/pokemon.vue';

  const searchStore = useSearchStore();
  const { pokemonList } = toRefs(searchStore.$state);
</script>

<style>
  .pokemon-list {
    display: flex;
    flex-flow: row wrap;
  }
</style>
