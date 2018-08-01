<template>
    <div class="container">
      <QuoteCounter :length="quotes.length"></QuoteCounter>
      <AddQuote :addQuote="addQuote"></AddQuote>
      <Quotes v-for="quote in quotes" :quote="quote"></Quotes>
      <Footer></Footer>
    </div>
</template>

<script>
  import QuoteCounter from './components/QuoteCounter.vue'
  import AddQuote from './components/AddQuote.vue'
  import Quotes from './components/Quotes.vue'
  import Footer from './components/Footer.vue'

  export default {
    data() {
      return {
        quotes: ['a', 'bb']
      }
    },
    methods: {
      addQuote(quote) {
        if (!quote) return;
        this.quotes.push(quote);
      }
    },
    components: {
      QuoteCounter,
      AddQuote,
      Quotes,
      Footer
    }
  }
</script>

<style>
</style>
