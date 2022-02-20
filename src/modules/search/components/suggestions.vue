<template>
  <button v-for="suggestion in suggestions" @click="updateQuery(suggestion)" >{{ suggestion.name }}</button>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { PokemonModel } from '../../../models/pokemon.model';
  import { useSearchStore } from '../store/index';

  const searchStore = useSearchStore();
  const { suggestions } = toRefs(searchStore.$state);

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
