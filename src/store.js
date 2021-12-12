import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigation: [
      {
        code: 'home',
        label: 'Accueil',
        icon: 'cottage',
      },
      {
        code: 'team',
        label: 'Équipe',
        icon: 'people',
      },
      {
        code: 'activity',
        label: 'Activités & congés',
        icon: 'calendar_today',
      },
      {
        code: 'expenses',
        label: 'Notes de frais',
        icon: 'euro',
      },
    ],

    projects: {
      loading: false,
      loaded: false,
      data: null,
      error: false,
    },

    employees: {
      loading: false,
      loaded: false,
      data: null,
      error: false,
    },

    tasks: {
      loading: false,
      loaded: false,
      data: null,
      error: false,
    },

    affectations: {
      loading: false,
      loaded: false,
      data: null,
      error: false,
    },
  },

  mutations: {
    /*
     ** Projects
     */

    setProjectsLoading(state, value) {
      state.projects.loading = value
    },
    setProjectsLoaded(state, value) {
      state.projects.loaded = value
    },
    setProjectsData(state, value) {
      state.projects.data = value
    },
    setProjectsError(state, value) {
      state.projects.error = value
    },

    /*
     ** Employees
     */

    setEmployeesLoading(state, value) {
      state.employees.loading = value
    },
    setEmployeesLoaded(state, value) {
      state.employees.loaded = value
    },
    setEmployeesData(state, value) {
      state.employees.data = value
    },
    setEmployeesError(state, value) {
      state.employees.error = value
    },

    /*
     ** Tasks
     */

    setTasksLoading(state, value) {
      state.tasks.loading = value
    },
    setTasksLoaded(state, value) {
      state.tasks.loaded = value
    },
    setTasksData(state, value) {
      state.tasks.data = value
    },
    setTasksError(state, value) {
      state.tasks.error = value
    },

    /*
     ** Tasks Affectations
     */

    setAffectationsLoading(state, value) {
      state.affectations.loading = value
    },
    setAffectationsLoaded(state, value) {
      state.affectations.loaded = value
    },
    setAffectationsData(state, value) {
      state.affectations.data = value
    },
    setAffectationsError(state, value) {
      state.affectations.error = value
    },
  },
  actions: {
    loadData({ state, commit }, parameters) {
      if (state.projects.loaded || state.projects.loading) {
        return
      }
      if (state.employees.loaded || state.employees.loading) {
        return
      }
      if (state.tasks.loaded || state.tasks.loading) {
        return
      }
      if (state.affectations.loaded || state.affectations.loading) {
        return
      }

      axios
        .all([
          axios.get(
            'https://my-json-server.typicode.com/P4Thi0ut/workero/projects',
            {
              params: {},
            }
          ),
          axios.get(
            'https://my-json-server.typicode.com/P4Thi0ut/workero/employees',
            {
              params: {},
            }
          ),
          axios.get(
            'https://my-json-server.typicode.com/P4Thi0ut/workero/tasks',
            {
              params: {},
            }
          ),
          axios.get(
            'https://my-json-server.typicode.com/P4Thi0ut/workero/task_affectations',
            {
              params: {},
            }
          ),
        ])
        .then(
          axios.spread(function (response1, response2, response3, response4) {
            commit('setProjectsData', response1.data)
            commit('setProjectsLoaded', true)

            commit('setEmployeesData', response2.data)
            commit('setEmployeesLoaded', true)

            commit('setTasksData', response3.data)
            commit('setTasksLoaded', true)

            commit('setAffectationsData', response4.data)
            commit('setAffectationsLoaded', true)
          })
        )

        .catch(() => {
          commit('setProjectsError', true)
          commit('setEmployeesError', true)
          commit('setTasksError', true)
          commit('setAffectationsError', true)
        })
        .finally(() => {
          commit('setProjectsLoading', false)
          commit('setEmployeesLoading', false)
          commit('setTasksLoading', false)
          commit('setAffectationsLoading', false)
        })
    },
  },
})
