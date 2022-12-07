import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

document.getElementById("btn-status").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("btn-status").classList.toggle("btn-blue");
    if ((document.getElementById("btn-status").classList.contains("btn-blue")))
      document.getElementById("btn-status").innerHTML = "Klaar";
    else document.getElementById("btn-status").innerHTML = "In afwachting";
  
});
