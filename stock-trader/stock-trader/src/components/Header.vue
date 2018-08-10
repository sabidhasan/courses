<template>
  <nav>
    <ul>
      <li><router-link exact to="/" class="nav__brand">Stock Trader</router-link></li>
      <li><router-link exact to="/stocks">Stocks</router-link></li>
      <li><router-link exact to="/portfolio">Portfolio</router-link></li>
      <li><a>End Day</a></li>
      <li>
        <a>Save & Load v</a>
        <a>Save</a>
        <a>Load</a>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style scoped>
  .nav__brand {

  }
  .router-link-active {
    background: red;
  }
</style>
