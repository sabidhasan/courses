<template>
  <transition name='in'>
    <div v-if="true">
      <p>{{ quote }}</p>
      <span
        @click="$emit('delete')"
        class="delete"
      >
        X
      </span>
    </div>
  </transition>
</template>


<script>
  export default {
    props: ['quote']
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script');

  p {
    flex-grow: 1;
  }
  .delete {
    font-weight: bold; font-size: 2.4rem; cursor: pointer;
    align-self: flex-start; font-family: sans-serif;
  }
  div {
    background: orange; border-radius: 4px; padding: 5px 10px; font-size: 4rem;
    display: flex; border: 2px solid coral; font-family: 'Dancing Script', cursive;
    align-items: center;
  }
  div:hover {
    background: lightpink;
  }
  .in-enter-active {
    animation: fade-in 0.5s;
  }
  @keyframes fade-in {
    from {background: red; transform: scale(0);}
    50%  {transform: scale(1);}
    to   {background: orange}
  }
</style>
