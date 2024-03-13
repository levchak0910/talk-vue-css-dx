<!-- SomeComponent.vue -->

<template>
  <div class="some-component--container">
    <div
      v-for="group in groups"
      :key="group.id"
      class="some-component--group"
      :disabled="disabled"
      :class="{
        active: group.id === id,
        interactive,
        'some-extra-class-name': group.extra === extra
      }"
    >
      <span class="some-component--group-title bold">
        {{ group.titleBold }}
        <span class="some-component--group-subtitle">{{ group.subtitle }}</span>
      </span>
      <span class="some-component--group-title italic">
        {{ group.titleItalic }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.some-component--container {
  top: 0;
  display: flex;
  position: relative;

  @media (width <= 700px) {
    /* ... */
  }
}

.some-component--group {
  &[disabled] { /* ... */ }
  &.active { /* ... */ }
  &.interactive { /* ... */ }
  &.some-extra-class-name { /* ... */ }
}

.some-component--group-title {
  &.bold { /* ... */ }
  &.italic { /* ... */ }
}

.some-component--group-subtitle {
  /* ... */
}
</style>
