<template>
  <v-app-bar
    id="top-bar"
    color="var(--color-bg-blue)"
    elevate-on-scroll
    fixed
    app
    class="my-4 mx-6 pa-0"
  >
    <v-btn class="pa-2" min-width="0">
      <v-icon color="var(--color-gray)">search</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn class="pa-2" min-width="0">
      <v-icon color="var(--color-gray) " class="material-icons-outlined">
        settings
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script type="text/javascript">
export default {
  props: {},
  data() {
    return {}
  },
  beforeCreate() {},
  created() {},
  methods: {},
  beforeDestroy() {},
}
</script>

<style lang="scss">
#top-bar {
  z-index: 100;
}
</style>
