<template>
  <div class="header">
    <h1 class="header--title">
      {{ title }}<span class="header--title_thin">{{ span }}</span>
    </h1>
    <p class="header--subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    span: String,
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 32px;

  &--title {
    font-size: 40px;
    color: var(--color-font);
    font-weight: 600;

    &_thin {
      font-weight: 400;
    }
  }

  &--subtitle {
    font-size: 24px;
    color: var(--color-gray);
    font-weight: 400;
  }
}
</style>
