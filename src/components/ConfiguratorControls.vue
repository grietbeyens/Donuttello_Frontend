<script setup>
</script>

<template>
    <div>
        <!-- donut -->
        <div class="controls">
            <div class="margin">
                <h2 class="title">Algemeen</h2>
                <div class="margin__small">
                    <label class="subtitle" for="bedrijfsnaam">Bedrijfsnaam <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="bedrijfsnaam" name="bedrijfsnaam"
                        v-model="bedrijfsnaam" placeholder="Donuttello">
                </div>
                <div class="margin__small">
                    <label class="subtitle" for="email">Mijn email adres <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="email" name="email" v-model="email"
                        placeholder="bedrijf@email.com">
                </div>
            </div>
            <div class="margin">
                <h2 class="title">Topping</h2>
                <div class="margin__small">
                    <label class="subtitle" for="glazuur">Glazuur <span class="obligated">*</span>:</label>
                    <input class="input__color" type="color" id="glazuur" name="glazuur" v-model="glazuur">
                </div>
                <div class="margin__small">
                    <label class="subtitle" for="topping">Topping <span class="obligated">*</span>:</label>
                    <input class="input__color" type="color" id="topping" name="topping" v-model="glazuur">
                </div>
            </div>
            <div class="margin">
                <h2 class="title">Logo</h2>
                <p class="text margin__small">Onze bakkers kunnen jouw logo op een stukje chocolade drukken en plaatsen
                    deze dan op elke donut.</p>
                <div class="margin">
                    <input class="file margin__small" type="file" id="file" name="file">
                </div>
                <div>
                    <p>Selecteer de vorm waarop je jouw logo wil bedrukken:</p>
                    <div class="margin__small">
                        <input type="radio" id="rechthoek" name="vorm" value="rechthoek" checked="checked">
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
                </div>
            </div>
            <div class="margin">
                <h2 class="title">Bijna klaar</h2>
                <div class="margin__small">
                    <label class="subtitle" for="donut">Zo heet mijn donut <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="donut" name="donut" v-model="donut"
                        placeholder="Sprikelicious">
                </div>
                <div class="margin__small">
                    <label class="subtitle" for="aantal">Aantal <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="aantal" name="aantal" v-model="donut"
                        placeholder="100">
                </div>
                <div class="margin__small">
                    <label class="subtitle" for="extra">Dit wil ik nog zeggen:</label>
                    <textarea class="input__text text" name="extra" id="extra" rows="10" resize="none"
                        placeholder="Ik wil 1 donut zonder sprinkels."></textarea>
                </div>
            </div>
            <a class="btn" href="#">Naar bestelling</a>
        </div>
    </div>
</template>

<style scoped>
.controls {
    background-color: var(--neutral);
    padding: 2em 2em 4em 2em;
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
</style>