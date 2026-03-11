<script setup>
const props = defineProps(['snippet'])
</script>

<template>
  <section :class="props.snippet.isActive && 'snippet-active'">
    <h2>{{ props.snippet.title }}</h2>
    <span>{{ props.snippet.tag }}</span>
    <div>
      <pre>{{ props.snippet.content }}</pre>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '/src/base';

section {
  max-width: 45%;
  height: 190px;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  border: 2px solid base.$primary-color;
  border-radius: 10px;
  padding: 20px 30px;
}

.snippet-active {
  height: unset;
  max-width: unset;
}

span {
  background-color: base.$secondary-color;
  padding: 5px 8px;
  border-radius: 5px;
  color: base.$white;
  font-weight: bold;
}

div {
  border-radius: 10px;
  padding: 4px;
  overflow: hidden;
  width: 100%;
  color: base.$primary-color-soft;
  background-color: white;
}

pre {
  font-family: Courier, monospace;
  font-size: 0.9em;
}
</style>
