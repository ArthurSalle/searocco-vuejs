<template>
  <div class="custom-container">
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

  data() {
    return {
      title: "L'équipe",
      subtitle: "Vue d'ensemble des membres de l'équipe",
    }
  },
}
</script>
