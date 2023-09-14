import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStylingStore = defineStore('styling', () => {
  const sideBarMode = ref<'expand' | 'mini' | 'hide'>('expand')
  const hoverable = ref(false);
  const hovered = ref(false);

  const isMobile = computed(() => navigator.userAgentData.mobile)
  const shouldExpand = computed(() => sideBarMode.value === 'mini' && !hovered.value || isMobile.value)

  const handleTogleSidebarMode = () => {
    switch (sideBarMode.value) {
      case 'expand':
        sideBarMode.value = 'mini'
        return
      case 'mini':
        hoverable.value = true;
        sideBarMode.value = 'expand'
        return
      default:
        sideBarMode.value = 'expand'
        return
    }
  }

  const handleMouseOver = async () => {
    if (hoverable.value || sideBarMode.value === 'mini') {
      hovered.value = true;
    }
  }
  const handleMouseLeave = () => {
    if (!hoverable.value && sideBarMode.value === 'expand') return
    hovered.value = false;
  }

  return { sideBarMode, hovered, hoverable, shouldExpand, handleTogleSidebarMode, handleMouseOver, handleMouseLeave }
})