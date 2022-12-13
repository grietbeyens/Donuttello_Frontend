<script setup>
import { BASE_URL } from '../constants';
import { onMounted, reactive} from 'vue';
import router from '../router/router';

let id = window.location.pathname.split("/")[2];
let donuts = reactive({
    donuts:[]
});
console.log(id);

onMounted(() => {
    if (localStorage.getItem("token")) {
      let apiUrl = BASE_URL + "/api/v1/donuts/"+id;
        fetch(apiUrl, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + localStorage.getItem("token"),
            },
            mode: 'cors',
        })
        .then (response => response.json())
        .then(data => {
            console.log(data);
            donuts.donuts = data.data;
        })
    }
})


const changeStatus = () => {
    if (localStorage.getItem("token")) {
        let apiUrl = BASE_URL + "/api/v1/donuts/" + id;
        let data;
        if(donuts.donuts.donut.status === "Aangevraagd"){
            data = {
                status: "In productie"
            }
        }
        else if(donuts.donuts.donut.status === "In productie"){
            data = {
                status: "Klaar"
            }
        } 
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
        .then (response => response.json())
        .then(data => {
            console.log(data);
            donuts.donuts = data.data;
        })
    }
}

const deleteDonut = () => {
    if (localStorage.getItem("token")) {
        let apiUrl = BASE_URL + "/api/v1/donuts/" + id;
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            },
            mode: 'cors',
        })
        .then (response => response.json())
        router.push('/gallerij')
    }
}


</script>

<template>
    <div class="nav-margin flex-big" v-for="donut in donuts.donuts" :key="donut.id">
        <div class="flex flex--center flex--wrap container-big">
            <div class="donut__container">
                <div class="flex flex--center donut"><img src="../assets/donut.png" alt="donut"></div>
            </div>
        </div>
        <div class="details-big flex flex--center">
            <div>
                <div class="donut__banner flex">
                    <div class="donut__banner__text">
                        <h3 class="title title--tertiary tester">{{donut.name}}</h3>
                        <p class="text tester">{{donut.company}}</p>
                    </div>
                    <div>
                        <router-link  @click="deleteDonut" exact to=""><img src="../assets/trash.svg" alt="verwijder"></router-link>
                    </div>
                </div>
                <div>
                    <div class="margin">
                        <p class="title title--tertiary">Email: <span class="text">{{donut.email}}</span></p>
                        <p class="title title--tertiary">Aantal: <span class="text">{{donut.amount}}</span></p>
                        <p class="title title--tertiary">Extra: <span class="text">{{donut.extra}}</span></p>
                        <p class="title title--tertiary">Glazuur: <span class="text">{{donut.glace}}</span></p>
                        <p class="title title--tertiary">Topping: <span class="text">{{donut.topping}}</span></p>
                        <p class="title title--tertiary">Logo: <img :src="donut.logo" alt="Geen logo gekozen" class="logo"></p>
                    </div>
                </div>
                <div class="flex flex--center">
                    <router-link class="btn" @click="changeStatus" exact to="">{{donut.status}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.donut {
    padding: 4em 0;
}

.donut__container {
    background-color: var(--pastel-blue);
    width: 100%;
}

.donut__banner {
    padding: 2em 0;
    justify-content: space-between;
}

.donut__banner__text {
    padding-right: 2em;
}

.btn {
    background-color: var(--pastel-pink);
    border: 4px solid var(--primary-pink);
    color: var(--dark);
}

.btn-blue{
    background-color: var(--pastel-blue);
    border: 4px solid var(--primary-blue);
    color: var(--dark);
}
.margin {
    margin: 2em 0 4em 0;
}

.details-big{
    margin: 0 2em;
    
}

.logo{
    width: 10em;
}

@media screen and (min-width: 1024px) {
    .details-big {
        width: 40vw;
        height: calc(100vh - 7.8em);
        background-color: var(--neutral);
    }

    .flex-big {
        display: flex;
        flex-direction: row-reverse;
    }

    .container-big{
        width: 60vw;
        height: 100%;
    }
    .donut__container {
        background-color: var(--pastel-blue);
        height: calc(100vh - 4em);
    }
    .margin{
        width: 25em;
    }

    .donut img{
        width: 15em;
    }
    .donut {
        padding: 11em 0;
    }
}
</style>