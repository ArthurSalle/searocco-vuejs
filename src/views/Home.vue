<template>
  <div class="home custom-container">
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

<style lang="scss" scoped>
.home {
  &--title {
    font-size: 40px;
    color: var(--color-font);
    font-weight: 600;
  }

  &--subtitle {
    font-size: 24px;
    color: var(--color-gray);
    font-weight: 400;
  }

  &--card {
    margin-block: 32px;
  }
}
</style>
