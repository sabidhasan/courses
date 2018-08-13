<template>
  <div id="container">
    <Header />
    <transition name="router" mode="out-in" appear>
      <router-view/>
    </transition>
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
  @import url('https://fonts.googleapis.com/css?family=Lato');

  * {
    box-sizing: border-box; font-family: 'Lato', sans-serif;
  }
  body {
    padding: 30px;
  }
  .router-enter-active {
    animation: move-in 50ms ease-out forwards;
  }
  .router-leave-active {
    animation: move-in 50ms reverse;
  }
  @keyframes move-in {
    from {transform: translateY(-100%); opacity: 1}
    to {transform: translateY(0%); opacity: 0}
  }
</style>
