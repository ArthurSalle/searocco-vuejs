<template>
  <SlickList axis="y" v-model="taskList">
    <SlickItem v-for="(task, i) in taskList" :key="i" :index="i">
      <v-list class="pa-0" elevation="1">
        <v-list-item class="mb-4" style="cursor: pointer">
          <v-list-item-icon>
            <v-icon color="var(--color-gray)">drag_handle</v-icon>
          </v-list-item-icon>

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

          <v-list-item-content class="ml-10">
            <v-list-item-title>{{ task.label }}</v-list-item-title>
          </v-list-item-content>

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
        </v-list-item>
      </v-list>
    </SlickItem>
  </SlickList>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'

export default {
  name: 'task-list',

  props: {
    projectId: Number,
    codeName: String,
  },

  components: {
    SlickList,
    SlickItem,
  },

  data() {
    return {
      taskList: [],
    }
  },

  created() {
    this.$store.dispatch('loadData')
  },

  mounted() {
    this.taskList = this.$store.state.tasks.data
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
