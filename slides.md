---
layout: center
class: text-right
transition: slide-left
drawings:
  presenterOnly: true
addons:
  - slidev-addon-eslint-editor-vue
mdc: true
---

# ~~New~~ Old way to write CSS

#### but with _better_ **DX**

---

```yaml
layout: center
```

# We are going to talk about

- Vue
- CSS
- Tools

---

```yaml
layout: two-cols
```

<template v-slot:default>
<div class="flex flex-col justify-center items-center h-full">
<img
  class="w-75 rounded-full"
  src="https://avatars.githubusercontent.com/u/37511777?v=4"
  />
  <h2 class="mt-4">Levcsák Sándor</h2>
</div>
</template>

<template v-slot:right>

<h1 class="mt-20">About me</h1>
<VClicks class="text-xl flex flex-col justify-center gap-4 mt-10">

- <mdi-vuejs class="text-green-400" /> <mdi-language-typescript class="text-blue-600" /> **Front-end developer**
- <mdi-source-pull /> Open-source contributor
- <mdi-github /> <https://github.com/levchak0910>
- <mdi-linkedin /> <https://linkedin.com/in/levchak0910>

</VClicks>
</template>

---

```yaml
layout: two-cols
transition: fade
```

# Vue SFC

<<< @/components/vue-sfc.vue{all|1-8|10-13|15-20|all}

<template v-slot:right>
  <div class="h-full flex items-center ml-10">
    <VueSfc class="w-full" />
  </div>
</template>

---

```yaml
zoom: 0.42
transition: fade
```

<<< @/snippets/1.vue

---

```yaml
zoom: 2
transition: fade
```

<<< @/snippets/1.vue#unformatted-css css {1,3,5,7}

---

```yaml
layout: center
class: text-center
```

# Formatter

<br>

