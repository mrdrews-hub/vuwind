<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue';
import { SideBar } from '@/components/Bar';
</script>

<template>
  <div>
    <!-- <SideBar /> -->
    <MainLayout>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </MainLayout>
  </div>
</template>

