<template>
  <div>
    <div
      v-if="projectsModel.loaded && employeesModel.loaded"
      class="d-flex flex-wrap"
    >
      <v-card
        class="card mr-8 rounded-lg pa-4"
        min-width="250"
        v-for="(project, i) in projectsModel.data"
        :key="i"
      >
        <v-card-text class="py-0">
          <h5 class="card--title text-h5 font-weight-bold">
            {{ project.code }}
          </h5>
          <div class="card--details">
            <p class="card--details_content">
              Statut:
              <span class="card--values">{{
                project.status === 'IN_PROGRESS' ? 'En cours' : 'Terminé'
              }}</span>
            </p>
            <p class="card--details_content">
              Tâches: <span class="card--values">{{ project.nb_tasks }}</span>
            </p>
            <p class="card--details_content">
              Personnes:
              <span class="card--values">{{ project.nb_workers }}</span>
            </p>
            <p class="card--details_content">
              Complétion:
              <span class="card--values"
                >{{ Math.trunc(project.completion) }}%</span
              >
            </p>
          </div>
        </v-card-text>
        <div class="d-flex align-center px-4">
          <v-list
            v-for="(employee, i) in employeesModel.data.slice(0, 3)"
            :key="i"
            class="card--avatar py-0 rounded-circle"
          >
            <v-list-item-avatar class="ma-0">
              <v-img
                :alt="employee.firstname"
                :src="employee.profile_picture"
                class="ma-0"
              ></v-img>
            </v-list-item-avatar>
          </v-list>
          <p class="card--count mb-0 ml-3">+ 3</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-project',

  created() {
    this.$store.dispatch('loadData')
  },
  computed: {
    projectsModel() {
      return this.$store.state.projects
    },
    employeesModel() {
      return this.$store.state.employees
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &--title {
    color: var(--color-font);
  }

  &--details {
    margin-block: 24px;

    &_content {
      margin: 0;
      font-size: 16px;
    }
  }

  &--values {
    color: var(--color-font);
    font-weight: 600;
  }

  &--avatar:first-child {
    z-index: 10;
  }

  &--avatar:nth-child(2) {
    z-index: 5;
  }

  &--avatar:nth-child(n + 2) {
    margin-left: -10px;
  }

  &--count {
    color: var(--color-gray);
  }
}
</style>
