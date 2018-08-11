<template>
  <div id="container">
    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      Header,
    },
    created() {
      this.$store.dispatch('initializeStocks')
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }
</style>
