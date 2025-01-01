<template>
    <div class="space-y-4 text-lg md:text-xl">
        <!-- Tabs -->
        <div class="flex flex-wrap gap-4">
            <TabBar v-for="tab in tabs" :key="tab" :title="tab" :isActive="tab === activeTab" @click="selectTab(tab)" />
        </div>

        <!-- Tab Children -->
        <div class="flex flex-wrap gap-4">
            <TabBarChild v-for="child in tabChildren[activeTab]" :key="child" :title="child"
                :isActive="child === activeTabChild" @click="selectTabChild(child)" />
        </div>
    </div>
</template>

<script setup>
import TabBar from "./TabBar.vue";
import TabBarChild from "./TabBarChild.vue";

// Props
const props = defineProps({
    tabs: Array,
    tabChildren: Object,
    activeTab: String,
    activeTabChild: String,
});

// Emit events
const emit = defineEmits(["update:activeTab", "update:activeTabChild"]);

// Local methods
function selectTab(tab) {
    emit("update:activeTab", tab);
    emit("update:activeTabChild", props.tabChildren[tab][0]); // Default to the first child of the selected tab
}

function selectTabChild(child) {
    emit("update:activeTabChild", child);
}
</script>