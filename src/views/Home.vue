<template>
  <div class="home container">
    <h1 class="home--title">Liste des projets</h1>
    <p class="home--subtitle">Vue d'ensemble de l'avancement des projets</p>
    <div class="home--card">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '../components/card.vue'

export default {
  name: 'page-home',
  components: {
    Card,
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
