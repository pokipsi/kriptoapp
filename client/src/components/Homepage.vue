<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-if="loading" align="center" elevation="0">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-card>
        <v-card class="mx-auto mb-4" min-width="344" max-width="344" elevation="8" v-for="coin in coins" :key="coin.id">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ coin.symbol }} ({{ coin.id }})</div>
                <v-list-item-title class="headline mb-1">{{ coin.name }}</v-list-item-title>
                <v-list-item-subtitle>$ {{ coin.quote.USD.price.toFixed(2) }}</v-list-item-subtitle>
                <v-btn small v-if="coin.id == 1" color="primary" class="ml-auto" max-width="100" :to="`/detail/${coin.id}`">Details</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>



export default {
  name: 'homepage',
  data(){
    return {
      loading: false
    }
  },
  computed: {
    coins() {
      return this.$store.getters.coins;
    }
  },
  methods: {
    getCoins(){
      const endpoint   = "/api/coins";
      fetch(endpoint).then(response => response.json()).then(json => {
          this.$store.commit('updateCoins', { coins: json.data});
          this.loading = false;
      });
    }
  },
  mounted(){
    this.loading = true;
    this.getCoins();
  },
  }
</script>
