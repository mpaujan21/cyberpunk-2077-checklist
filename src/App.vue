<script setup>
import ItemList from "./components/lists/ItemList.vue";
import Navigation from "./components/navigation/Navigation.vue";
import Toolbar from "./components/toolbar/Toolbar.vue";

// Import data
import rawMainQuest from "./data/lists/mainQuest";
import rawSideQuest from "./data/lists/sideQuest";
import rawWeaponAndKills from './data/lists/weaponAndKills';
import rawExploration from './data/lists/exploration';
import rawGameplay from "./data/lists/gameplay";
import rawVehicles from "./data/lists/vehicles";
import rawWallWeapons from "./data/lists/wallWeapon";
import rawIconicCyberware from "./data/lists/iconicCyberware";
import rawPhantomMainQuest from "./data/lists/phantomMainQuest";
import rawPhantomMisc from "./data/lists/phantomMisc";

import { onMounted, reactive, ref, watch } from "vue";
import { IconArrowNarrowUp } from "@tabler/icons-vue";

// Load saved state or use raw data
function loadSavedData(key, defaultData) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaultData;
}

// Reactive data
const mainQuest = reactive(loadSavedData("mainQuest", rawMainQuest));
const sideQuest = reactive(loadSavedData("sideQuest", rawSideQuest));
const weaponAndKills = reactive(loadSavedData("weaponAndKills", rawWeaponAndKills));
const exploration = reactive(loadSavedData("exploration", rawExploration));
const gameplay = reactive(loadSavedData("gameplay", rawGameplay));
const vehicles = reactive(loadSavedData("vehicles", rawVehicles));
const wallWeapons = reactive(loadSavedData("wallWeapons", rawWallWeapons));
const iconicCyberware = reactive(loadSavedData("iconicCyberware", rawIconicCyberware));
const phantomMainQuest = reactive(loadSavedData("phantomMainQuest", rawPhantomMainQuest));
const phantomMisc = reactive(loadSavedData("phantomMainQuest", rawPhantomMisc));

// Tabs and items
const tabs = ["Achievements", "Collectibles", "Phantom Liberty"];
const tabChildren = {
  Achievements: ["Main Quest", "Side Quest", "Weapon and Kills", "Exploration", "Gameplay"],
  Collectibles: ["Vehicles", "Stash Wall Weapons", "Iconic Cyberware"],
  "Phantom Liberty": ["Main Quest (DLC)", "Miscellaneous (DLC)"],
};
const itemLists = {
  "Main Quest": mainQuest,
  "Side Quest": sideQuest,
  "Weapon and Kills": weaponAndKills,
  "Exploration": exploration,
  "Gameplay": gameplay,
  "Vehicles": vehicles,
  "Stash Wall Weapons": wallWeapons,
  "Iconic Cyberware": iconicCyberware,
  "Main Quest (DLC)": phantomMainQuest,
  "Miscellaneous (DLC)": phantomMisc,
};

// Default active tab
const activeTab = ref("Achievements");
const activeTabChild = ref("Main Quest");
const openAll = ref(false);
const filterChecked = ref(false);

// Toggle all accordions
function toggleAllAccordions(value) {
  openAll.value = value;
}

// Handle filterChecked update
function handleFilterChecked(value) {
  filterChecked.value = value;
}

// Watch for changes and save to localStorage
watch(mainQuest, () => localStorage.setItem("mainQuest", JSON.stringify(mainQuest)), { deep: true });
watch(sideQuest, () => localStorage.setItem("sideQuest", JSON.stringify(sideQuest)), { deep: true });
watch(weaponAndKills, () => localStorage.setItem("weaponAndKills", JSON.stringify(weaponAndKills)), { deep: true });
watch(exploration, () => localStorage.setItem("exploration", JSON.stringify(exploration)), { deep: true });
watch(gameplay, () => localStorage.setItem("gameplay", JSON.stringify(gameplay)), { deep: true });
watch(vehicles, () => localStorage.setItem("vehicles", JSON.stringify(vehicles)), { deep: true });
watch(wallWeapons, () => localStorage.setItem("wallWeapons", JSON.stringify(wallWeapons)), { deep: true });
watch(iconicCyberware, () => localStorage.setItem("iconicCyberware", JSON.stringify(iconicCyberware)), { deep: true });
watch(phantomMainQuest, () => localStorage.setItem("phantomMainQuest", JSON.stringify(phantomMainQuest)), { deep: true });
watch(phantomMisc, () => localStorage.setItem("phantomMisc", JSON.stringify(phantomMisc)), { deep: true });

// Back to Top button visibility
const showBackToTop = ref(false);

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide button based on scroll position
function handleScroll() {
  showBackToTop.value = window.scrollY > 300; // Show button when scrolled down 300px
}

// Add scroll listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="container flex flex-col min-h-screen mx-auto">
    <!-- Header -->
    <header class="py-6">
      <div class="flex flex-col items-center text-center">
        <a href="/"
          class="py-8 text-3xl italic font-thin cyberpunk-font md:text-4xl text-cyberpunk-yellow hover:underline">
          Cyberpunk 2077 Checklist
        </a>
      </div>
    </header>

    <!-- Content -->
    <main class="flex-1 px-4 pb-8 space-y-8">
      <!-- Navigation -->
      <Navigation :tabs="tabs" :tabChildren="tabChildren" :activeTab="activeTab" :activeTabChild="activeTabChild"
        @update:activeTab="(tab) => (activeTab = tab)" @update:activeTabChild="(child) => (activeTabChild = child)" />

      <!-- Toolbar -->
      <Toolbar @update:toggleAll="toggleAllAccordions" @update:filterChecked="handleFilterChecked" />

      <!-- Items -->
      <div class="text-white">
        <ItemList :list="itemLists[activeTabChild]" :openAll="openAll" :filterChecked="filterChecked" />
      </div>
    </main>
  </div>

  <!-- Back to Top Button -->
  <button v-if="showBackToTop" @click="scrollToTop"
    class="fixed flex items-center p-2 text-xs font-bold text-black transition rounded-full shadow-lg bottom-20 right-8 bg-cyberpunk-yellow hover:bg-cyberpunk-cyan">
    <IconArrowNarrowUp :size="16" :stroke="3" class="" />
    Back to Top
  </button>

  <!-- <Footer /> -->
  <footer
    class="flex flex-col items-center justify-center gap-2 py-2 text-sm text-center text-black bg-cyberpunk-yellow sm:flex-row cyberpunk">
    <span>
      Check out the project or report an issue on
      <a href="https://github.com/cyberpunk-2077-checklist/" class="font-bold underline hover:text-cyan-600"
        target="_blank">Github</a>.
    </span>
    <span>
      Credits to
      <a href="https://gobluebro.github.io/Elden-Ring-Checklist/" class="font-bold underline hover:text-cyan-600"
        target="_blank">Elden
        Ring Checklist</a>.
    </span>
  </footer>
</template>