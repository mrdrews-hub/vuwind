<script setup lang="ts">
import { computed } from 'vue';
import { UserGroupIcon, ChartBarIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/vue/24/solid';
import { CardStatistic } from '@/components/Card';

const dashboardCard = computed(() => [
  {
    title: 'Users',
    theme: 'primary',
    icon: UserGroupIcon,
    content: 2000
  },
  {
    title: 'Total Spending',
    theme: 'success',
    icon: ChartBarIcon,
    content: 40000,
  },
  {
    title: 'Low Balance',
    theme: 'warning',
    icon: ExclamationTriangleIcon,
    content: 0
  },
  {
    title: 'Almost Expired',
    theme: 'error',
    icon: ClockIcon,
    content: 50,
  },
])
</script>

<template>
  <div id="dashboard">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <CardStatistic
        v-for="(item, index) in dashboardCard" :key="index"
        :title="item.title"
        :theme="item.theme"
        :loading="false"
      >
        <template #content>
          <p>{{ item.content }}</p>
        </template>
        <template #icon>
          <component :is="item.icon" class="w-6 h-6" />
        </template>
      </CardStatistic>
    </div>
  </div>
</template>
