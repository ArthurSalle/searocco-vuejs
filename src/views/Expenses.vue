<template>
  <div class="custom-container">
    <Header :title="title" :subtitle="subtitle" />
  </div>
</template>

<script>
import Header from '../components/header.vue'

export default {
  name: 'page-expenses',
  components: {
    Header,
  },

  data() {
    return {
      title: 'Notes de frais',
      subtitle: "Vue d'ensemble des dépenses",
    }
  },
}
</script>
