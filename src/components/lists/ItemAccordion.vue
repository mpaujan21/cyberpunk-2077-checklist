<template>
    <fieldset class="my-4">
        <legend class="w-full bg-gray-900 border border-opacity-50 border-solid border-cyberpunk-cyan">
            <div class="flex justify-between">
                <div class="flex items-center justify-between p-2">
                    <div class="flex items-center">
                        <!-- Parent Checkbox -->
                        <input type="checkbox" class="rounded size-4" v-model="allChecked" />
                        <label class="ml-3 text-xl text-yellow-200">{{ title }}</label>
                    </div>
                    <div v-if="missable" class="ml-4">
                        <span class="px-2 py-1 text-sm text-white bg-[#b1032c] rounded">Missable</span>
                    </div>
                </div>
                <div class="flex items-center justify-end flex-1 p-2 cursor-pointer" @click="toggleAccordion">
                    <span class="mr-4 text-white select-none">{{ checkedCount }}/{{ totalCount }}</span>
                    <button>
                        <IconChevronLeft v-show="!isOpen" :size="24" :stroke="3" class="mr-4 text-cyberpunk-yellow" />
                        <IconChevronDown v-show="isOpen" :size="24" :stroke="3" class="mr-4 text-cyberpunk-yellow" />
                    </button>
                </div>
            </div>
        </legend>

        <div v-show="isOpen"
            class="px-2 py-2 border-b border-opacity-50 border-solid rounded-b border-x border-cyberpunk-cyan">
            <template v-if="description">
                <p class="px-6 py-2 text-cyberpunk-yellow">
                    {{ description }}
                </p>
                <hr class="p-2 border-cyberpunk-cyan" />
            </template>

            <li v-for="(item, index) in items" :key="index">
                <input type="checkbox" class="rounded size-4 text-cyberpunk-yellow" v-model="item.checked" />
                <label class="ml-3 text-white">
                    <template v-if="item.url">
                        <a :href="item.url" target="_blank"
                            class="underline decoration-[0.1px] hover:text-cyberpunk-yellow">
                            {{ item.text }}
                        </a>
                    </template>
                    <template v-else>
                        {{ item.text }}
                    </template>
                </label>
                <span v-if="item.missable" class="ml-2 text-red-500">(Missable)</span>
            </li>
        </div>
    </fieldset>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { IconChevronLeft, IconChevronDown } from '@tabler/icons-vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    missable: {
        type: Boolean
    },
    items: {
        type: Array,
        required: true
    },
    open: {
        type: Boolean,
        default: false
    }
});

const isOpen = ref(props.open); // Initialize isOpen based on the open prop

// Sync isOpen with the open prop on mount and when open changes
onMounted(() => {
    isOpen.value = props.open;
});

watch(
    () => props.open,
    (value) => {
        isOpen.value = value; // Update isOpen when the open prop changes
    }
);

// Computed properties for tracking counts
const checkedCount = computed(() => props.items.filter(item => item.checked).length);
const totalCount = computed(() => props.items.length);

// Computed property for parent checkbox state
const allChecked = computed({
    get: () => checkedCount.value === totalCount.value && totalCount.value > 0,
    set: (value) => {
        props.items.forEach(item => {
            item.checked = value; // Update all child checkboxes
        });
    }
});

function toggleAccordion() {
    isOpen.value = !isOpen.value;
}
</script>
