<template>
    <div class="container">
      <h1>Quotes</h1>
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
        quotes: ['Camping is the best thing you can do ;)']
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
  h1 {
    text-align: center; margin: 0 0 25px 0; font-weight: 900; font-size: 5rem;
  }
  .quotes {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
    grid-gap: 15px; margin: 10px 0;
  }
  .container {
    margin: 50px auto; padding: 0;
  }
</style>
