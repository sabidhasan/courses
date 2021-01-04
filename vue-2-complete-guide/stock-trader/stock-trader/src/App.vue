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

  input {
    font-size: 1.4rem; padding: 2px 5px; border: 1px solid black; border-radius: 4px;
    margin: 8px 5px; height: 35px;
  }
  button {
    padding: 5px 10px; background: gray; color: black; font-weight: bold; font-size: 1.1rem;
    border-radius: 4px; margin: 8px 5px; height: 35px; float: right;
  }
  button:disabled {
    background: lightgray; opacity: .5
  }
</style>
