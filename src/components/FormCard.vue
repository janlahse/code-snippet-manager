<script setup>
import { ref } from 'vue'

const props = defineProps(['snippet'])

const active = ref(false)
</script>

<template>
  <section :class="active && 'snippet-active'">
    <h2>FormCard{{ props.snippet.title }}</h2>
    <button @click="active = !active">{{ active ? 'Collapse' : 'Expand' }}</button>
    <span>{{ props.snippet.tag }}</span>
    <div>
      <pre>{{ props.snippet.content }}</pre>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '/src/base';

section {
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  border: 2px solid base.$primary-color;
  border-radius: 10px;
  padding: 20px 30px;
}

.snippet-active {
  grid-column: 1/-1;
  height: unset;
}

span {
  background-color: base.$secondary-color;
  padding: 5px 8px;
  border-radius: 5px;
  color: white;
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
