<script setup>
const emit = defineEmits(['move-snippet'])
</script>

<template>
  <svg @click="emit('move-snippet', 'up')" class="icon" viewBox="0 0 122.88 122.433">
    <polygon
      points="0,61.217 63.673,122.433 63.673,83.029 122.88,83.029 122.88,39.399 63.673,39.399 63.673,0 0,61.217"
    />
  </svg>
  <svg @click="emit('move-snippet', 'down')" class="icon" viewBox="0 0 122.88 122.433">
    <polygon
      points="122.88,61.217 59.207,122.433 59.207,83.029 0,83.029 0,39.399 59.207,39.399 59.207,0 122.88,61.217"
    />
  </svg>
</template>

<style scoped lang="scss">
@use '/src/base';
.icon {
  width: 20px;
  height: 20px;
  fill: base.$primary-color;
  margin-right: 5px;
}
</style>
