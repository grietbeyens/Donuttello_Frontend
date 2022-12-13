<script setup>
import { BASE_URL } from '../constants';
import { LoginState } from '../store/LoginState';

if (localStorage.getItem('token')) {
    window.location.href = '/profiel';
}

const login = (e) => {
    e.preventDefault();
    let apiUrl = BASE_URL + "/api/v1/users/login/";

    //get input value
    let username = document.querySelector("#username").value;
    let wachtwoord = document.querySelector("#wachtwoord").value;

    let data = {
        username: username,
        password: wachtwoord
    }

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === "success") {
                localStorage.setItem("token", data.data.token);

                LoginState.loggedIn = true;

                window.location.href = "/gallerij";
            } else {
                alert("Er is iets misgegaan, probeer het opnieuw");
            }
        })
}

</script>

<template class="center">
    <div class="container flex flex--center flex--col">
        <h2 class="title">Log in</h2>
        <div class="margin__small">
            <label class="title title--tertiary" for="username">Gebruikersnaam <span class="obligated">*</span>:</label>
            <input class="input__text text" type="text" id="username" name="username" v-model="text">
        </div>
        <div class="margin__small margin">
            <div>
                <label class="title title--tertiary " for="wachtwoord">Wachtwoord <span
                        class="obligated">*</span>:</label>
                <input class="input__text text" type="password" id="wachtwoord" name="wachtwoord" v-model="text">
            </div>
        </div>
        <div class="flex flex--center">
            <a class="btn" href="" @click="login">Log in</a>
        </div>
    </div>
</template>

<style scoped>
.pw {
    text-decoration: none;
    color: #a0a0a0;
}

.container {
    width: 23em;
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