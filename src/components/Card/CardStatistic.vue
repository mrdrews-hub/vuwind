<script setup lang="ts">
interface Props {
  theme?: 'primary' | 'warning' | 'error' | 'success';
  title?: string;
  loading?: boolean;
}

const props = defineProps<Props>();

</script>
<template>
  <div class="min-w-0 rounded-lg drop-shadow-md shadow-md overflow-hidden bg-white">
    <div class="p-4 min-h-[120px] relative" >
      <div class="w-full">
        <div class="h-8 w-28 bg-gray-300 animate-pulse rounded-md" v-if="props.loading"></div>
        <div class="text-4xl font-medium text-neutral-600" v-else>
          <slot name="content"></slot>
        </div>
        <p class="mt-6 text-sm font-semibold text-neutral-400 uppercase">
          {{ props.title }}
        </p>
      </div>
      <div class="text-4xl absolute right-3 top-3 h-10 w-10 flex justify-center items-center rounded-full text-gray-100" :class="props.theme">
        <slot name="icon"></slot>
      </div> 
      <div class="absolute h-1.5 bottom-0 inset-x-0 w-full rounded-full" :class="props.theme"></div>
    </div>
  </div>
</template>

<style scoped>
.primary {
  @apply bg-primary
}
.warning {
  @apply bg-amber-400
}
.success {
  @apply bg-emerald-400
}
.error {
  @apply bg-rose-400
}
</style>