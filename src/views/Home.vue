<template>
  <div class="custom-container">
    <ProjectList />
  </div>
</template>

<script>
import ProjectList from '../components/project-list.vue'

export default {
  name: 'page-home',

  components: {
    ProjectList,
  },
}
</script>
