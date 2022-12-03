<script setup>
</script>

<template>
    <div class="text-container flex flex--col">
        <div class="">
            <h2 class="title">Die ziet er <span class="obligated">lekker</span> uit!</h2>
            <p class="text">Met deze unieke link kan je je donut nog eens bekijken en aanpassen indien nodig. Donuttello zal je binnenkort contacteren!</p>
        </div>
        <div class="margin__small">
        <input class="input__text text" type="text" id="link" name="link" v-model="link" placeholder="link">
        </div>
        <div class="flex flex--center btn-container">
            <a class="btn" href="#/gallery">Bestellen</a>
        </div>
    </div>
</template>

<style scoped>
.title{
    margin: 1.5em 0 1em 0  ;
}

.btn-container{
    height: calc(100vh - 24em);
    align-items: flex-end;
}


</style>