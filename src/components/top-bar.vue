<template>
  <v-app-bar
    id="top-bar"
    color="var(--color-bg-blue)"
    elevate-on-scroll
    fixed
    app
  >
    <v-btn id="btn" min-width="0">
      <v-icon color="var(--color-gray)">search</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn id="btn" min-width="0">
      <v-icon color="var(--color-gray)">settings</v-icon>
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
#btn {
  padding: 8px;
}
</style>
