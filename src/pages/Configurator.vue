<script setup>
import ConfiguratorControls from '../components/ConfiguratorControls.vue';
</script>

<template>
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
        bottom: 30%;
        height: 100px;
        width: 100%;
    } 
</style>
