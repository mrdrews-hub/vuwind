<script setup lang="ts">
import { Navbar } from '@/components/Bar';
</script>
<template>
  <div class="relative h-screen w-full bg-gray-100">
    <div class="absolute inset-0 z-0 h-[25vh] md:h-[30vh] bg-gradient-primary" />
    <section id="content" class="ml-60 z-10 relative py-6 px-8">
      <slot></slot>
    </section>
  </div>
</template>