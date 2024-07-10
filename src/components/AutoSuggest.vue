<template>
  <ul>
    <li v-for="(suggestion, index) in suggestions" :key="suggestion.id" :class="{ 'highlight': index === highlightIndex }" @click="select(suggestion)">
      {{ suggestion.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    suggestions: Array,
    highlightIndex: Number
  },
  methods: {
    select(suggestion) {
      this.$emit('select', suggestion);
    }
  }
};
</script>

<style scoped>
.highlight {
  background-color: #ddd;
}
</style>
