<script setup>
import ConfiguratorControls from '../components/ConfiguratorControls.vue';
import Donut from '../components/Donut.vue';
</script>

<template>
    <div class="navbar__logo">
        <router-link exact to="/"><img src="../assets/donuttello-logo.png" alt="logo"></router-link>
    </div>
    <div class="configurator">
        <div class="controls">
            <ConfiguratorControls />
        </div>
        <div class="donut">
            <Donut/>
        </div>

    </div>
</template>

<style scoped>
.configurator{
    background-color: var(--pastel-yellow);
    height: 100vh;
    display: flex;
}
.controls{
    position: absolute;
    bottom: 0;
    overflow: hidden;
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

.donut {
    position: absolute;
    width: 100vw;
    height: 70vh;
    top: 0vh;
    overflow: hidden;
}

/* big screen */
@media screen and (min-width: 1024px) {
    .controls {
        top: 0;
        z-index: 1;
    }
    
    .donut {
        width: 80vw;
        height: 95vh;
        left: 25vw;
        top: 5vh;
    }
}
</style>
