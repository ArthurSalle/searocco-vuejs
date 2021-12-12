<template>
  <div v-if="employeesModel.loaded" class="d-flex flex-wrap">
    <v-card
      max-width="250"
      class="mr-8 mb-8 rounded-lg"
      v-for="(employee, i) in employeesModel.data"
      :key="i"
    >
      <v-img height="100%" dark src="../assets/building.png">
        <v-col align-self="start" class="pa-0">
          <v-avatar size="125" tile>
            <v-img
              :alt="employee.firstname"
              :src="employee.profile_picture"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ employee.firstname }} {{ employee.lastname }}
              </v-list-item-title>
              <v-list-item-subtitle>Workero</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'team-list',

  created() {
    this.$store.dispatch('loadData')
  },
  computed: {
    employeesModel() {
      return this.$store.state.employees
    },
  },
}
</script>
