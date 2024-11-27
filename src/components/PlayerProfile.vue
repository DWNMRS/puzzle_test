<template>
  <div v-if="player">
    <h1>{{ player.name }}</h1>
    <p>Информация о игроке{{ player.name }} </p>
  </div>
</template>

<script>
import { players } from '../data';

export default {
  data() {
    return {
      player: null
    };
  },
  created() {
    const playerId = parseInt(this.$route.params.id, 10);
    this.player = players.find(player => player.id === playerId);
  }
};
</script>
