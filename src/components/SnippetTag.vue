<script setup>
const props = defineProps(['tag'])
</script>

<template>
  <span :class="props.tag.color">{{ props.tag.name }}</span>
</template>

<style scoped lang="scss">
span {
  padding: 5px 8px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}
</style>
