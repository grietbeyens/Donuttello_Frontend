<script setup>
import { ref, computed } from 'vue'
import Home from '../pages/Home.vue';
import Gallerij from '../pages/Gallerij.vue';
import Configurator from '../pages/Configurator.vue'
import NotFound from '../pages/NotFound.vue';
import UniekeLink from '../pages/UniekeLink.vue';

const routes = {
    '/': Home,
    '/gallerij': Gallerij,
    '/configurator': Configurator,
    '/unieke-link': UniekeLink
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
    <nav class="navbar">
        <div class="navbar__logo">
            <a href="#/"><img src="../assets/donuttello-logo.png" alt="logo"></a>
        </div>
        <div class="navbar__links">
            <a href="#/">Home</a> 
            <a href="#/configurator">Configurator</a> 
            <a href="#/gallerij">Gallerij</a> 
        </div>
    </nav>
    <component :is="currentView" />
</template>

<style scoped>
.navbar{
    background-color: var(--primary-pink);
    color: var(--neutral);
    width: 100%;
    padding: 1.2em;
    position: fixed;
    top: 0;
}

a {
    color: var(--neutral);
    text-decoration: none;
    margin-right: 2em;
    text-transform: uppercase;
}

.navbar__links{
    display: flex;
    justify-content: flex-end;
    font-family: var(--title);
    padding-right: 1em;
}

.navbar__logo{
    position: absolute;
    left: calc(10vw)
}

.navbar__logo img{
    width: 6em;
}
</style>

