<template>
  <div class="team custom-container">
    <div class="team--header">
      <h1 class="team--title">L'équipe</h1>
      <p class="team--subtitle">Vue d'ensemble des membres de l'équipe</p>
    </div>
    <TeamList />
  </div>
</template>

<script>
import TeamList from '../components/team-list.vue'
export default {
  name: 'page-team',
  components: {
    TeamList,
  },
}
</script>

<style lang="scss">
.team {
  &--header {
    margin-bottom: 32px;
  }

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
}
</style>
