<script setup>
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { onMounted } from 'vue';
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xF8F594);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight - 200);

let donut;
let group;
const gltfLoader = new GLTFLoader();
gltfLoader.load('../src/assets/models/scene.gltf', (gltf) => {
    donut = gltf.scene;
    gltf.scene.scale.set(4, 4, 4);
    gltf.scene.rotateY(-6.5)
    scene.add(donut);
});

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
onMounted(() => {
    document.querySelector(".donut").appendChild(renderer.domElement);

    //glaze kleur
    document.querySelector(".recolor_glaze").addEventListener("input", updateGlaze, false);
    function updateGlaze(event) {
        donut.getObjectByName("Icing").material.color.set(event.target.value);
    }
    //sprinkles kleur
    document.querySelector(".recolor_sprinkles").addEventListener("input", updateSprinkles, false);
    function updateSprinkles(event) {
        donut.getObjectByName("Sprinkle_3039").material.color.set(event.target.value);
    }
    //sprinkels aan of op
    const removeSprinkles = document.querySelector(".checkbox");
    removeSprinkles.addEventListener("click", () => {
        if (removeSprinkles.checked) {
            donut.getObjectByName("Sprinkle_3039").visible = false;
        } else {
            donut.getObjectByName("Sprinkle_3039").visible = true;
        }
    })

    const imageInput = document.querySelector(".imageInput");
    imageInput.addEventListener("change", (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            localStorage.setItem("image", reader.result);
            rechthoek.material.map = new THREE.TextureLoader().load(reader.result);
            vierkant.material.map = new THREE.TextureLoader().load(reader.result);
            cirkel.material.map = new THREE.TextureLoader().load(reader.result);
            ovaal.material.map = new THREE.TextureLoader().load(reader.result);
        };
    }
    );

    const image = localStorage.getItem("image");
    group = new THREE.Group();
    scene.add(group);

    const removeImage = document.querySelector("#verwijder");
    removeImage.addEventListener("click", () => {
        document.querySelector(".imageInput").value = null;
        group.remove(rechthoek);
        group.remove(vierkant);
        group.remove(cirkel);
        group.remove(ovaal);
    });

    const rechthoekTexture = new THREE.TextureLoader().load(image);
    const rechthoekGeometry = new THREE.BoxGeometry(2, 1, 1);
    const rechthoekMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: rechthoekTexture, side: THREE.FrontSide });
    const rechthoek = new THREE.Mesh(rechthoekGeometry, rechthoekMaterial);
    rechthoek.position.set(0, 1.6, -0.1);
    rechthoek.scale.set(0.8, 0.08, 0.8);
    rechthoek.rotation.set(1.5, 0, 0.5)

    const checkboxRechthoek = document.querySelector("#rechthoek");
    checkboxRechthoek.addEventListener("change", () => {
        if (checkboxRechthoek.checked) {
            group.remove(vierkant);
            group.remove(cirkel);
            group.remove(ovaal);
            group.add(rechthoek);
        }
    });

    const vierkantTexture = new THREE.TextureLoader().load(image);
    const vierkantGeometry = new THREE.BoxGeometry(1, 1, 1);
    const vierkantMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: vierkantTexture });
    const vierkant = new THREE.Mesh(vierkantGeometry, vierkantMaterial);
    vierkant.position.set(0, 1.6, -0.1);
    vierkant.scale.set(1, 0.1, 1);
    vierkant.rotation.set(1.5, 0, 0.5)

    const checkboxVierkant = document.querySelector("#vierkant");
    checkboxVierkant.addEventListener("change", () => {
        if (checkboxVierkant.checked) {
            group.remove(rechthoek);
            group.remove(cirkel);
            group.remove(ovaal);
            group.add(vierkant);
        }
    });

    const cirkelTexture = new THREE.TextureLoader().load(image);
    const cirkelGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1, 32);
    const cirkelMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: cirkelTexture });
    const cirkel = new THREE.Mesh(cirkelGeometry, cirkelMaterial);
    cirkel.position.set(0, 1.6, 0);
    cirkel.scale.set(1, 0.1, 1);
    cirkel.rotation.set(0, 1, 1.55);

    const checkboxCirkel = document.querySelector("#cirkel");
    checkboxCirkel.addEventListener("change", () => {
        if (checkboxCirkel.checked) {
            group.remove(rechthoek);
            group.remove(vierkant);
            group.remove(ovaal);
            group.add(cirkel);
        } else {
            group.remove(cirkel);
        }
    });

    const ovaalTexture = new THREE.TextureLoader().load(image);
    const ovaalGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1, 32);
    const ovaalMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: ovaalTexture, side: THREE.FrontSide });
    const ovaal = new THREE.Mesh(ovaalGeometry, ovaalMaterial);
    ovaal.position.set(0, 1.6, -0.1);
    ovaal.scale.set(1, 0.1, 1.5);
    ovaal.rotation.set(0, 1, 1.55);

    const checkboxOvaal = document.querySelector("#ovaal");
    checkboxOvaal.addEventListener("change", () => {
        if (checkboxOvaal.checked) {
            group.remove(rechthoek);
            group.remove(vierkant);
            group.remove(cirkel);
            group.add(ovaal);
        } else {
            group.remove(ovaal);
        }
    });
});

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

camera.position.z = 5;
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
const dire = new THREE.DirectionalLight(0xfffffff, 1);
dire.position.set(2, 4, 2);
scene.add(dire);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if(group && donut) {
        //donut rotation
        donut.rotation.y += 0.01;
        group.rotation.y += 0.01;
        //if donut is 25% of the way through the animation, start rotating the group, slow down at 75%
        if(donut.rotation.y > Math.PI / 2 && donut.rotation.y < Math.PI * 3 / 2) {
            donut.rotation.y += 0.1;
            group.rotation.y += 0.1;
        }
        //when done, repeat
        if(donut.rotation.y > Math.PI * 2) {
            donut.rotation.y = 0;
            group.rotation.y = 0;
        }
    }
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