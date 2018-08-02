<template>
  <form>
    <label for="inputQuote">Quote</label>
    <textarea v-model="inputQuote" id="inputQuote"></textarea>
    <button @click.prevent="addQuote()">Add quote</button>
  </form>
</template>

<script>
  export default {
    name: 'AddQuote',
    data() {
      return {
        inputQuote: 'Some text',
      }
    },
    methods: {
      addQuote() {
        if (!this.inputQuote) {
          alert('No quote entered!');
          return;
        } else if (this.quotes.length === 10) {
          alert('Too many quotes entered!')
          return;
        }
        this.quotes.push(this.inputQuote);
        this.inputQuote = '';
      }
    },
    props: {
      quotes: Array
    }
  }
</script>

<style scoped>
  form {
    display: grid; margin: 50px 0;
  }
  label {
    margin: 0; text-align: center; font-size: 1.9rem;
  }
  textarea {
    width: 50%; justify-self: center; height: 100px; border: 1px solid orange;
    margin: 10px 0; padding: 10px; border-radius: 5px;
  }
  button {
    border: 2px solid red; border-radius: 5px; padding: 10px; width: 25%;
    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.5); text-shadow: 1px 0 3px rgba(0,0,0, 0.15);
    background: linear-gradient(90deg, pink, coral); text-transform: capitalize; font-weight: bold;
    max-width: 170px; justify-self: center; font-size: 1.7rem;
  }
  button:active {
    background: linear-gradient(45deg, coral, pink);
    text-shadow: 1px 0 3px rgba(0,0,0, 0.35);
  }
</style>
