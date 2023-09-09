<script setup lang="ts">
import { onMounted } from 'vue';
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/solid'
import { ChartPieIcon, ArchiveBoxIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router';
import Divider from './Divider.vue';

const navItems = [
  {
    id: 'dashbaord',
    name: 'Dashboard',
    icon: ChartPieIcon,
    path: '/'
  },
  {
    id: 'product',
    name: 'Product',
    icon: ArchiveBoxIcon,
    path: '/product'
  },
]

onMounted(() => {
    console.log('object');
})
</script>
<template>
  <aside class="w-60 h-screen bg-white fixed left-0 z-10">
    <div id="brand" class="flex justify-between h-16 p-5">
      <h2 id="title" class="font-extrabold text-xl">ANDRU</h2>
      <button type="button" class="h-6 w-6 text-primary">
        <Bars3CenterLeftIcon />
      </button>
    </div>
    <!-- <Divider /> -->
    <nav class="flex flex-col p-2">
      <RouterLink
        v-for="(nav, index) in navItems"
        :key="index"
        :to="nav.path"
        class="flex justify-between items-center text-gray-500 p-3 rounded-lg"
        active-class="bg-gray-200 !text-gray-700 transition-all"
      >
      <div class="flex items-center gap-x-2">
        <component :is="nav.icon" class="h-6 w-6"></component>
        <p>{{ nav.name }}</p>
      </div>
      </RouterLink>
    </nav>
  </aside>
</template>