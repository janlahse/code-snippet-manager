<script setup>
import { ref } from 'vue'
import SnippetCard from './components/SnippetCard.vue'

const snippetsList = ref([
  {
    id: 1,
    title: 'HTML Boilerplate',
    tag: 'HTML',
    isActive: true,
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
    id: 2,
    title: 'CSS Reset',
    tag: 'CSS',
    isActive: false,
    content: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}`,
  },
  {
    id: 3,
    title: 'CSS Reset',
    tag: 'CSS',
    isActive: true,
    content: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}`,
  },
  {
    id: 4,
    title: 'HTML Boilerplate',
    tag: 'HTML',
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
</script>

<template>
  <main>
    <h1>Code Snippet Manager</h1>
    <section class="displayedSnippets">
      <SnippetCard v-for="snippet in snippetsList" :key="snippet.id" :snippet="snippet" />
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
  padding: 45px 15vw 0;
  font-family: base.$default-font;
  color: base.$primary-color;

  > * {
    margin-bottom: 30px;
  }
}

.displayedSnippets {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
