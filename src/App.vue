<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import Configurator from './components/Configurator.vue'
import NotFound from './components/NotFound.vue';

const routes = {
  '/': Home,
  '/gallery': Gallery,
  '/configurator': Configurator,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div>
    <a href="#/">Home</a> |
    <a href="#/configurator">Configurator</a> |
    <a href="#/gallery">Gallery</a> |
    <a href="#/broken-link">Broken Link</a>
    <component :is="currentView" />
  </div>
</template>

<style scoped>

</style>
