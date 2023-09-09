<script setup lang="ts">
import { computed } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid';

interface Props {
  id?: string;
  disabled?: boolean;
  modelValue: string | boolean;
  template?: string;
  label?: string;
}
/** 
 * The Onlu One Who Knows
 * @displayName Input Switch
 */
const props = withDefaults(
  defineProps<Props>(), {
  template: "default",
});
const emits = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();

const enabled = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emits("update:modelValue", value);
  },
});
</script>
<template>
  <SwitchGroup>
    <div class="flex items-center">
      <Switch
        v-model="enabled"
        :aria-disabled="props.disabled"
        :disabled="props.disabled"
        :class="{
          'bg-primary': enabled,
          'bg-gray-200 dark:bg-gray-400': !enabled,
        }"
        class="relative inline-flex items-center h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <!-- <span class="sr-only">Use setting</span> -->
        <div
          aria-hidden="true"
          :class="enabled ? 'translate-x-full' : 'translate-x-0'"
          class="flex justify-center items-center pointer-events-none h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        >
          <CheckIcon class="w-3 h-3 stroke-gray-400 stroke-2" v-if="enabled" />
          <XMarkIcon class="w-3 h-3 stroke-gray-400 stroke-2" v-else/>
        </div>
      </Switch>
      <SwitchLabel class="text-neutral-700 ml-2.5">
        <p class="text-sm font-medium">{{ props.label }}</p>
        <slot name="label"></slot>
      </SwitchLabel>
    </div>
  </SwitchGroup>
</template>
