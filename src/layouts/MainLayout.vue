<script setup lang="ts"></script>
<template>
  <div class="p-5 relative h-screen w-full bg-gray-100">
    <div class="absolute inset-0 z-0 h-[25vh] md:h-[30vh] bg-primary">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1340 280"
        class="h-[40%] md:h-[39%]"
      >
      <defs>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#ef4444" />
          <stop offset="100%" stop-color="#f97316" />
        </linearGradient>
      </defs>
        <path fill="url(#Gradient2)" fill-opacity="1" d="M0,256L120,261.3C240,267,480,277,720,277.3C960,277,1200,267,1320,261.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg> -->
    </div>
    <slot></slot>
  </div>
</template>