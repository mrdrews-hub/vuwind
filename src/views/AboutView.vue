<script setup lang="ts">
import DataTable from '@/components/Table/DataTable.vue';
import { InputSwitch } from '@/components/Input';
import type { TableHead } from '@/utils/interface'
import { onMounted, ref } from 'vue';

const head : TableHead = [
  {
    name: 'Product',
    key: 'product',
    sortable: true,
  },
  {
    name: 'Stock',
    key: 'stock',
  },
  {
    name: 'Status',
    key: 'status',
  },
]

const tableItems  = [
  {
    product: 'AMD Ryzen 3 3200G',
    stock: 10,
    status: 'Aktif',
  },

]

const isProductActive = ref(false)

onMounted(() => {
  console.log(document.getElementById('video'));
  setTimeout(() => {
    document.getElementById('video')?.removeAttribute('muted')
  }, 100);
})
</script>
<template>
  <div class="about">
    <DataTable
      :head="head"
      :items="tableItems"
      :loading="false"
    />
    <InputSwitch v-model="isProductActive" />
    <h1>This is an about page</h1>
    <video src="/tes.mp4" class="w-64 h-64" controls autoplay muted id="video"></video>
  </div>
</template>
