<script setup>
import { ref } from 'vue'
import SnippetTag from './SnippetTag.vue'
import SnippetMenu from './SnippetMenu.vue'

const emit = defineEmits(['delete', 'set-show', 'set-editing', 'move-snippet'])
const props = defineProps(['snippet', 'index'])
const deleteCheck = ref(false)

function onDelete() {
  emit('delete', props.index)
  deleteCheck.value = false
}

function copyToClipboard() {
  navigator.clipboard.writeText(props.snippet.content)
}
</script>

<template>
  <section :class="props.snippet.isActive ? 'snippet-active' : ''">
    <div>
      <h2>{{ props.snippet.title }}</h2>
      <SnippetMenu @move-snippet="(direction) => $emit('move-snippet', direction, props.index)" />
      <button @click="$emit('set-show')">
        {{ props.snippet.isActive ? 'Collapse' : 'Expand' }}
      </button>
      <button @click="$emit('set-editing', props.index)">Edit</button>
      <div v-if="deleteCheck">
        <p>
          Delete this snippet? <button @click="onDelete">Yes</button>
          <button @click="deleteCheck = false">No</button>
        </p>
      </div>
      <button v-else @click="deleteCheck = true">Delete</button>
      <button @click="copyToClipboard">Copy</button>
    </div>
    <SnippetTag :tag="props.snippet.tag" />
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
