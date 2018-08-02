<template>
    <div class="container">
      <QuoteCounter :length="quotes.length"></QuoteCounter>
      <AddQuote :quotes="quotes"></AddQuote>
      <div class="quotes">
        <Quote
          v-for="(quote, index) in quotes"
          :quote="quote"
          v-on:delete="deleteQuote(index)"
        >
        </Quote>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import QuoteCounter from './components/QuoteCounter.vue'
  import AddQuote from './components/AddQuote.vue'
  import Quote from './components/Quote.vue'

  export default {
    data() {
      return {
        quotes: ['a', 'bb']
      }
    },
    methods: {
      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      QuoteCounter,
      AddQuote,
      Quote,
    }
  }
</script>

<style>
  .quotes {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    grid-gap: 15px; margin: 10px 0;
  }
  .container {
    margin: 50px auto; padding: 0;
  }
</style>
