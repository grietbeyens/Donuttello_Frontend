<script setup>


const login = (e) => {
    e.preventDefault();
    let apiUrl = "https://donuttello-api-xjax.onrender.com/api/v1/users/login/";

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
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === "success") {
            localStorage.setItem("token", data.data.token);
            window.location.href = "#/gallerij";
        } else {
            alert("Er is iets misgegaan, probeer het opnieuw");
        }
    })
}

</script>

<template class="center">
    <div class="container flex flex--center flex--col">
        <h2 class="title">Hey Donuttello!</h2>
        <div class="margin__small">
            <label class="title title--tertiary" for="username">Gebruikersnaam <span class="obligated">*</span>:</label>
            <input class="input__text text" type="text" id="username" name="username" v-model="text"
                placeholder="Donuttello">
        </div>
        <div class="margin__small margin">
            <div>
                <label class="title title--tertiary " for="wachtwoord">Wachtwoord <span class="obligated">*</span>:</label>
                <input class="input__text text" type="password" id="wachtwoord" name="wachtwoord" v-model="text">
            </div>
        </div>
        <div>
        <a class="title title--tertiary" href="#/verander-wachtwoord">Wachtwoord vergeten?</a>
        </div>
        <div class="flex flex--center">
            <a class="btn" href="" @click="login">Log in</a>
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