<script setup>
</script>

<template>
    <div class="flex flex--col flex--center">
        <div class="text-container">
            <h2 class="title">Die ziet er <span class="obligated">lekker</span> uit!</h2>
            <p class="text">Ziezo, dat komt in orde. Donuttello zal je binnenkort contacteren, dus houd je mailbox in de gaten. 📨 </p>
        </div>
        <div class="flex flex--center btn-container">
            <router-link class="btn" exact to="/">Oké</router-link>
        </div>
    </div>
</template>

<style scoped>
.title{
    margin: 1.5em 0 1em 0  ;
}

.btn-container{
    height: calc(100vh - 29em);
    align-items: flex-end;
}

.text-container{
    max-width: 25em;
}


</style>