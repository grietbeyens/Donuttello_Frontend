<script setup>

</script>

<template>
    <div class="nav-margin">
        <!-- donut -->
        <div class="controls">
            <div class="padding-left">
            <div class="margin">
                <h2 class="title title--secondary">Algemeen</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="bedrijfsnaam">Bedrijfsnaam <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="bedrijfsnaam" name="bedrijfsnaam"
                        v-model="bedrijfsnaam" placeholder="Donuttello">
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="email">Mijn email adres <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="email" name="email" v-model="email"
                        placeholder="bedrijf@email.com">
                </div>
            </div>
            <div class="margin">
                <h2 class="title title--secondary">Topping</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="glazuur">Glazuur <span class="obligated">*</span>:</label>
                    <input class="input__color recolor_glaze" type="color" id="glazuur" name="glazuur" v-model="glazuur">
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary" for="topping">Topping <span class="obligated">*</span>:</label>
                    <input class="input__color recolor_sprinkles" type="color" id="topping" name="topping" v-model="glazuur">
                </div>
                <div class="margin__small">
                    <input type="checkbox" class="checkbox" name="checkbox" id="nameplate">
                    <label class="title title--tertiary checkbox-padding" for="nameplate">Topping aan of uit</label>
                </div>
            </div>
            <div class="margin">
                <h2 class="title title--secondary">Logo</h2>
                <p class="text margin__small">Onze bakkers kunnen jouw logo op een stukje chocolade drukken en plaatsen
                    deze dan op elke donut.</p>
                <div class="margin">
                    <input class="file margin__small imageInput" type="file" id="file" name="file">
                </div>
                <div>
                    <p>Selecteer de vorm waarop je jouw logo wil bedrukken:</p>
                    <div class="margin__small">
                        <input type="radio" id="rechthoek" name="vorm" value="rechthoek">
                        <label for="rechthoek">Rechthoek</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" id="vierkant" name="vorm" value="vierkant">
                        <label for="vierkant">Vierkant</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" id="cirkel" name="vorm" value="cirkel">
                        <label for="cirkel">Cirkel</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" id="ovaal" name="vorm" value="ovaal">
                        <label for="ovaal">Ovaal</label>
                    </div>
                    <input value="Verwijder kaartje" type="button" class="removeimage">
                </div>
            </div>
            <div class="margin">
                <h2 class="title title--secondary">Bijna klaar</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="donut">Zo heet mijn donut <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="donut" name="donut" v-model="donut"
                        placeholder="Sprikelicious">
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="aantal">Aantal <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="aantal" name="aantal" v-model="donut"
                        placeholder="100">
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="extra">Dit wil ik nog zeggen:</label>
                    <textarea class="input__text text" name="extra" id="extra" rows="10" resize="none"
                        placeholder="Ik wil 1 donut zonder sprinkels."></textarea>
                </div>
            </div>
            <a class="btn" href="#/unieke-link">Naar bestelling</a>
            </div>
        </div>
    </div>
    <component :is="currentView" />
</template>

<style scoped>
.padding-left{
    padding: 0 2em;
}

.checkbox-padding{
    padding: 0 0.5em;
}
.controls {
    background-color: var(--neutral);
    padding: 2em 0;
    width: 100vw;
    height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: justify;
}
.input__color {
    height: 2em;
    width: 5em;
    border: none;
    border-radius: 0.5em;
    padding: 0.2em;
    background-color: var(--pastel-blue);
    margin-left: 0.5em;
}

input[type="radio"] {
    margin-right: 0.5em;
}

.file {
    font-family: var(--title);
}

textarea{
    resize: none;
}

@media screen and (min-width: 1024px) {
    .controls {
        width: 40vw;
        height: calc(100vh - 7.8em);
    }
}
</style>