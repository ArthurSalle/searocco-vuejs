<template>
  <v-app-bar
    class="topbar px-6"
    color="var(--color-bg-blue)"
    elevate-on-scroll
    fixed
    app
  >
    <v-btn class="pa-2" min-width="0">
      <v-icon color="var(--color-gray)">search</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <div class="d-flex align-center">
      <v-btn class="pa-2" min-width="0">
        <v-icon color="var(--color-gray)" class="material-icons-outlined">
          settings
        </v-icon>
      </v-btn>

      <v-badge top color="var(--color-font)" dot overlap>
        <v-btn
          class="pa-2 ml-4 font-weight-bold"
          color="indigo lighten-4"
          min-width="0"
          elevation="0"
          :ripple="false"
        >
          AS
        </v-btn>
      </v-badge>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Arthur Sallé</v-list-item-title>
          <v-list-item-subtitle>arthursalle.pro@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
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

<style lang="scss" scoped>
.topbar {
  z-index: 100;
}
</style>
