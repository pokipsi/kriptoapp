<template>
  <v-row>
    <v-col cols="12" lg="4">
      <v-text-field label="Enter value" v-model="newOne.value"></v-text-field>
    </v-col>
    <v-col cols="12" lg="4">
      <v-select
        :items="[{name: 'Less than', value: 'lt'}, {name:'Greater than', value: 'gt'}]"
        label="Type"
        item-text="name"
        item-value="value"
        v-model="newOne.type"
      ></v-select>
    </v-col>
    <v-col cols="12" lg="4" class="my-auto">
      <v-btn small @click="addAlert()">Add alert</v-btn>
    </v-col>
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}
      <v-btn
        color="white"
        text
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-row>
</template>

<script>

import AlertsManager from '../alerts-manager';

export default {
  data() {
    return {
      newOne: {},
      snackbar: false,
      snackbarText: ""
    };
  },
  props: {
    onSubmit: Function
  },
  methods: {
    addAlert() {
      this.snackbar = false;
      if (this.newOne.type && this.newOne.value) {
        if (isNaN(this.newOne.value)) {
          this.snackbarText = "Value must be number (float)";
          this.snackbar = true;
          return;
        }
        AlertsManager.insert(this.newOne).then(() => {
          this.newOne = {};  
          AlertsManager.get().then(data => {
            this.$store.commit('updateAlerts', { alerts: data.reverse()});
            this.snackbarText = "Alert saved";
            this.snackbar = true;
          });
        });
      } else {
        this.snackbarText = "Enter value and select type";
        this.snackbar = true;
      }
      
    }
  }
};
</script>