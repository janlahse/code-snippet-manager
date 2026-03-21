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
  padding: 2px 5px;
  border-radius: 5px;
  font-weight: bold;
  cursor: default;
}

.is-filter {
  background-color: white;
}

.is-not-filter {
  color: white;
}
</style>
