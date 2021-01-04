<template>
  <nav>
    <ul>
      <router-link tag="li" class="nav__logo" exact to="/">Stock Trader</router-link>
      <router-link tag="li" exact to="/stocks">Stocks</router-link>
      <router-link tag="li" exact to="/portfolio">Portfolio</router-link>
      <li @click="endDay">End Day</li>
      <li
        class="nav__dropdown"
        :class="{'nav__dropdown--open': open}"
      >
        <a
          @click="open = !open"
          class="nav__dropdown-header"
        >
          Save & Load
          <span class="nav__dropdown-control">{{ open ? 'X' : '&#9663;' }}</span>
        </a>
        <a class="nav__dropdown-item" @click="saveData">
          {{ saving ? 'Saving' : 'Save'}}
          <span v-if="saving" class="saving">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </a>
        <a class="nav__dropdown-item" @click="loadData">Load</a>
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
        open: false,
        saving: false
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
      },
      loadData() {
        this.$store.dispatch('loadData')
      },
      saveData() {
        if (this.saving) return;

        this.saving = true;

        const dataToSave = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };

        fetch('https://stock-trader-6d6b4.firebaseio.com/stocks.json', {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(dataToSave)
        })
        .then(data => data.json())
        .then(() => this.saving = false)
        .catch(e => {
          alert('Could not save data at this time.');
          this.saving = false;
        })
      }
    }
  }
</script>

<style scoped>
  nav {
    background: lightgray; padding: 20px 8px; border: 1px solid darkgray;
    border-radius: 4px; font-size: 1.3rem;
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
    list-style: none; padding: 5px 10px; transition: all 0.2s;
  }
  .nav__logo.router-link-exact-active {
    border-bottom: none;
  }
  .nav__logo {
    font-size: 1.5rem; letter-spacing: 0.5px; flex: 1; font-weight: bold;
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
    transition: all 0.1s; background-color: darkgray; border: 1px solid;
    max-height: 100em!important; box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  }
  .nav__dropdown-control {
      font-family: sans-serif;
  }
  .nav__static, .nav__static:hover {
    background: none; cursor: default;
  }

  @keyframes blink {
    0% { opacity: .2; }
    20% { opacity: 1; }
    100% { opacity: .2; }
  }
  .saving span {
    animation: blink 1.4s infinite; animation-fill-mode: both;
  }
  .saving span:nth-child(2) {
    animation-delay: .2s;
  }
  .saving span:nth-child(3) {
    animation-delay: .4s;
  }

  @media screen and (max-width:700px) {
    .nav__static { display: none; }
    nav {font-size: 0.7rem; font-weight: bold; }
  }


  .router-link-active {
    border-bottom: 4px solid gray;
  }
</style>
