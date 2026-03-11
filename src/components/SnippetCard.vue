<script setup>
const props = defineProps(['snippet'])
</script>

<template>
  <section>
    <h2>{{ props.snippet.title }}</h2>
    <pre>{{ props.snippet.content }}</pre>
  </section>
</template>

<style scoped lang="scss">
@use '/src/base';

section {
  display: inline-block;
  border: 2px solid base.$primary-color;
  border-radius: 10px;
  padding: 20px 40px;
}
</style>
