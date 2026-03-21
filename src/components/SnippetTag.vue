<script setup>
const props = defineProps(['tag', 'filter', 'currentFilter'])
</script>

<template>
  <span
    @click="props.filter && $emit('set-filter', props.tag.color)"
    :class="
      (props.filter && props.tag.color !== props.currentFilter ? 'is-filter ' : ' is-not-filter ') +
      props.tag.color
    "
    >{{ props.tag.name }}</span
  >
</template>

<style scoped lang="scss">
span {
  padding: 2px 5px;
  border-radius: 5px;
  font-weight: bold;
}

.is-filter {
  background-color: white;
}

.is-not-filter {
  color: white;
}
</style>