[Go to demo](https://stylelint.io/demo/#N4Igxg9gJgpiBcIA8BCAtGgBAZQgWxgGF8AHCAOxnIBcA6ANwFcZMMA+AHXK6WpjxIAbAIZ9O5TJiRQAlvUxgRAZyUBeDiCX4YaSAIpVqGSDWEzKG8ZMnS5Xa9fpoAZhABO6kAHM3ERiUxzTB8-EiUNewdMeABrGABPTxD-WhkoCIkoxWEVTz0yShoMZJIMqOjZJWEAI0EYKE9Kmrr0kEiHeGzcjWB2qOEwanoYeGDfFLTMVWnAqAAaPodzPjdRORgFzPKtAgBRAA9qVcJlJQA5YQJRktoYQ9Wpmbuj4UXMAF8y6ysopCUSYQSLpqDQ7HT5Aw0AD6UJKaGoMmodUwYN0pEh1BhcIRSJ0aGqEEErR+5WAwDGoVoOLqACFCVAPp8tr9-oCFKdPKj8oVMbDxiQ0EpGNVqTBLGSKSkhSLEcj3u8kAB6VnkEnWJUqtU2FXsnIgzTaYj6HkYADi-IAKrKWIjhIIZGBLG9JBKbqKAJLUO0OxlvDUA1V9JWyeg-YNycRKvgCERiLg8JTUeLIkTkLycsAqJ3kWhc9EmtGmcwwNyYcnUCAkUYABgA3JFKkJhPFRs46vt68zJGQlIiZBRRm4YLH1p2uAABAiyYTlWdz+cLxdL5cr1dr9cbzeLgAUeGE+zQAHc0tQABajADs1erJH2AEoy5FFQAqTC0d+YZ+KrhMhxMri5toaLGoYxgUF6xalr0mQho+zI6tBf59AEiFRNUZaYC+b4fl+Hzxsyv54eQ-45hCBYlHBkgAGQANpNLU9QALoYVh760J+ipEdRtADAiwwsa+bEcVxmBUakNAlrx6wCdh7G4YRYlggcLwnHqFwEDJQnyT++GAQQwEkDylGiVi-LwtaxnURgBJEppOGcYRCmmaEgrCgiyLkqx9lESRelEPmoFoOaoRWrixliba9pgHZckOTp5AakmdTiCAcwgM4Mh1OpcCIHclxCDADDMKl4AUBlXgICAqEaM8VBQOECCYDRfSgklw7LIW5WCl65BQMIbitJsDitcm7VFCYXVDnoBC9fUaBMGKqUtZobX2uNZUyF4aBTfgM2wFA83MMqmYNZsHDUOdGjjomyYyImDrKqtHUTZtXyMUNmAaG4jB1A1oyoZIGjkBAaBQP4UWiDoSjDjAgzuH9mDkD9ggfYDpWCO4aCnncaB1GmZ4aKMGgY2mGio596OY+Qlz1ITFOUMMbhk8t0N1HDbhoKIRwyNUjB8GgACOjAQHwCMaHah7NqdLMw+zaDA4LjDes48TmFtSYkItoxI4IKPLc4jDkIM-bkGgjBuIIisizAYsgBLUvM8yGiuEUziXJl8TyzTVui3T4uCJL8RKEe2NDttsO7XVtNLU7pV4DNRiHqeiI2wCYA6OYvawH7dsBw7MfDXHCdoPwJBJrjxb4jArhDjnDMlo7hffXUJcCOXa06NU1fuFrTX+4Hwd4D9CIVxYqWPiAm3A7XjXNXbzgrMBCdkxTGVuIm8s23wrSMe873LQrsBKOnvVq4KmtgDIGWX0mdM63rses7DFYc3uB4QobB1P+zCP3+ToKyxfroU4aAATUBWNwRqf8ZZsyARrHQCtDYxGBoeSBowjjMH-iAEgvhNZuHLog8gyCICoLphgjYMDn6YzCDARgUAQYw2LoQ4hpDGrkKwbAbIqwEQUHliDGQ+h8GAgumw76FDY6QAxhzA2RseGm2Bl6OROc6heAGPERu1hQSnncGeQEB0cGVhLAQkGQ4wa9WEfNO0zBf7IywbUCAYAYh8NbmXdRUDbHLSnDIYQLgYCiHNjoVYaYEEizWBQHOODq4yH2BotG10kp3QRGARUXifHOD8dQAJaISbnwGDoYQC8G6NX7vnLB8Tbr3WSak3x-iw6SN4aydOVca69yBjARmsSKblPtJUlJ9RvE1MyWHAEQ4aDY2hsHRpGdyBZ1aSAeuTMC6aJAN0xJD1RDbR+gg72UzOaFMWUTXOA9BRqxbh3L4TJ3glRel4AAYu4Pc1BKoACstDkBKrAMIlVqorVGmtERhzYxbw0SNOo-zOqbW6no-qrRAWQ0TCC7BEBEwnSxtQPAghlHwpER9UFY0jA3PDtNKOB0FpYtFjiyIV0bo9KSY9P5z0NpeHJcCpZeLwWEp2vHElgoTosoRW0YiIB3hAA)

<br>

<div v-click>

```bash
npx stylelint --fix "**/*.vue"
```

or

```bash
npx prettier --write .
```

</div>

---

```yaml
layout: center
class: text-center
```

# Linter

<br>

[Go to demo](https://stylelint.io/demo/#N4Igxg9gJgpiBcIA8BCAtGgBAZQgWxgGF8AHCAOxnIBcA6ANwFcZMMA+AHXK6WpjxIAbAIZ9O5TJiRQAlvUxgRAZyUBeDiCX4YaSAIpVqGSDWEzKG8ZMnS5Xa9fpoAZhABO6kAHM3ERiUxzTB8-EiUNewdMeABrGABPTxD-WhkoCIkoxWEVTz0yShoMZJIMqOjZJWEAI0EYKE9Kmrr0kEiHeGzcjWB2qOEwanoYeGDfFLTMVWnAqAAaPodzPjdRORgFzPKtAgBRAA9qVcJlJQA5YQJRktoYQ9Wpmbuj4UXMAF8y6ysopCUSYQSLpqDQ7HT5Aw0AD6UJKaGoMmodUwYN0pEh1BhcIRSJ0aGqEEErR+5WAwDGoVoOLqACFCVAPp8tr9-oCFKdPKj8oVMbDxiQ0EpGNVqTBLGSKSkhSLEcj3u8kAB6VnkEnWJUqtU2FXsnIgzTaYj6HkYADi-IAKrKWIjhIIZGBLG9JBKbqKAJLUO0OxlvDUA1V9JWyeg-YNycRKvgCERiLg8JTUeLIkTkLycsAqJ3kWhc9EmtGmcwwNyYXqZagQEijAAMAG5IpUhMJ4qNnHV9g3MmQlIiZBRRm4YLH1l3IgABAiyYSYAAUeGE+zQAHc0tQABajADsNZrJH2AEoy31FQAqTC0S+YU+KyJMplcXPaNHGwzGChe4ul8uSEPH5k6j+1gPsyARAQ41RlpgZ4XleN4fH0TKSPe8Y5hCBYlP+kgAGQANpNLU9QALpQTBl60NeioIZk2G0AMCLDKR57kZR1E4akNAlvR6xMbBFHwUhmC0WCBwvCceoXAQvEsQJXAgU+BAviQPJYUJWL8vC1qqThGAEkS0lwVRgmCdh6mhIKwoIsi5JkYZ1HyWCRoFG+aDmqEVq4qptG2vaYAGfxRlyTwypJnU4ggHMIDODIdSSXAiB3JcQgwAwzAReAFDRV4CAgHg0CMHUtz7GQbjUEoUyqRozxUFA4QIJguF9KCoXDsshZZYKXrkFAwhuK0mwOM1yatUUJgdUOegEN19RoEwYoRU1mgtfao2ZTIXhoBN+BTbAUCzcwyqZnVmwcNQp0aOOibJjIiYOiFw0rUYY3rV8REDZgGhuAVMB1aM4EfSA5AQGgUD+L5og6Eow4wIM7i-ZgRzMO9kiKlRoLQ7Dbi6KcaAAtQKzcPVGgAHqzrhwhoAAXgAgmgABaREANSzmg5NU7TDOMweAD8B7MyzaA82TFM0-TTMs2zouczzfMHgAJBoyMAwuS6ULdaYgzAJAbhoowAEx3nJ6XPV4ABi7gLtQOUAFZKOlsBhDlQFDXUj26wDsY-WdC2ZC7I1PWtG2JoCPV9e7Gie4miuRBoPbUEdaDrtQeCCOHICR9771+497XrZtMPbTVM1zWnGfR77ICXaFN0ImA92u21JulxDUc+5I2eN4H+eTUXe1KEdzd8K3RvvEAA)

<br>

<div v-click>

```bash
npx stylelint --fix "**/*.vue"
```

but mostly: you **fix it manually**

</div>

---

```yaml
layout: center
class: text-center
```

### Extend linting with

<br>

<v-click>

# **ESLint**

</v-click>

<p v-click class="!text-blue-900 font-bold text-xl">

[eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)

</p>

<br>

<div class="flex flex-col justify-center items-center" v-click>

![Yosuke Ota](https://avatars.githubusercontent.com/u/16508807?v=4)

Yosuke Ota _aka_ [@ota-meshi](https://github.com/ota-meshi)

</div>

---

<ESLintVueEditor :rules="{ 
  'vue-scoped-css/enforce-style-type': ['error', { 'allows': ['scoped'] }],
  'vue-scoped-css/no-unused-selector': ['error', { 'checkUnscoped': true }]
}">

<<< @/snippets/3.vue

</ESLintVueEditor>

---

<a href="https://github.com/future-architect/eslint-plugin-vue-scoped-css" target="_blank">

![vue-scoped-css image](https://opengraph.githubassets.com/ef62b067a1b66e1d7e0826e95a5cec725fafac0e144496c1e4c0f0b4aaf4c3a3/future-architect/eslint-plugin-vue-scoped-css)

</a>

---

```yaml
layout: center
class: text-center
```

# Hmmm, something wrong

---

```yaml
layout: center
```

### Naming convention{.text-center}

<br>

<v-click>

# BEM{.text-center}

- Block - encapsulates a standalone entity.
- Element - parts of a block.
- Modifier - flags on blocks or elements that change appearance, behavior or state.

</v-click>

<v-click>

```scss
.card__title {
  /* ... */

  &--bold {
    /* ... */
  }
}
```

</v-click>

---

```yaml
layout: center
```

# Problems of BEM in Vue projects

<v-clicks>
  <ol class="flex flex-wrap">
    <li class="w-1/3"> too verbose </li>
    <li class="w-1/3"> cause CSS nesting hell </li>
    <li class="w-1/3"> do not prevent style leaks </li>
    <li class="w-1/3"> increase learning curve </li>
    <li class="w-full font-bold text-2xl text-red-400"> NOT LINTED </li>
  </ol>
</v-clicks>

```vue {all|2,6|12-17|all}{at:1}
<template>
  <span class="some-component__group-title some-component__group-title--bold">
    {{ group.titleBold }}
    <span
      class="some-component__group-subtitle"
      :class="{ 'some-component__group-subtitle--active': active }"
    >{{ group.subtitle }}</span>
  </span>
</template>

<style lang="scss">
.some-component {
  &__group-title {
    &--bold { /* ... */ }
  }
  &__group-subtitle { /* ... */ }
}
</style>
```

---

```yaml
layout: center
```

# VKCN (vue kebab class naming){.text-center.mb-1}

<v-click>

Class names should follow pattern **\<prefix>\-\-\<element>**, where:

- prefix - used to give a scope for all elements used within one component.
- element - any custom name which appropriately describes DOM element.

</v-click>

<v-click>

State of the element can be extended with modifiers, attributes and pseudo-classes:

- **&\[disabled]** - for attributes
- **&:hover** - for pseudo-classes
- **&.active** - for custom states

</v-click>

<br>

```html {all|4|1,5,6|all}{at:1}
<span class="some-component--group-title bold">
  {{ group.titleBold }}
  <span
    class="some-component--group-subtitle"
    :class="{ active, 'some-extra-class': extra }"
    :disabled="disabled"
  >{{ group.subtitle }}</span>
</span>
```

---

<ESLintVueEditor
  filename="SomeComponent.vue"
  :rules="{
    '@vkcn/no-convention-violation': ['error', { enableFix: true }],
    '@vkcn/no-dynamic-class-names': 'error',
    '@vkcn/no-undefined-class-names': 'error',
  }"
>

<<< @/snippets/4.vue

</ESLintVueEditor>
---

```yaml
layout: center
```

### Outcomes:

<br>

1. less verbose
2. CSS nesting is kept on the minimal level
3. _(not yet)_ prevented style leaks
4. still increase learning curve, but
5. it is FULLY LINTED {.text-green.font-bold}

![@vkcn/eslint-plugin link](https://opengraph.githubassets.com/6c57b07599cce568d6fbd2f98528f35dd3150d374ec0cad81d86fe83ee5782c5/levchak0910/vkcn-eslint-plugin){.w-[500px]}

---

```yaml
layout: center
class: text-center
```

# Style leaks

<div />

![@vkcn/reporter link](https://opengraph.githubassets.com/f95ae38229a8872e4ebf0d160a984db3c02c99c4e2669091bf095e62e1c05bc9/levchak0910/vkcn-reporter){.w-[500px].mx-auto}

<br>

```bash
npx vkcn-reporter **/*.{scss,css,vue} -i **/ignore/*.css
```

---

```yaml
layout: center
```

# Summary

<v-clicks>

- formatter - [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/) (with [@stylistic/stylelint-plugin](https://github.com/stylelint-stylistic/stylelint-stylistic))
- linter - [Stylelint](https://stylelint.io/)
- extra linter - [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)
- naming convention - [@vkcn/eslint-plugin](https://github.com/levchak0910/vkcn-eslint-plugin)

</v-clicks>

---

```yaml
class: text-center
```

# Thank you for attention

<div class="grid grid-cols-2 mt-5">
  <div>

  ### Slides

  [levchak0910.github.io/talk-vue-css-dx](https://levchak0910.github.io/talk-vue-css-dx)

  <Links url="https://levchak0910.github.io/talk-vue-css-dx" :size="200" />

  </div>

  <div>

  ### Code source

  [github.com/levchak0910/talk-vue-css-dx](https://github.com/levchak0910/talk-vue-css-dx)

  <Links url="https://github.com/levchak0910/talk-vue-css-dx" :size="200" />
  
  </div>
</div>

<mdi-star class="text-yellow-500" />s are welcome )
