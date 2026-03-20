<script setup>
const props = defineProps(['snippet'])
const emit = defineEmits(['set-editing', 'safe', 'set-show'])

function safeChanges(e) {
  const updatedSnippet = {
    title: e.target.snippetTitle.value,
    tag: {
      name: e.target.tagName.value,
      color: e.target.tagColor.value,
    },
    isActive: props.snippet.isActive,
    content: e.target.snippetContent.value,
  }
  emit('safe', updatedSnippet)
  emit('set-editing', null)
}
</script>

<template>
  <form :class="props.snippet.isActive ? 'snippet-active' : ''" @submit.prevent="safeChanges">
    <div>
      <input :value="props.snippet.title" class="title-input" name="snippetTitle" />
      <button @click.prevent="$emit('set-show')">
        {{ props.snippet.isActive ? 'Collapse' : 'Expand' }}
      </button>
      <button type="reset" @click="$emit('set-editing', null)">Cancel</button>
      <button type="submit">Safe</button>
    </div>
    <input :value="props.snippet.tag.name" name="tagName" />
    <input :value="props.snippet.tag.color" name="tagColor" />
    <textarea
      :value="props.snippet.content"
      name="snippetContent"
      class="snippet-content-container"
    ></textarea>
  </form>
</template>

<style scoped lang="scss">
@use '/src/base';

form {
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

.title-input {
  font-size: 1.5em;
  font-family: unset;
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
