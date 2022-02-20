<template>
  <ul class="items-list">
    <li v-for="item in items" :key="item.id" class="items-list__item">
      <slot :item="item">{{ item.id }}</slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps<{
    items: Record<'id', number>[];
  }>();
</script>

<style lang="scss">
  .items-list {
    padding: 0;
    list-style: none;
  }
</style>
