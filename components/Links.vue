<template>
  <div class="flex flex-col gap-6">
    <span class="text-2xl text-blue-700 dark:text-blue-200 bold">{{ shortLink }}</span>
    <div class="p-4 bg-white flex justify-center">
      <qrcode-vue :value="url" :size="size"></qrcode-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useLocalStorage } from "@vueuse/core"
import QrcodeVue from "qrcode.vue"

const props = withDefaults(
  defineProps<{ 
    url?: string
    size?: number
  }>(),
  { 
    url: window.location.href,
    size: 300,
  },
)

const lsKey = computed(() => `slidev-current-page-short-url:${props.url.replace(/[^a-z-]/g, "")}`)

const shortLink = useLocalStorage(lsKey.value, "")

if (!shortLink.value) {
  fetch(`https://tinyurl.com/api-create.php?url=${props.url}`)
    .then((r) => r.text())
    .then((url) => { shortLink.value = url })
}
</script>
