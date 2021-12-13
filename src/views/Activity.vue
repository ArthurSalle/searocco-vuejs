<template>
  <div class="custom-container">
    <Header :title="title" :subtitle="subtitle" />
  </div>
</template>

<script>
import Header from '../components/header.vue'

export default {
  name: 'page-activity',
  components: {
    Header,
  },

  data() {
    return {
      title: 'Activités et congés',
      subtitle: "Vue d'ensemble de l'activité et des congés",
    }
  },
}
</script>
