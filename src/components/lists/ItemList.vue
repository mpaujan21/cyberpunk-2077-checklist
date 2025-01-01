<template>
  <div>
    <ul>
      <li v-for="item in filteredList" :key="item.title">
        <ItemAccordion :title="item.title" :description="item.description" :missable="item.missable" :items="item.items"
          :open="openAll" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ItemAccordion from './ItemAccordion.vue';

const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  openAll: {
    type: Boolean,
    required: true
  },
  filterChecked: {
    type: Boolean,
    required: true
  }
});

// Filtered list based on filterChecked state
const filteredList = computed(() => {
  if (!props.filterChecked) return props.list;
  return props.list.filter(item => item.items.some(subItem => !subItem.checked)); // Only include parent items with unchecked children
});
</script>