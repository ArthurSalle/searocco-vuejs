<template>
  <div class="task">
    <v-list
      v-if="tasksModel.loaded && employeesModel.data"
      class="pa-0"
      color="transparent"
    >
      <v-list-item-group class="d-flex flex-column">
        <v-list-item
          link
          v-for="(task, i) in tasksModel.data"
          :key="i"
          class="mb-4 white"
        >
          <v-icon color="var(--color-gray)">drag_handle</v-icon>
          <v-alert
            v-if="task.type === 'DEVELOPMENT'"
            text
            color="info"
            class="py-1 mb-0 ml-4"
          >
            dév.
          </v-alert>
          <v-alert v-else text color="error" class="py-1 mb-0 ml-4">
            bug
          </v-alert>
          <v-list-item-title class="ml-4">
            {{ task.label }}
          </v-list-item-title>
          <v-list class="d-flex">
            <v-list-item-avatar
              class="task--avatar my-0 ml-0 mr-0"
              v-for="(employee, i) in getAffectations(task)"
              :key="i"
              size="35"
            >
              <v-img
                :alt="employee.fistname"
                :src="employee.profile_picture"
                class="ma-0"
              ></v-img>
            </v-list-item-avatar>
          </v-list>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'task-list',
  props: {
    projectId: Number,
  },

  created() {
    this.$store.dispatch('loadData')
  },

  computed: {
    tasksModel() {
      return this.$store.state.tasks
    },
    employeesModel() {
      return this.$store.state.employees
    },
    affectationsModel() {
      return this.$store.state.affectations
    },
  },

  methods: {
    getAffectations(task) {
      return this.affectationsModel.data
        .filter((affectation) => {
          if (affectation.task_id === task.id) {
            return true
          }
        })
        .map((employee) => {
          return this.employeesModel.data.find(
            (e) => e.id === employee.employee_id
          )
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.task {
  max-width: 1024px;
  width: 100%;

  &--avatar:first-child {
    z-index: 10;
  }

  &--avatar:nth-child(2) {
    z-index: 5;
  }

  &--avatar:nth-child(3) {
    z-index: 3;
  }

  &--avatar:nth-child(n + 2) {
    margin-left: -10px !important;
  }
}
</style>
