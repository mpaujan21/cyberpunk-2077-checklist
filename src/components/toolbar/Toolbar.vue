<template>
    <div class="flex flex-wrap gap-4 text-sm">
        <ToggleButton :showValue="toggleValue" @click="toggleAll" />
        <FilterButton label="Completed" :showValue="completed" @click="filterChecked" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import ToggleButton from "./ToggleButton.vue";
import FilterButton from "./FilterButton.vue";

// Emit declaration
const emit = defineEmits(['update:toggleAll', 'update:filterChecked']);

// Toggle button
const toggleValue = ref(false);
function toggleAll() {
    toggleValue.value = !toggleValue.value;
    emit('update:toggleAll', toggleValue.value); // Emit event to parent
}

// Filter button
const completed = ref(false);
function filterChecked() {
    completed.value = !completed.value;
    emit('update:filterChecked', completed.value); // Emit event to parent
}
</script>
