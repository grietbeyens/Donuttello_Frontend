<script setup>
import { BASE_URL } from '../constants';
import router from '../router/router';
// console.log(process.env.VUE_APP_UPLOAD_PRESET_NAME);

let logoUrl;

const createUrl = () => {
    let logo = document.querySelector(".imageInput").files[0];
    let formData = new FormData();
    formData.append("file", logo);
    formData.append("upload_preset", "ufvfe1g5");
    fetch("https://api.cloudinary.com/v1_1/dg3efqczq/image/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        logoUrl = data.secure_url;
        createDonut();
    })
}

const createDonut = () =>{
    let apiUrl = BASE_URL + "/api/v1/donuts/";
    let shapes = document.getElementsByClassName("shape");
    let shape;

    for (let i = 0; i < shapes.length; i++) {
        if (shapes[i].checked) {
            shape = shapes[i].value;
        }
    }
    
    let data = {
        name: document.querySelector("#name").value,
        glace: document.querySelector("#glaze").value,
        topping: document.querySelector("#topping").value,
        logo: logoUrl,
        shape: shape,
        amount: document.querySelector("#amount").value,
        email: document.querySelector("#email").value,
        company: document.querySelector("#company").value,  
        extra: document.querySelector("#extra").value  
    }
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
    .then (response => response.json())
    router.push('/bestelling'); 
}
</script>

<template>
    <div class="nav-margin">
        <div class="controls">
            <div class="padding-left">
            <div class="margin">
                <h2 class="title title--secondary">Algemeen</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="bedrijfsnaam">Bedrijfsnaam <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="company" name="bedrijfsnaam"
                        v-model="bedrijfsnaam" placeholder="Donuttello" required>
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="email">Mijn email adres <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="email" name="email" v-model="email"
                        placeholder="bedrijf@email.com" required>
                </div>
            </div>
            <div class="margin">
                <h2 class="title title--secondary">Topping</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="glazuur">Glazuur <span class="obligated">*</span>:</label>
                    <input class="input__color recolor_glaze" type="color" id="glaze" name="glazuur" v-model="glazuur" required>
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary" for="topping">Topping:</label>
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
                    <input class="file margin__small imageInput" type="file" id="logo" name="file">
                </div>
                <div>
                    <p>Selecteer de vorm waarop je jouw logo wil bedrukken:</p>
                    <div class="margin__small">
                        <input type="radio" class="shape" id="rechthoek" name="shape" value="rechthoek">
                        <label for="rechthoek">Rechthoek</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" class="shape" id="vierkant" name="shape" value="vierkant">
                        <label for="vierkant">Vierkant</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" class="shape" id="cirkel" name="shape" value="cirkel">
                        <label for="cirkel">Cirkel</label>
                    </div>
                    <div class="margin__small">
                        <input type="radio" class="shape" id="ovaal" name="shape" value="ovaal">
                        <label for="ovaal">Ovaal</label>
                    </div>
                    <br>
                    <div class="margin__small">
                        <input type="radio" class="shape" id="verwijder" name="shape" value="verwijder" checked>
                        <label for="geen" class="verwijder-kaartje">Geen kaartje</label>
                    </div>
                </div>
            </div>
            <div class="margin">
                <h2 class="title title--secondary">Bijna klaar</h2>
                <div class="margin__small">
                    <label class="title title--tertiary " for="donut">Zo heet mijn donut <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="name" name="donut" v-model="donut"
                        placeholder="Sprikelicious" required>
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="aantal">Aantal <span class="obligated">*</span>:</label>
                    <input class="input__text text" type="text" id="amount" name="aantal" v-model="donut"
                        placeholder="100" required>
                </div>
                <div class="margin__small">
                    <label class="title title--tertiary " for="extra">Dit wil ik nog zeggen:</label>
                    <textarea class="input__text text" name="extra" id="extra" rows="10" resize="none"
                        placeholder="Ik wil 1 donut zonder sprinkels."></textarea>
                </div>
            </div>
            <router-link class="btn" @click="createUrl" exact to="">Naar bestelling</router-link>
            </div>
        </div>
    </div>
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
        width: 50vw;
        height: calc(100vh - 7.8em);
    }
}
</style>