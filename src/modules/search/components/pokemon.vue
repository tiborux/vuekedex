<template>
  <div class="pokemon">
    <img
      class="pokemon__image"
      :src="pokemon.sprites.other['official-artwork'].front_default"
      :alt="`image of ${pokemon.name}`"
    />
    <p class="pokemon__name">{{ pokemon.name }}</p>
  </div>
</template>

<script setup lang="ts">
  import { PokemonModel } from '../../../models/pokemon.model';

  defineProps<{
    pokemon: PokemonModel;
  }>();
</script>

<style lang="scss">
  .pokemon {
    width: 200px;
    text-align: center;
    &__image {
      height: 200px;
      width: 200px;
    }
    &__name {
      font-size: 24px;
    }
  }
</style>
