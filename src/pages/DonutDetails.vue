<script setup>
</script>

<template>
    <div class="nav-margin flex-big">
        <div class="flex flex--center flex--wrap container-big">
            <div class="donut__container">
                <a href="#/donut-details" class="flex flex--center donut">
                    <img src="../assets/donut.png" alt="donut">
                </a>
            </div>
        </div>
        <div class="details-big flex flex--center">
            <div>
                <div class="donut__banner flex">
                    <div class="donut__banner__text">
                        <h3 class="title title--tertiary tester">Naam van de donut</h3>
                        <p class="text tester">Bedrijfsnaam</p>
                    </div>
                    <div>
                        <!-- DELETE donut -->
                        <a href="#"><img src="../assets/trash.svg" alt="verwijder"></a>
                    </div>
                </div>
                <div>
                    <div class="margin">
                        <p class="title title--tertiary">Email: <span class="text">bedrijf@email.com</span></p>
                        <p class="title title--tertiary">Aantal: <span class="text">200</span></p>
                        <p class="title title--tertiary">Extra: <span class="text">1 donut zonder sprinkels</span></p>
                    </div>
                </div>
                <div class="flex flex--center">
                    <a class="btn" href="#">In afwachting</a>
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

.margin {
    margin: 2em 0 4em 0;
}

.details-big{
    margin: 0 2em;
    
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