<template>
  <div>
    <input type="text" v-model="query" @input="onInputDebounced" @keydown.down="onArrowDown" @keydown.up="onArrowUp" @keydown.enter="onEnter" placeholder="Поиск по игрокам">
    <AutoSuggest :suggestions="suggestions" :highlightIndex="highlightIndex" @select="onSelect" v-if="showSuggestions"/>
  </div>
</template>

<script>
import { players } from '../data';
import AutoSuggest from './AutoSuggest.vue';
import _ from 'lodash';

export default {
  components: {
    AutoSuggest
  },
  data() {
    return {
      query: '',
      suggestions: [],
      showSuggestions: false,
      highlightIndex: -1
    };
  },
  created() {
    this.onInputDebounced = _.debounce(this.onInput, 300);
  },
  methods: {
    onInput() {
      if (this.query.length >= 3) {
        this.suggestions = players.filter(player => player.name.toLowerCase().includes(this.query.toLowerCase())).slice(0, 10);
        this.showSuggestions = true;
        this.highlightIndex = -1;
      } else {
        this.showSuggestions = false;
      }
    },
    onArrowDown() {
      if (this.highlightIndex < this.suggestions.length - 1) {
        this.highlightIndex++;
      }
    },
    onArrowUp() {
      if (this.highlightIndex > 0) {
        this.highlightIndex--;
      }
    },
    onEnter() {
      if (this.highlightIndex >= 0 && this.highlightIndex < this.suggestions.length) {
        this.onSelect(this.suggestions[this.highlightIndex]);
      }
    },
    onSelect(player) {
      this.$router.push({ name: 'profile', params: { id: player.id } });
      this.query = '';
      this.showSuggestions = false;
    }
  }
};
</script>
