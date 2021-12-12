<template>
  <div>
    <div class="task"></div>
    <v-list v-if="tasksModel.loaded">
      <v-list-item-group>
        <v-list-item link v-for="(task, i) in tasksModel.data" :key="i">
          <!-- <v-list-item-icon>
            <v-icon class="material-icons-outlined" color="var(--color-font)">
              {{ nav.icon }}
            </v-icon>
          </v-list-item-icon> -->
          <v-list-item-title>
            {{ task.label }}
          </v-list-item-title>
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
  },
}
</script>

<style lang="scss" scoped></style>
