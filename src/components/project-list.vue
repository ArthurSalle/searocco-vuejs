<template>
  <div class="project">
    <div v-if="projectsModel.loaded && employeesModel.loaded">
      <Header :title="title" :subtitle="subtitle" />

      <div class="d-flex flex-wrap mb-8">
        <v-card
          class="card mr-8 mb-8 rounded-lg pa-4"
          min-width="250"
          v-for="(project, i) in projectsModel.data"
          :key="i"
          @click="onClick(i, project.id, project.code)"
          :class="{ active: isActiveEl == i }"
          :ripple="false"
          style="cursor: pointer"
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
            <p class="card--count mb-0 ml-3">
              + {{ employeesModel.data.length - 3 }}
            </p>
          </div>
        </v-card>
      </div>
    </div>

    <div v-if="projectsModel.loaded && employeesModel.loaded">
      <div v-if="tasksModel.data[isActiveEl].project_id === projectId">
        <Header :title="codeName" :span="span" :subtitle="subtitleTask" />
        <TaskList :project-id="projectId" :code-name="codeName" />
      </div>

      <div v-else>
        <Header :title="codeName" :span="span" :subtitle="subtitleTask" />
        <v-alert dense type="info" max-width="500px" class="mt-15 text-center">
          Ce projet ne contient pas de tâches pour le moment
        </v-alert>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/task-list.vue'
import Header from './header.vue'

export default {
  name: 'project-list',

  components: {
    TaskList,
    Header,
  },

  data() {
    return {
      isActiveEl: 0,
      codeName: '#BLE627',
      projectId: 1,
      title: 'Liste des projets',
      span: ' | Priorisation des tâches',
      subtitle: "Vue d'ensemble de l'avancement des projets",
      subtitleTask: "Quel est le planning pour aujourd'hui ?",
    }
  },

  methods: {
    onClick(i, id, code) {
      this.isActiveEl = i
      this.codeName = code
      this.projectId = id
    },
  },

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
    tasksModel() {
      return this.$store.state.tasks
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  transition: all 0.2s ease-in-out;
  border: solid transparent 4px;

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

.active {
  border: solid var(--color-font) 4px;
}
</style>
