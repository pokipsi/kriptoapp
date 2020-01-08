<template>
  <v-container :key="componentKey">
      <v-row>
        <v-col cols="12" lg="3" class="mx-auto">
          
          <FormAddAlert></FormAddAlert>

          <v-card v-if="loading" align="center" elevation="0">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-card>
          

          <v-card class="mx-auto mb-4" elevation="8" v-for="alert in alerts" :key="alert._id">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  <div v-if="alertToUpdate[alert._id]">
                    <v-row>

                      
                      <v-col cols="12" lg="6" md="6" sm="6">
                        <v-select
                            :items="[{name: 'Less than', value: 'lt'}, {name:'Greater than', value: 'gt'}]"
                            label="Type"
                            item-text="name"
                            item-value="value"
                            v-model="alertToUpdate[alert._id].type"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" lg="6" md="6" sm="6">
                        <v-text-field label="Enter value" v-model="alertToUpdate[alert._id].value"></v-text-field>
                      </v-col>

                    </v-row>
                    
                  </div>
                  <div v-else>
                    {{ display(alert) }}
                  </div>
                </v-list-item-title>
                
                <v-row>

                  <v-btn icon small text class="mr-auto ml-2" max-width="24" min-width="24" @click="updateStatus(alert)">
                    <v-icon :color="getStatusColor(alertToUpdate[alert._id])" v-if="alertToUpdate[alert._id]">{{ getStatusIcon(alertToUpdate[alert._id]) }}</v-icon>
                    <v-icon :color="getStatusColor(alert)" v-else>{{ getStatusIcon(alert) }}</v-icon>
                  </v-btn>

                  <div v-if="alertToUpdate[alert._id]">        
                      <v-btn small color="warning" class="ml-auto" max-width="120" @click="confirmUpdate(alertToUpdate[alert._id])">Save changes</v-btn>
                      <v-btn icon small text class="ml-2 mr-2" max-width="24" min-width="24" @click="clearAlertToUpdate(alert._id)"><v-icon>mdi-close</v-icon></v-btn>
                  </div>
                  
                  <div v-else>
                      <v-btn small color="primary" class="ml-auto" max-width="120" @click="setAlertToUpdate(alert)">Update</v-btn>
                      <v-btn icon small text class="ml-2 mr-2" max-width="24" min-width="24" @click="deleteAlert(alert._id)"><v-icon>mdi-delete</v-icon></v-btn>  
                  </div>

                </v-row>

                
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <v-snackbar v-model="snackbar">
            {{ snackbarText }}
            <v-btn
              color="white"
              text
              @click="snackbar = false">
              Close
            </v-btn>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

import { getSign } from '../utils';
import AlertsManager from '../alerts-manager';
import FormAddAlert from './FormAddAlert';

export default {
  name: 'alerts',
  components: { FormAddAlert },
  data(){
    return {
      alertToUpdate: {

      },
      componentKey: 0,
      snackbar: false,
      snackbarText: "",
      loading: false
    }
  },
  computed: {
    alerts() {
      return this.$store.getters.alerts;
    }
  },
  methods: {
    display(alert) {
      return `${getSign(alert.type)} ${alert.value} $`;
    },
    getStatusIcon(alert){
      return alert.status ? 'mdi-lightbulb-on' : 'mdi-lightbulb-off';
    },
    getStatusColor(alert){
      return alert.status ? 'green' : 'red';
    },
    updateStatus(alert){
      if(this.alertToUpdate[alert._id]){
        this.alertToUpdate[alert._id].status = !this.alertToUpdate[alert._id].status;
        this.componentKey += 1;
      }
    },
    setAlertToUpdate(alert){
      this.alertToUpdate[alert._id] = { ...alert };
      this.componentKey += 1;
    },
    clearAlertToUpdate(id){
      delete this.alertToUpdate[id];
      this.componentKey += 1;
    },
    getAlerts(){
      AlertsManager.get().then(data => {
        this.$store.commit('updateAlerts', { alerts: data.reverse()});
        this.loading = false;
      });
    },
    confirmUpdate(obj){
      this.snackbar = false;
      if(obj.type && obj.value){
        if(isNaN(obj.value)){
          this.snackbarText = "Value must be number (float)";
          this.snackbar = true;
          return;
        }
        AlertsManager.update(obj).then(() => {
          this.getAlerts();
          this.clearAlertToUpdate(obj._id);
          this.snackbarText = "Alert updated";
          this.snackbar = true;
        });
      }
    },
    deleteAlert(id){
      this.snackbar = false;
      if(confirm("Delete this alert?")){
        AlertsManager.delete(id).then(() => {
          this.getAlerts();
          this.snackbarText = "Alert deleted";
          this.snackbar = true;
        });
      }
    },
  },
  mounted(){
    this.loading = true;
    this.getAlerts();
  }
}
</script>
