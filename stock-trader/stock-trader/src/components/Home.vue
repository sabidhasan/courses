<template>
  <div>
    <h1>Trade or View Portfolio</h1>
    <h2>Save or load Data</h2>
    <h2>Click on 'End Day' to start a new day</h2>
    <p>Your funds: ${{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style scoped>

</style>
