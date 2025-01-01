<template>
    <button :class="[
        'cyberpunk relative inline-block px-6 py-2 font-semibold tracking-wide uppercase',
        isActive ? 'bg-cyberpunk-cyan text-black' : 'text-cyberpunk-cyan hover:bg-cyberpunk-cyan hover:text-black',
    ]" @click="$emit('click')">
        <span class="cyberpunk">{{ title }}</span>
    </button>
</template>

<script setup>
defineProps({
    title: String,
    isActive: Boolean,
});
</script>