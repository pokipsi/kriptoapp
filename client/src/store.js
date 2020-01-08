import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        alerts: [],
        coins: {}
    },
    getters: {
        alerts(state) {
            return state.alerts;
        },
        coins(state) {
            return state.coins;
        }
    },
    mutations: {
        updateAlerts(state, payload) {
            state.alerts = payload.alerts;
        },
        updateCoins(state, payload) {
            state.coins = payload.coins;
        }
    },
    actions: {}
});

export default store;