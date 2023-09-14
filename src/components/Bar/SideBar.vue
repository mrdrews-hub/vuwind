<script setup lang="ts">
import { computed, ref } from 'vue';
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/solid'
import { ChartPieIcon, ArchiveBoxIcon, ChevronRightIcon, BanknotesIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
import { FacebookIcon } from '../Icon';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useStylingStore } from '../../stores/styles';

const stylesStore = useStylingStore();
const { sideBarMode, hoverable, hovered, shouldExpand } = storeToRefs(stylesStore);
const { handleMouseLeave, handleMouseOver, handleTogleSidebarMode } = stylesStore;

const navItems = [
  {
    id: 'dashbaord',
    name: 'Dashboard',
    icon: ChartPieIcon,
    path: '/'
  },
  {
    id: 'accounts',
    name: 'Accounts',
    icon: FacebookIcon,
    path: '/product'
  },
  {
    id: 'transaction',
    name: 'Transaction',
    icon: ClipboardDocumentIcon,
    path: '/transaction'
  },
  {
    id: 'topup',
    name: 'Topup',
    icon: BanknotesIcon,
    path: '/topup'
  },
]

// watch(
//   sideBarMode,
//   (newval) => {
//     if (newval === 'mini') {
//       hoverable.value = true;
//     } else {
//       hoverable.value = false;
//     }
//   }
// )
</script>
<template>
  <aside
    class="h-screen w-60 bg-white fixed left-0 z-10 transition-all duration-300"
    :class="{
      '!w-16': shouldExpand,
    }"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
  >
    <div id="brand" class="flex justify-between h-16 p-5">
      <h2 id="title" class="font-extrabold text-xl">Tizzly</h2>
      <!-- <h2 id="title" class="font-extrabold text-2xl text-center" v-else-if="sideBarMode === 'mini'">T</h2> -->
      <button
        v-show="sideBarMode === 'expand' || hovered"
        @click="handleTogleSidebarMode"
        type="button"
        class="text-primary hover:bg-gray-100 transition-all rounded-lg">
        <Bars3CenterLeftIcon class="h-6 w-6" />
      </button>
    </div>
    <!-- <Divider /> -->
    <nav class="flex flex-col p-2 gap-1">
      <RouterLink
        v-for="(nav, index) in navItems"
        :key="index"
        :to="nav.path"
        class="flex justify-between items-center text-gray-500 p-2.5 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-all"
        active-class="bg-gray-200 !text-gray-800 transition-all"
      >
        <div class="flex items-center gap-x-2">
          <component :is="nav.icon" class="h-6 w-6"></component>
          <p v-if="sideBarMode === 'expand' || hovered">{{ nav.name }}</p>
        </div>
        <ChevronRightIcon class="w-4 h-4 transition-all duration-200" />
      </RouterLink>
    </nav>
  </aside>
</template>