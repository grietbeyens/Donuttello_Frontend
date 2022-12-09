<script setup>
import { BASE_URL } from '../constants';
import { LoginState } from '../store/LoginState';

if (!localStorage.getItem('token')) {
    window.location.href = '#/login'
}

const changePassword = (e) => {
    e.preventDefault();
    let pwNew = document.querySelector("#pw-new").value;
    let pwRepeat = document.querySelector("#pw-repeat").value;
    if (pwNew !== pwRepeat) {
        alert("Wachtwoorden komen niet overeen");
        return;
    }
    let apiUrl = BASE_URL + "/api/v1/users/change-password";
    let token = localStorage.getItem('token');
    let pwOld = document.querySelector("#pw-old").value;
    let data = {
        username: "Admin",
        passwordOld: pwOld,
        passwordNew: pwNew,
    }
    fetch(apiUrl, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + token,
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === "success") {
                window.location.href = "#/gallerij";
            } else {
                alert(data.message);
            }
        })
}

const logOut = () => {
    LoginState.loggedIn = false;
    localStorage.removeItem("token");
    window.location.href = "#/home";
}


</script>

<template class="center">
    <div class="container flex flex--center flex--col">
        <h2 class="title">Hey Donuttello!</h2>
        <h2 class="title title--small margin__small">Verander wachtwoord</h2>
        <div class="margin__small">
            <label class="title title--tertiary" for="pw-old">Oude wachtwoord <span class="obligated">*</span>:</label>
            <input class="input__text text" type="password" id="pw-old" name="pw-old" v-model="text">
        </div>
        <div class="margin__small">
            <div>
                <label class="title title--tertiary" for="pw-new">Nieuw wachtwoord <span
                        class="obligated">*</span>:</label>
                <input class="input__text text" type="password" id="pw-new" name="pw-new" v-model="text">
            </div>
        </div>
        <div class="margin__small margin">
            <label class="title title--tertiary" for="pw-repeat">Herhaal nieuwe wachtwoord <span
                    class="obligated">*</span>:</label>
            <input class="input__text text" type="password" id="pw-repeat" name="pw-repeat" v-model="text">
        </div>
        <div class="flex flex--center">
            <a class="btn" href="" @click="changePassword">Verander</a>
            <a class="btn btn--yellow" href="" @click="logOut" >Log out</a>
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

.title--small {
    font-size: 1.5em;
    color: var(--primary-pink);
}
</style>