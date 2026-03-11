<script setup>
import { ref } from 'vue'
import SnippetCard from './components/SnippetCard.vue'

const dummySnippet = ref({
  id: 1,
  title: 'HTML Boilerplate',
  tag: 'HTML',
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
})
</script>

<template>
  <main>
    <h1>Code Snippet Manager</h1>
    <SnippetCard :snippet="dummySnippet" />
  </main>
</template>

<style scoped lang="scss">
@use 'base';

main {
  margin: 45px 15vw 0;
  font-family: base.$default-font;
  color: base.$primary-color;

  > * {
    margin-bottom: 30px;
  }
}
</style>
