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
    animation: move-in 80ms ease-out forwards;
  }
  .router-leave-active {
    animation: move-out 80ms ease-out forwards;
  }
  @keyframes move-in {
    from {transform: translateX(100%);}
    to {transform: translateX(0%);}
  }
  @keyframes move-out {
    from {transform: translateX(0%);}
    to {transform: translateX(-100%);}
  }
</style>
