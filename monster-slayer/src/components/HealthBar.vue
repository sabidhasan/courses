<template>
  <div class='healthbar'>
    <div class="healthbar__filler" v-bind:style="{width: computedHealth}"></div>
    <span>{{ health }}</span>
  </div>
</template>

<script>
export default {
  name: 'HealthBar',
  computed: {
    computedHealth: function () {
      return this.health + '%'
    }
  },
  props: {
    health: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style scoped>
  .healthbar {
    width: 100%; height: 30px; border: 1px solid black;
    display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr;
  }
  .healthbar__filler {
    background: red; transition: all 0.2s; height: 99%; width: 100%;
    grid-column: 1; grid-row: 1;
  }
  span {
    grid-column: 1; grid-row: 1; font-weight: bold;
    display: flex; align-items: center; justify-content: center;
  }
</style>
