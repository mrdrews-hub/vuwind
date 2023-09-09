<script setup lang="ts">
import DataTable from '@/components/Table/DataTable.vue';
import { InputSwitch } from '@/components/Input';
import type { TableHead } from '@/utils/interface'
import { ref } from 'vue';

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
  </div>
</template>
