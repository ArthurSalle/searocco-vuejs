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

    /*
     ** Project models
     ** loading : request had been sent, waiting for response
     ** loaded : data is loaded
     ** data : actual data retrieved from API
     ** error : last fetch resulted in an error
     */

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
  },
  actions: {
    loadData({ state, commit }, parameters) {
      if (state.projects.loaded || state.projects.loading) {
        return
      }
      if (state.employees.loaded || state.employees.loading) {
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
        ])
        .then(
          axios.spread(function (response1, response2) {
            commit('setProjectsData', response1.data)
            commit('setProjectsLoaded', true)
            console.log(response1.data)
            commit('setEmployeesData', response2.data)
            commit('setEmployeesLoaded', true)
            console.log(response2.data)
          })
        )

        .catch(() => {
          commit('setProjectsError', true)
          commit('setEmployeesError', true)
        })
        .finally(() => {
          commit('setProjectsLoading', false)
          commit('setEmployeesLoading', false)
        })
    },
  },
})
