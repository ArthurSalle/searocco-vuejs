<template>
  <v-navigation-drawer id="left-drawer" permanent app>
    <v-list>
      <v-list-item class="px-2">
        <img alt="Workero logo" src="@/assets/logo.png" />
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list class="nav" nav dense>
      <v-list-item-group color="primary" v-model="selectedItem">
        <v-list-item
          link
          v-for="(nav, i) in navigation"
          :key="i"
          @click="gotoPage(nav.code)"
          class="nav--link"
        >
          <v-list-item-icon>
            <v-icon class="material-icons-outlined" color="var(--color-font)">
              {{ nav.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-title class="nav--title text-body-2">
            {{ nav.label }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      selectedItem: 0,
    }
  },

  computed: {
    navigation() {
      return this.$store.state.navigation
    },
  },

  methods: {
    gotoPage(pageCode) {
      this.$router.push({ name: `${pageCode}Page` })
    },
  },
}
</script>

<style lang="scss">
.nav {
  margin-top: 32px;

  &--link {
    margin-top: 8px;
    margin-inline: 16px;
  }

  &--title {
    color: var(--color-gray);
  }
}
</style>
