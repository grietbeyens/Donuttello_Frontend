<script setup>
</script>

<template>
    <div class="nav-margin padding-top ">
        <div class="flex flex--center flex--col">
            <h1 class="title margin">Jouw <span class="obligated">eigen</span> donut creëren?</h1>
            <a class="obligated btn btn--yellow" href="#/configurator">Dat kan hier!</a>
        </div>
        <div>
            <img class="pattern" src="../assets/patroon.png" alt="patroon">
        </div>
        <div class="text-container">
            <h2 class="title title--secondary"><span class="obligated">WOW</span>, hoe werkt dat?</h2>
            <p class="text margin__small">Gewoon simpelweg vanuit jouw zetel!
            Via onze speciale configurator heb je de
            mogelijkheid om helemaal online je eigen donut
            te creëren.
            </p>
            <p class="margin__small">
            Onze bakkerijen kunnen de chocoladeglazuur
            elke kleur geven die jij wil! Daarnaast kan je
            ook nog een eetbaar logo op je donut laten
            plaatsen. Perfect voor een verassende traktatie
            in jouw bedrijf!
            </p>
        </div> 
        <div>
            <img class="mascotte" src="../assets/mascotte.png" alt="mascotte">
        </div>  
        <footer class="flex flex--center flex--col">
            <p class="title title--tertiary">Is jouw bedrijf op zoek naar een verrassende traktatie?</p>
            <a class="btn margin__small" href="#/configurator">Klik dan hier!</a>
        </footer>
    </div>
</template>

<style scoped>
h1{
    width: 300px;
    text-align: center;
}

.padding-top{
    padding-top: 8em;
}

.pattern{
    background-size: cover;
    width: 100%;
    margin: 7em 0 1em 0;
}

.title--secondary{
    color: var(--dark);
}

.title--tertiary{
    width: 12em;
}

.mascotte{
    width: 12em;
    position: absolute;
    right: 3em;
    z-index: -1;
}

footer{
    background-color: var(--primary-blue);
    padding: 2em;
    text-align: center;
    margin-top: 16em;
}

@media screen and (min-width: 1024px) {
    .text-container{
        width: 50%;
    }

}
</style>