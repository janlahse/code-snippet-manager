<script setup>
import { computed, ref } from 'vue'
import SnippetCard from './components/SnippetCard.vue'
import FormCard from './components/FormCard.vue'
import SnippetTag from './components/SnippetTag.vue'

const snippetsList = ref([
  {
    title: 'HTML Boilerplate',
    tag: { name: 'HTML', color: 'blue' },
    isActive: false,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello, world!</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="icon" href="favicon.png">
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`,
  },
  {
    title: 'CSS Reset',
    tag: { name: 'CSS', color: 'red' },
    isActive: false,
    content: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}`,
  },
  {
    title: 'CSS Reset',
    tag: { name: 'Java', color: 'green' },
    isActive: false,
    content: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}`,
  },
  {
    title: 'HTML Boilerplate',
    tag: { name: 'HTML', color: 'blue' },
    isActive: false,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello, world!</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="icon" href="favicon.png">
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`,
  },
])

const editedSnippetIndex = ref(null)

const tagList = computed(() => {
  const allTags = snippetsList.value.map((snippet) => snippet.tag)
  const uniqueTags = []
  if (allTags.length > 0) uniqueTags.push(allTags[0])
  allTags.forEach((tag) => {
    let isInList = false
    uniqueTags.forEach((uniqueTag) => {
      if (uniqueTag.color === tag.color && uniqueTag.name === tag.name) isInList = true
    })
    if (!isInList) uniqueTags.push(tag)
  })
  return uniqueTags
})

const addingSnippet = ref(false)

const emptySnippet = {
  title: '',
  tag: { name: '', color: '' },
  isActive: false,
  content: '',
}

function addSnippet(newSnippet) {
  snippetsList.value.unshift(newSnippet)
  editedSnippetIndex.value = null
  addingSnippet.value = false
}

function deleteSnippet(index) {
  snippetsList.value = snippetsList.value.filter(
    (snippet) => index !== snippetsList.value.indexOf(snippet),
  )
  editedSnippetIndex.value = null
}

function moveSnippet(direction, index) {
  const temp = snippetsList.value[index]
  if (
    direction === 'up' &&
    index > 0 &&
    index !== editedSnippetIndex.value &&
    index - 1 !== editedSnippetIndex.value
  ) {
    snippetsList.value[index] = snippetsList.value[index - 1]
    snippetsList.value[index - 1] = temp
  }
  if (
    direction === 'down' &&
    index < snippetsList.value.length - 1 &&
    index !== editedSnippetIndex.value &&
    index + 1 !== editedSnippetIndex.value
  ) {
    snippetsList.value[index] = snippetsList.value[index + 1]
    snippetsList.value[index + 1] = temp
  }
}
</script>

<template>
  <main>
    <h1>Code Snippet Manager</h1>
    <button @click="addingSnippet = true" type="button">New Snippet</button>
    <p>
      Tags:
      <SnippetTag v-for="(tag, index) in tagList" :tag="tag" :key="index" />
    </p>
    <section class="displayedSnippets">
      <FormCard
        v-if="addingSnippet"
        :snippet="emptySnippet"
        @cancel="addingSnippet = false"
        @safe="addSnippet"
      />
      <component
        :is="index == editedSnippetIndex ? FormCard : SnippetCard"
        v-for="(snippet, index) in snippetsList"
        :key="index"
        :snippet="snippet"
        :index="index"
        @set-editing="(i) => (editedSnippetIndex = i)"
        @delete="deleteSnippet"
        @set-show="snippet.isActive = !snippet.isActive"
        @safe="(currentSnippet) => (snippetsList[index] = currentSnippet)"
        @move-snippet="moveSnippet"
      />
    </section>
  </main>
</template>

<style lang="scss">
@use 'base';

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: base.$white;
}

main {
  padding: 30px 10% 0;
  font-family: base.$default-font;
  color: base.$primary-color;

  > * {
    margin-bottom: 30px;
  }
}

button {
  border: none;
  background-color: white;
  border-radius: 3px;
  padding: 3px 5px;
  margin-right: 5px;
}

.displayedSnippets {
  display: grid;
  grid-template-columns: 100%;
  gap: 15px;
  @media (min-width: 600px) {
    grid-template-columns: calc(50% - 7.5px) calc(50% - 7.5px);
  }
  @media (min-width: 900px) {
    grid-template-columns: calc((100% / 3) - 10px) calc((100% / 3) - 10px) calc((100% / 3) - 10px);
  }
}
</style>
