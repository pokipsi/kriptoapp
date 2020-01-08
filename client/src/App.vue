<template>
    <v-app>
        <v-app-bar color="blue accent-4" dense dark fixed :elevate-on-scroll="true">
            <v-toolbar-title>Kripto App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu :offset-x="false" :offset-y="true" v-model="menuState">
                <template v-slot:activator="{ on }">
                    <v-btn max-width="32" min-width="32" depressed text v-on="on" @click="onMenuClick()" :disabled="newNotificationsCount == 0">
                        <v-badge color="red" :content="newNotificationsCount" v-if="newNotificationsCount > 0" offset-y="15">
                            <v-icon  color="blue darken-4">mdi-alert-box</v-icon>
                        </v-badge>
                        <span v-else><v-icon color="blue darken-4">mdi-alert-box</v-icon></span>
                    </v-btn>
                </template>
                <v-list min-width="200" max-height="300" v-if="notifications.length > 0">
                    <v-list-item v-for="n in notifications" :key="n.id">
                    <v-list-item-title>{{n.title}}</v-list-item-title>
                    <v-divider></v-divider>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text to='/' class="ml-2">Coins</v-btn>
            <v-btn text to='/alerts' class="ml-2">Alerts</v-btn>
        </v-app-bar>
        <v-card min-height="48" max-height="48"></v-card>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <audio ref="notification-sound">
            <source src="/notification.ogg" type="audio/ogg">
            Your browser does not support the audio element.
        </audio>
    </v-app>
</template>
<script>

    import { getSign } from './utils';

    const socket = window.socket;
    export default {
        data(){
            return {
                notifications: [],
                newNotificationsCount: 0,
                menuState: false,
                audio: null
            }
        },
        methods: {
            onMenuClick(){
                if(!this.menuState){
                    this.newNotificationsCount = 0;
                }
            }
        },
        mounted(){
            socket.on("alerts", response => {
                const { display, currentPrice, all } = response.data;
                display.forEach(obj => {
                    this.notifications.unshift({
                        title: `BTC price is: ${currentPrice}, ${getSign(obj.type)} ${obj.value}`
                    });
                    if(!this.menuState){
                        this.newNotificationsCount += 1;
                        this.$refs['notification-sound'].play();
                    }    
                });
                this.$store.commit('updateAlerts', { alerts: all.reverse()});
            });
            socket.on("coins", response => {
                console.log(response);
                console.log(response.data);
                const coins = response.data;
                this.$store.commit('updateCoins', { coins: coins});
            });
        },
        created(){
            this.newNotificationsCount = this.notifications.length;
        }
    }
</script>
