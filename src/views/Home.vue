<template>
  <div class="home custom-container">
    <h1 class="home--title">Liste des projets</h1>
    <p class="home--subtitle ma-0">
      Vue d'ensemble de l'avancement des projets
    </p>
    <div class="home--card">
      <CardProject />
    </div>
  </div>
</template>

<script>
import CardProject from '../components/card-project.vue'

export default {
  name: 'page-home',
  components: {
    CardProject,
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
