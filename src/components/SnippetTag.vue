<script setup>
const props = defineProps(['tag', 'filter', 'currentFilter'])
</script>

<template>
  <span
    @click="props.filter && $emit('set-filter')"
    :class="
      ((props.filter && props.tag.color !== props.currentFilter.color) ||
      (props.filter && props.tag.name !== props.currentFilter.name)
        ? 'is-filter '
        : ' is-not-filter ') + props.tag.color
    "
    >{{ props.tag.name }}</span
  >
</template>

<style scoped lang="scss">
span {
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: bold;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.is-filter {
  background-color: white;
  cursor: pointer;
}

.is-not-filter {
  color: white;
}
</style>
