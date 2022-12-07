<script setup>
</script>

<template class="center">
    <div class="container flex flex--center flex--col">
        <h2 class="title">Hey Donuttello!</h2>
        <div class="margin__small">
            <label class="title title--tertiary " for="email adres">Email adres <span class="obligated">*</span>:</label>
            <input class="input__text text" type="text" id="email adres" name="email adres" v-model="email"
                placeholder="Donuttello@email.com">
        </div>
        <div class="margin__small margin">
            <div>
                <label class="title title--tertiary " for="wachtwoord">Wachtwoord <span class="obligated">*</span>:</label>
                <input class="input__text text" type="password" id="wachtwoord" name="wachtwoord" v-model="wachtwoord">
            </div>
        </div>
        <div class="flex flex--center">
            <a class="btn" href="#/gallerij">Log in</a>
        </div>
    </div>
</template>

<style scoped>
.pw{
    text-decoration: none;
    color: #a0a0a0;
}

.container{
    width: 23em;
    height: auto;
    margin: 7em auto 0 auto;
}

.center{
    margin: auto 50%;
}

.input__text{
    width: 21em;
}
</style>