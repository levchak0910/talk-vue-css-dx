<!-- SomeComponent.vue -->

<template>
  <div class="some-component--container">
    <div
      v-for="group in groups"
      :key="group.id"
      class="component--group"
      :disabled="disabled"
      :class="{
        active: group.id === id,
        interactive,
        someExtraClassName: group.extra === extra
      }"
    >
      <span class="some-component__group-title some-component__group-title--bold">
        {{ group.titleBold }}
        <span class="some-component__group-subtitle">{{ group.subtitle }}</span>
      </span>
      <span class="someComponent--GroupTitle italic">
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

  // 3
  div {
    span { /* ... */ }
  }
}

// 1
.component--group {
  &[disabled] { /* ... */ }
  &.active { /* ... */ }
  &.interactive { /* ... */ }
  // 2
  &.someExtraClassName { /* ... */ }
}

.some-component {
  &__group-title {
    &--bold { /* ... */ }
  }
  &__group-subtitle { /* ... */ }
}

// 4
.someComponent--GroupTitle {
  &.italic { /* ... */ }
}
</style>
