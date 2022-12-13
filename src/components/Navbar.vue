<script setup>
import { ref, computed, onMounted, reactive, watch } from 'vue'
import { LoginState } from '../store/LoginState';

watch(() => LoginState.loggedIn, (loggedIn) => {
    if (loggedIn) {
        document.querySelector(".login").innerHTML = "Profiel";
        document.querySelector(".login").href = "/profiel";
        document.querySelector("#gallerij").style.display = "inline-block";
    } else {
        document.querySelector(".login").innerHTML = "Log in";
        document.querySelector(".login").href = "/login";
        document.querySelector("#gallerij").style.display = "none";
    }
});

onMounted(() => {
    if (localStorage.getItem("token")) {
        LoginState.loggedIn = true;
    }
})


</script>

<template>
    <nav class="navbar">
        <div class="navbar__logo">
            <router-link exact to="/"><img src="../assets/donuttello-logo.png" alt="logo"></router-link>
        </div>
        <div class="navbar__links">
            <router-link exact to="/configurator">Configurator</router-link> 
            <router-link id="gallerij" exact to="/gallerij">Gallerij</router-link>
            <router-link class="login" exact to="/login">Log in</router-link>
        </div>
    </nav>
    <!-- <component :is="currentView" /> -->
</template>

<style scoped>
.navbar {
    background-color: var(--primary-pink);
    color: var(--neutral);
    width: 100%;
    padding: 1.2em;
    position: fixed;
    top: 0;
}

a {
    color: var(--neutral);
    text-decoration: none;
    margin-right: 2em;
    text-transform: uppercase;
}

.navbar__links {
    display: flex;
    justify-content: flex-end;
    font-family: var(--title);
    padding-right: 1em;
}

.navbar__logo {
    position: absolute;
    left: calc(10vw);
    z-index: 2;
}

.navbar__logo img {
    width: 6em;
}

#gallerij {
    display: none;
}

@media screen and (max-width: 490px) {
    .navbar__links a {
        margin-right: 1em;
    }

    .navbar__logo {
        position: absolute;
        left: calc(5vw);
        z-index: 2;
    }
}
</style>

