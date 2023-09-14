<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BellAlertIcon, BanknotesIcon } from '@heroicons/vue/24/outline'
import BreadCrumb from './BreadCrumb.vue';

const [route, router] = [useRoute(), useRouter()]
const isLoading = ref(false);
let timeout;
const handleCheckRouterReady = async () => {
  clearTimeout(timeout)
  isLoading.value = true;
  timeout = setTimeout(() => {
    isLoading.value = false;
  }, 200);
} 

watch(
  () => route.path,
  (newval, oldval) => {
    handleCheckRouterReady();
  }
)
</script>
<template>
  <nav class="min-h-[46px] flex items-center sticky top-0 z-10 w-full mb-16 text-slate-50">
    <div class="w-1/2">
      <div class="flex flex-col gap-1">
        <Transition name="slide-up" mode="out-in">
          <p v-if="!isLoading" class="text-lg lg:text-2xl font-semibold">{{ route.meta.title }}</p>
        </Transition>
        <BreadCrumb :class="{'mt-0': isLoading}" />
      </div>
    </div>
    <div id="profile" class="flex justify-end items-center w-1/2 gap-x-2">
      <button type="button" class="flex flex-col justify-center items-center gap-x-2 bg-gray-50 text-primary transition-all duration-200 py-2 px-4 rounded-lg">
        <p class="text-xs font-bold mb-1">Rp. 100.000.000</p>
        <p class="text-xs">Saldo Balance</p>
      </button>
      <button type="button" class="flex flex-col justify-center items-center gap-x-2 transition-all duration-200 p-3 hover:bg-secondary rounded-lg">
        <BellAlertIcon class="h-6 w-6" />
      </button>
      <button type="button" class="flex items-center gap-x-2 hover:bg-secondary transition-all duration-200 p-2.5 rounded-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloBeZt1lALmQuMv-e-94ROUGgTebkFlXDWCs5XTz4v9j_8WrSl-qri675Y5vwr4M2JkA&usqp=CAU" alt="" class="h-6 w-6 rounded-full">
        <p>Andre Saputra Nurjaya</p>
      </button>
    </div>
  </nav>
</template>