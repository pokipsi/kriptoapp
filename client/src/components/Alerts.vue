<template>
  <v-app :key="componentKey">
    <v-container>
      <v-row>
        <v-col cols="12" lg="3" class="mx-auto">

          <v-spacer class="mt-4"></v-spacer>

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
          </v-row>

          <v-card class="mx-auto mb-4" elevation="8" v-for="alert in alerts" :key="alert._id">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                  <div v-if="alertToUpdate[alert._id]">
                    <v-row>

                      <v-col cols="12" lg="4">
                        <v-text-field label="Enter value" v-model="alert.value"></v-text-field>
                      </v-col>
                      <v-col cols="12" lg="4">
                        <v-select
                            :items="[{name: 'Less than', value: 'lt'}, {name:'Greater than', value: 'gt'}]"
                            label="Type"
                            item-text="name"
                            item-value="value"
                            v-model="alert.type"
                        ></v-select>
                      </v-col>

                    </v-row>
                    
                  </div>
                  <div v-else>
                    {{ getSign(alert.type) }} {{ alert.value }}$
                  </div>
                </v-list-item-title>
                
                <v-row v-if="alertToUpdate[alert._id]">
                  
                    <v-btn small color="warning" class="ml-auto" max-width="120" @click="confirmUpdate(alert)">Save changes</v-btn>
                    <v-btn icon small text class="ml-2 mr-2" max-width="24" min-width="24" @click="clearAlertToUpdate(alert._id)"><v-icon>mdi-close</v-icon></v-btn>
                  
                </v-row>
                
                <v-row v-else>
                  
                    <v-btn small color="primary" class="ml-auto" max-width="120" @click="setAlertToUpdate(alert._id)">Update</v-btn>
                    <v-btn icon small text class="ml-2 mr-2" max-width="24" min-width="24" @click="deleteAlert(alert._id)"><v-icon>mdi-delete</v-icon></v-btn>  
                  
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>

          <v-spacer class="mb-4"></v-spacer>
        </v-col>
      </v-row>
    </v-container>
  

</v-app>
</template>

<script>
export default {
  name: 'alerts',
  data(){
    return {
      alerts: [],
      newOne: {},
      alertToUpdate: {

      },
      componentKey: 0
    }
  },
  methods: {
    confirmUpdate(obj){
      if(obj.type && obj.value){
        if(isNaN(obj.value)){
          alert("Value must be number (float)");
          return;
        }
        fetch(`/api/alerts/${obj._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value: parseFloat(obj.value),
            type: obj.type
          })
        }).then(response => response.json()).then(() => {
          this.getAlerts();
          this.clearAlertToUpdate(obj._id);
        });  
      }
    },
    setAlertToUpdate(id){
      this.alertToUpdate[id] = true;
      this.componentKey += 1;
    },
    clearAlertToUpdate(id){
      delete this.alertToUpdate[id];
      this.componentKey += 1;
    },
    addAlert(){
      if(this.newOne.type && this.newOne.value){
        if(isNaN(this.newOne.value)){
          alert("Value must be number (float)");
          return;
        }
        fetch('/api/alerts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value: parseFloat(this.newOne.value),
            type: this.newOne.type
          })
        }).then(response => response.json()).then(() => {
          this.newOne = {};
          this.getAlerts();
        });  
      }else{
        alert("Enter value and select type");
      }
    },
    getAlerts(){
      fetch('/api/alerts').then(response => response.json()).then(json => {
        this.alerts = json;
      });
    },
    deleteAlert(id){
      if(confirm("Delete this alert?")){
        fetch(`/api/alerts/${id}`, {
          method: 'DELETE'
        }).then(response => response.json()).then(() => {
          this.getAlerts();
        });
      }
    },
    getSign(type){
      return type == 'lt' ? '<' : '>';
    }
  },
  mounted(){
    this.getAlerts();
  }
}
</script>
