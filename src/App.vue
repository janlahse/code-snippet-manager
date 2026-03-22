<script setup>
import { computed, ref } from 'vue'
import SnippetCard from './components/SnippetCard.vue'
import FormCard from './components/FormCard.vue'
import SnippetTag from './components/SnippetTag.vue'
import { emptysnippet, snippets } from './data'

const snippetsList = ref(snippets)
const emptySnippet = emptysnippet
const editedSnippetIndex = ref(null)
const addingSnippet = ref(false)
const tagFilter = ref({ name: '', color: '' })
const searchString = ref('')

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

const filteredSnippets = computed(() => {
  const regex = new RegExp(RegExp.escape(searchString.value), 'i')
  const searchedList = snippetsList.value.filter(
    (snippet) => snippet.title.match(regex) || snippet.content.match(regex),
  )

  if (tagFilter.value.name === '') return searchedList
  else
    return searchedList.filter(
      (snippet) =>
        snippet.tag.name === tagFilter.value.name && snippet.tag.color === tagFilter.value.color,
    )
})

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

function setFilter(tag) {
  if (tag.color === tagFilter.value.color && tag.name === tagFilter.value.name)
    tagFilter.value = { name: '', color: '' }
  else tagFilter.value = tag
}
</script>

<template>
  <main>
    <h1>Code Snippet Manager</h1>
    <button @click="addingSnippet = true" type="button">New Snippet</button>
    <p>
      <label for="search-input">Search: </label
      ><input @keyup.enter.esc="(e) => e.target.blur()" v-model="searchString" id="search-input" />
    </p>
    <div class="row-2">
      <span>Tags:</span>
      <SnippetTag
        v-for="(tag, index) in tagList"
        :tag="tag"
        :key="index"
        :currentFilter="tagFilter"
        :filter="true"
        @set-filter="setFilter(tag)"
      />
    </div>
    <section class="displayedSnippets">
      <FormCard
        v-if="addingSnippet"
        :snippet="emptySnippet"
        @cancel="addingSnippet = false"
        @safe="addSnippet"
      />
      <component
        :is="index === editedSnippetIndex ? FormCard : SnippetCard"
        v-for="(snippet, index) in filteredSnippets"
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
  padding: 4px 6px;
  border-radius: 5px;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s ease;
  &:hover {
    background-color: #ddd;
  }
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

input,
textarea {
  font-family: inherit;
  border-radius: 3px;
  border: 1px solid black;
  padding: 2px 4px;
}

.row-1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  h2 {
    word-break: break-all;
  }
}

.row-2 {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
