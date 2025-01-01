<template>
    <button class="flex items-center h-8 px-4 py-1 text-sm font-semibold bg-cyberpunk-green cyberpunk" @click="onClick">
        <IconCaretUp v-show="showValue" :size="20" :stroke="2" class="mr-2" />
        <IconCaretDown v-show="!showValue" :size="20" :stroke="2" class="mr-2" />
        <span>{{ label }}</span>
    </button>
</template>

<script setup>
import { IconCaretUp, IconCaretDown } from "@tabler/icons-vue";
import { computed } from "vue";

const props = defineProps({
    onClick: Function,
    showValue: Boolean,
});

const label = computed(() => {
    return props.showValue ? 'Close All' : 'Open All';
});
</script>