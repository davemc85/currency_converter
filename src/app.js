import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      euroEntry: 0,
      
      selectedCurrency: "",
      rates: {
      },
      totalEuro: 0,
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then((response) => response.json())
        .then((data) => this.rates = data.rates)
      }
    },
    computed: {
      euroToEntry: function(){
        console.log(this.euroEntry);
        console.log(selectedCurrency.rate);

        totalEuro = this.euroEntry * this.selectedCurrency.rates.value;
        return totalEuro;
      },
    }
  })
})
