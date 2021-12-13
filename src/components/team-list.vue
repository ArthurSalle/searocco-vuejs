<template>
  <div v-if="employeesModel.loaded">
    <Header :title="title" :subtitle="subtitle" />

    <div class="team d-flex flex-wrap">
      <v-card
        max-width="250"
        class="team--card mr-8 mb-8 rounded-lg"
        v-for="(employee, i) in employeesModel.data"
        :key="i"
      >
        <v-img height="100%" dark src="../assets/desk.png">
          <v-col align-self="start" class="pa-0">
            <v-avatar size="125" tile>
              <v-img
                :alt="employee.firstname"
                :src="employee.profile_picture"
              ></v-img>
            </v-avatar>
          </v-col>

          <v-col class="team--content py-0">
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
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  name: 'team-list',

  components: { Header },

  data() {
    return {
      title: "L'équipe",
      subtitle: "Vue d'ensemble des membres de l'équipe",
    }
  },

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

<style lang="scss">
.team {
  &--content {
    background-color: rgba(184, 184, 184, 0.4);
  }
}
</style>
