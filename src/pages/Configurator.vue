<script setup>
import ConfiguratorControls from '../components/ConfiguratorControls.vue';
</script>

<template>
    <div class="navbar__logo">
        <a  href="#/"><img src="../assets/donuttello-logo.png" alt="logo"></a>
    </div>
    <div class="configurator">
        <div class="controls">
            <ConfiguratorControls />
        </div>
    </div>
</template>

<style scoped>
.configurator{
    background-color: var(--pastel-yellow);
    height: 100vh;
}
.controls{
    position: absolute;
    bottom: 0;
} 

/* big screen */
@media screen and (min-width: 1024px) {
    .controls {
        top: 0;
        z-index: 1;
    }
    .navbar__logo {
        position: absolute;
        left: calc(10vw);
        z-index: 2;
        top: 1.2em;
    }

    .navbar__logo img {
        width: 6em;
    }
}
</style>
