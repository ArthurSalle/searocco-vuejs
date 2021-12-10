<template>
  <v-app>
    <left-drawer />

    <v-main class="main">
      <top-bar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script type="text/javascript">
import leftDrawer from '@/components/left-drawer'
import topBar from '@/components/top-bar'

export default {
  props: {},
  components: {
    leftDrawer,
    topBar,
  },
  data() {
    return {}
  },
  methods: {},
  beforeDestroy() {},
}
</script>

<style lang="scss">
.main {
  background-color: var(--color-bg-blue);
}
</style>
