<script setup>
const props = defineProps(['snippet'])
const emit = defineEmits(['set-editing', 'safe', 'delete', 'cancel'])
const colors = ['blue', 'red', 'green', 'orange', 'black']

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
  <form class="snippet-active" @submit.prevent="safeChanges">
    <div class="row-2">
      <input
        required
        :value="props.snippet.title"
        class="title-input"
        name="snippetTitle"
        placeholder="Enter a title for your snippet here"
        maxlength="20"
      />
      <button
        type="reset"
        @click="props.snippet.title ? emit('set-editing', null) : emit('cancel')"
      >
        Cancel
      </button>
      <button type="submit">Safe</button>
    </div>
    <div class="tag-form">
      <input
        required
        :value="props.snippet.tag.name"
        name="tagName"
        placeholder="Add a colored tag"
        maxlength="15"
      />
      <div>
        <input
          required
          v-for="(color, index) in colors"
          :key="index"
          type="radio"
          name="tagColor"
          :value="color"
          :checked="color === props.snippet.tag.color"
          :class="'color-input ' + color"
        />
      </div>
    </div>
    <textarea
      required
      rows="10"
      :value="props.snippet.content"
      name="snippetContent"
      placeholder="Your code snippet goes here"
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
  width: 100%;
}

.tag-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
  }
}

.color-input {
  appearance: none;
  height: 1.3em;
  aspect-ratio: 1;
  border-radius: 50%;
  &:checked {
    background-color: base.$white;
  }
}

textarea {
  width: 100%;
  max-height: 100%;
  color: base.$primary-color-soft;
  font-family: Courier, monospace;
  font-size: 0.9em;
  resize: none;
}
</style>
