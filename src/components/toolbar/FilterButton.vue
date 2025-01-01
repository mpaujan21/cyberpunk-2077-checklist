<template>
    <button class="flex items-center h-8 px-4 py-1 bg-[#66FFA8] font-semibold cyberpunk" @click="onClick">
        <IconEyeOff v-show="showValue" :size="20" :stroke="2" class="mr-2" />
        <IconEye v-show="!showValue" :size="20" :stroke="2" class="mr-2" />
        <span>{{ label }}</span>
    </button>
</template>

<script setup>
import { IconEye, IconEyeOff } from "@tabler/icons-vue";

defineProps({
    onClick: Function,
    showValue: Boolean,
    label: String,
});
</script>