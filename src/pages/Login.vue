<script setup>
import { BASE_URL } from '../constants';
import { LoginState } from '../store/LoginState';
import router from '../router/router';

if (localStorage.getItem('token')) {
    router.push('/profiel');
}

const login = (e) => {
    e.preventDefault();
    let apiUrl = BASE_URL + "/api/v1/users/login/";
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
        if (data.status === "success") {
            localStorage.setItem("token", data.data.token);
            LoginState.loggedIn = true;
            router.push('/gallerij');
        } else {
            document.querySelector(".checkPw").style.display = "block";
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
        <p class="obligated checkPw">Gebruikersnaam of wachtwoord is onjuist</p>
        <div class="flex flex--center">
            <router-link class="btn" @click="login" exact to="">Log in</router-link>
        </div>
    </div>
</template>

<style scoped>

.checkPw{
    display: none;
    margin-bottom: 1em;
}
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