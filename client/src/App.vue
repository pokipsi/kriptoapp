<template>
    <v-app>
        <v-app-bar color="blue accent-4" dense dark>
            <v-toolbar-title>Kripto App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text to='/' class="ml-2">Coins</v-btn>
            <v-btn text to='/alerts' class="ml-2">Alerts</v-btn>
        </v-app-bar>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </v-app>
</template>
<script>
    export default {}
</script>
