<template>
  <div class="team custom-container">
    <h1 class="team--title">L'équipe</h1>
    <p class="team--subtitle">Vue d'ensemble des membres de l'équipe</p>
    <div class="team--card">
      <CardTeam />
    </div>
  </div>
</template>

<script>
import CardTeam from '../components/card-team.vue'
export default {
  name: 'page-team',
  components: { CardTeam },
}
</script>

<style lang="scss">
.team {
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
