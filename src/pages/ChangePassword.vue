<script setup>

</script>

<template class="center">
    <div class="container flex flex--center flex--col">
        <h2 class="title">Verander wachtwoord</h2>
        <div class="margin__small">
            <label class="title title--tertiary" for="pw-old">Oude wachtwoord <span
                    class="obligated">*</span>:</label>
            <input class="input__text text" type="password" id="pw-old" name="pw-old" v-model="passwordOld">
        </div>
        <div class="margin__small">
            <div>
                <label class="title title--tertiary" for="pw-new">Nieuw wachtwoord <span
                        class="obligated">*</span>:</label>
                <input class="input__text text" type="password" id="pw-new" name="pw-new" v-model="passwordNew">
            </div>
        </div>
        <div class="margin__small margin">
            <label class="title title--tertiary" for="pw-repeat">Herhaal nieuwe wachtwoord <span class="obligated">*</span>:</label>
            <input class="input__text text" type="password" id="pw-repeat" name="pw-repeat" v-model="pwRepeat">
        </div>
        <div class="flex flex--center">
            <a class="btn" href="#/gallerij">Verander</a>
        </div>
    </div>
</template>

<style scoped>
.pw {
    text-decoration: none;
    color: #a0a0a0;
}

.container {
    width: 30em;
    height: auto;
    margin: 7em auto 0 auto;
}

.center {
    margin: auto 50%;
}

.input__text {
    width: 21em;
}
</style>