<script setup>
const props = defineProps(['snippet'])
</script>

<template>
  <section>
    <h2>{{ props.snippet.title }}</h2>
    <span>HTML</span>
    <pre>{{ props.snippet.content }}</pre>
  </section>
</template>

<style scoped lang="scss">
@use '/src/base';

section {
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  border: 2px solid base.$primary-color;
  border-radius: 10px;
  padding: 20px 30px;
}

span {
  background-color: base.$secondary-color;
  padding: 5px 8px;
  border-radius: 5px;
  color: base.$white;
  font-weight: bold;
}
</style>
