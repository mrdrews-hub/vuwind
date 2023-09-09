<script setup lang="ts">
import type { TableHead } from '@/utils/interface'
import TableLoading from '@/components/Loading/TableLoading.vue'
import { computed } from 'vue';

interface Props {
  head: TableHead[];
  items: any[];
  perPage?: number;
  hoverable?: boolean;
  loading?: boolean;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    perPage: 20,
  }
)
</script>
<template>
  <div class="p-4 bg-slate-50 rounded-lg min-h-[40vh]">
    <div class="relative min-h-[30vh]">
      <div v-show="true" class="absolute inset-0 mt-[53px] bg-neutral-200/60 flex flex-col justify-center items-center transition-all duration-300">
        <TableLoading />
        <p class="font-bold mt-3 animate-pulse uppercase">Loading</p>
      </div>
      <table class="w-full text-sm text-left text-gray-500" >
        <thead class="text-xs text-gray-700 uppercase bg-gray-300">
          <th
            v-for="(item, index) in props.head"
            :key="index"
          >
            <button type="button" class="flex items-center uppercase text-sm">
              <p>{{ item.name }}</p>
              <svg v-if="item?.sortable" class="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
              </svg>
            </button>
          </th>
        </thead>
        <tbody>
          <slot name="items" v-bind="{ items: props.items }">
              <tr v-for="(item, index) in props.items" :key="index" class="align-top">
                <td v-for="(head, index) in props.head" :key="index">{{ item[head.key] }}</td>
              </tr>
          </slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
tr {
  @apply bg-slate-50 border-b border-gray-200;
}
th, td {
  @apply px-6 py-4 cursor-default
}
.hoverable {
  @apply hover:bg-slate-200 transition-all duration-300;
}
</style>