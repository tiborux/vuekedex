<template>
  <div class="search">
    <SearchInput />
    <Suggestions />
  </div>
</template>

<script setup lang="ts">
  import SearchInput from './search-input.vue';
  import Suggestions from './suggestions.vue';
</script>

<style lang="scss">
  .search {
    display: flex;
    position: relative;
    justify-content: center;
    .suggestions-list {
      position: absolute;
      top: 20px;
    }
  }
</style>
