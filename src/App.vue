<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue';
import { SideBar, Navbar } from '@/components/Bar';
// import ReloadPWA from './components/Pwa/ReloadPWA.vue';
</script>

<template>
  <div>
    <SideBar />
    <MainLayout>
      <Navbar />
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </Transition>
      </RouterView>
    </MainLayout>
  </div>
</template>

