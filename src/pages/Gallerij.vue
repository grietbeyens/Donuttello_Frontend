<script setup>
import { BASE_URL } from '../constants';
import { onMounted, reactive } from 'vue';
import router from '../router/router';

if (!localStorage.getItem('token')) {
    router.push('/')
}

let donuts = reactive({
    donuts: []
});

onMounted(() => {
    if (localStorage.getItem("token")) {
        let apiUrl = BASE_URL + "/api/v1/donuts/";
        fetch(apiUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            mode: 'cors',
        })
            .then(response => response.json())
            .then(data => {
                donuts.donuts = data.data;
            })
    }
})

</script>

<template>
     <div class="nav-margin">
        <div class="gallery flex flex--center flex--wrap ">
            <div class="donut__container" v-for="donut in donuts.donuts.donuts" :key="donut.id">
                <router-link class="flex flex--center donut title title--secondary"
                    :to="'/donut-details/' + donut._id">Check details</router-link>
                <div class="flex flex--center donut__banner">
                    <div class="donut__banner__text">
                        <h3 class="title title--tertiary tester">{{ donut.name }}</h3>
                        <p class="text tester">{{ donut.company }}</p>
                        <div class="margin__small">
                            <h4 >Status: <span class="obligated">{{ donut.status }}</span></h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.donut {
    padding: 1em 0;
    text-decoration: none;
}

.donut__container {
    background-color: var(--pastel-blue);
    width: 22em;
    border-radius: 40px;
    margin: 1em
}

.donut__banner {
    background-color: var(--neutral);
    box-shadow: 0px 148px 59px rgba(0, 66, 62, 0.01),
        0px 83px 50px rgba(0, 66, 62, 0.05),
        0px 37px 37px rgba(0, 66, 62, 0.09),
        0px 9px 20px rgba(0, 66, 62, 0.1),
        0px 0px 0px rgba(0, 66, 62, 0.1);
    ;
    border-radius: 0 0 40px 40px;
    padding: 1em 0;
}

.donut__banner__text {
    padding-right: 2em;
}

.gallery {
    margin-top: 6em;
}
</style>
