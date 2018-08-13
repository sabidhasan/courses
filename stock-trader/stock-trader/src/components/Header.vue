<template>
  <nav>
    <ul>
      <li class="nav__logo"><router-link exact to="/">Stock Trader</router-link></li>
      <router-link tag="li" exact to="/stocks">Stocks</router-link>
      <router-link tag="li" exact to="/portfolio">Portfolio</router-link>
      <li @click="endDay">End Day</li>
      <li
        @click="open = !open"
        class="nav__dropdown"
        :class="{'nav__dropdown--open': open}"
      >
        <a class="nav__dropdown-header">
          Save & Load
          <span class="nav__dropdown-control">{{ open ? 'X' : '&#9663;' }}</span>
        </a>
        <a class="nav__dropdown-item">Save</a>
        <a class="nav__dropdown-item">Load</a>
      </li>
      <li class="nav__static">{{ funds | currencyFormat }}</li>
    </ul>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        'open': false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions(['randomizeStocks']),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>

<style scoped>
  nav {
    background: lightgray; padding: 20px 8px; border: 1px solid darkgray;
    border-radius: 4px;
  }
  nav, nav a {
    color: black; text-decoration: none;
  }
  ul {
    margin: 0; padding: 0; display: flex; align-items: center; height: 1.3em;
  }
  ul > li:hover {
    cursor: pointer; background: darkgray;
  }
  ul > li {
    list-style: none; padding: 5px 10px;
  }
  .nav__logo {
    font-size: 1.5rem; letter-spacing: 0.5px; flex: 1;
  }
  .nav__logo:hover {
    background: none;
  }
  .nav__dropdown {
    max-height: 1.1em; overflow: hidden; transition: all 0.1s; z-index: 99;
    padding: 0 15px; display: flex; flex-direction: column;
    align-self: flex-start;
  }
  .nav__dropdown-item {
    display: block; padding: 10px 6px; background: darkgray;
  }
  .nav__dropdown-item:hover {
    background-color: lightgray; cursor: pointer;
  }
  .nav__dropdown-header {
    border-bottom: 1px solid; padding: 0 14px 10px 14px;
  }
  .nav__dropdown--open {
    transition: all 0.1s; background-color: darkgray;
    max-height: 100em!important;
  }
  .nav__dropdown-control {
      font-family: sans-serif;
  }
  .nav__static, .nav__static:hover {
    background: none; cursor: default;
  }

  .router-link-active {
    border-bottom: 4px solid gray;
  }
</style>
