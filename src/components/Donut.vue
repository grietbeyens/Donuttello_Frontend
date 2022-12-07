<script setup>
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { onMounted } from 'vue';
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF8F594);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight-200);
onMounted(() => {
    document.querySelector(".donut").appendChild(renderer.domElement);
    
    //glaze kleur
    document.querySelector(".recolor_glaze").addEventListener("input", updateGlaze, false);
    function updateGlaze(event) {
        donut.getObjectByName("Object_6").material.color.set(event.target.value);
    }
    //sprinkles kleur
    document.querySelector(".recolor_sprinkles").addEventListener("input", updateSprinkles, false);
    function updateSprinkles(event) {
        donut.getObjectByName("Object_8").material.color.set(event.target.value);
    }
    //sprinkels aan of op
    const removeSprinkles = document.querySelector(".checkbox");
    removeSprinkles.addEventListener("click", () => {
        if (removeSprinkles.checked) {
            donut.getObjectByName("Object_8").visible = false;
        } else {
            donut.getObjectByName("Object_8").visible = true;
        }
    })

    //kaartje rechthoek
    const rechthoekGeometry = new THREE.BoxGeometry(2, 1, 1);
    const rechthoekMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.FrontSide });
    const rechthoek = new THREE.Mesh(rechthoekGeometry, rechthoekMaterial);
    rechthoek.position.x = -3; //0
    rechthoek.position.y = 5; //2.4
    rechthoek.position.z = -1;  //-1
    rechthoek.scale.x = 1; //1
    rechthoek.scale.y = 0.1; //0.1
    rechthoek.scale.z = 1; //1
    rechthoek.rotation.x = 1.5; //1.5

    const checkboxRechthoek = document.querySelector("#rechthoek");
    checkboxRechthoek.addEventListener("change", () => {
        if (checkboxRechthoek.checked) {
            scene.remove(vierkant);
            scene.remove(cirkel);
            scene.remove(ovaal);
            scene.add(rechthoek);
        } else {
            scene.remove(rechthoek);
        }
    });

    //kaartje vierkant
    const vierkantGeometry = new THREE.BoxGeometry(1, 1, 1);
    const vierkantMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const vierkant = new THREE.Mesh(vierkantGeometry, vierkantMaterial);
    vierkant.position.x = -3.4;
    vierkant.position.y = 5;
    vierkant.position.z = -1;
    vierkant.scale.x = 1;
    vierkant.scale.y = 0.1;
    vierkant.scale.z = 1;
    vierkant.rotation.x = 1.5;

    const checkboxVierkant = document.querySelector("#vierkant");
    checkboxVierkant.addEventListener("change", () => {
        if (checkboxVierkant.checked) {
            scene.remove(rechthoek);
            scene.remove(cirkel);
            scene.remove(ovaal);
            scene.add(vierkant);
        } else {
            scene.remove(vierkant);
        }
    });


    //kaartje cirkel
    const cirkelGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1, 32);
    const cirkelMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cirkel = new THREE.Mesh(cirkelGeometry, cirkelMaterial);
    cirkel.position.x = -3.4;
    cirkel.position.y = 5;
    cirkel.position.z = -1;
    cirkel.scale.x = 1;
    cirkel.scale.y = 0.1;
    cirkel.scale.z = 1;
    cirkel.rotation.x = 1.5;

    const checkboxCirkel = document.querySelector("#cirkel");
    checkboxCirkel.addEventListener("change", () => {
        if (checkboxCirkel.checked) {
            scene.remove(rechthoek);
            scene.remove(vierkant);
            scene.remove(ovaal);
            scene.add(cirkel);
        } else {
            scene.remove(cirkel);
        }
    });


    //kaartje ovaal
    const ovaalGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1, 32);
    const ovaalMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ovaal = new THREE.Mesh(ovaalGeometry, ovaalMaterial);
    ovaal.position.x = -2.9;
    ovaal.position.y = 5;
    ovaal.position.z = -1;
    ovaal.scale.x = 2;
    ovaal.scale.y = 0.1;
    ovaal.scale.z = 1;
    ovaal.rotation.x = 1.5;

    const checkboxOvaal = document.querySelector("#ovaal");
    checkboxOvaal.addEventListener("change", () => {
        if (checkboxOvaal.checked) {
            scene.remove(rechthoek);
            scene.remove(vierkant);
            scene.remove(cirkel);
            scene.add(ovaal);
        } else {
            scene.remove(ovaal);
        }
    });

});

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

let donut;
const gltfLoader = new GLTFLoader();
gltfLoader.load('../src/assets/models/donut/scene.gltf', (gltf) => {
    donut = gltf.scene;
    gltf.scene.scale.set(18, 18, 18);
    // rotate donut to front
    gltf.scene.rotateZ(12);
    gltf.scene.rotateX(Math.PI / 4);
    scene.add(donut);
});

const dire = new THREE.DirectionalLight(0xfffffff, 2);
dire.position.set(2, 4, 2);
scene.add(dire);
camera.position.z = 5;
camera.position.y = 1;

function animate() {
    requestAnimationFrame(animate);
    if (donut) {
        donut.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
}

animate();
</script>

<template>
    <div>
        <div class="nav-margin">
        </div>
        <!-- <canvas class="donut"></canvas> -->
    </div>
</template>



<style scoped>

</style>