<script setup>
import SnippetTag from './SnippetTag.vue'

const props = defineProps(['snippet'])
</script>

<template>
  <section :class="props.snippet.isActive ? 'snippet-active' : ''">
    <div>
      <h2>Form{{ props.snippet.title }}</h2>
      <button @click="$emit('set-show')">
        {{ props.snippet.isActive ? 'Collapse' : 'Expand' }}
      </button>
      <button @click="$emit('set-editing', null)">Cancel</button>
    </div>
    <SnippetTag :tag="snippet.tag" />
    <div class="snippet-content-container">
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

.snippet-content-container {
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
