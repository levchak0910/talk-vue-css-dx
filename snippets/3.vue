<!-- SomeComponent.vue -->

<template>
  <div class="some-component--containe">
    <div
      v-for="group in groups"
      :key="group.id"
      class="component--group"
      :disabled="disabled"
      :class="{
        actve: group.id === id,
        interative,
        someExtraClassName: group.extra === extra
      }"
    >
      <span class="some-component__group-title some-component__group-title--bold">
        {{ group.titleBold }}
        <span class="some-compnent__group-subtitle">{{ group.subtitle }}</span>
      </span>
      <span class="someComponent--GroupTitle italic">
        {{ group.titleItalic }}
      </span>
    </div>
  </div>
</template>

<!-- 1 -->
<style lang="scss">
// 2
.some-component--container {
  top: 0;
  display: flex;
  position: relative;

  @media (width <= 700px) {
    /* ... */
  }

  div {
    span { /* ... */ }

    // 3
    p b {
      /* ... */
    }
  }
}

.component--group {
  &[disabled] { /* ... */ }
  // 4
  &.active { /* ... */ }
  // 5
  &.interactive { /* ... */ }
  &.someExtraClassName { /* ... */ }
}

.some-compnent {
  &__group-title {
    &--bold { /* ... */ }
  }
  &__group-subtile { /* ... */ }
}

.someComponent--GroupTitle {
  &.italic { /* ... */ }
}
</style>
