
import Template from "@templates/Template.js";
import Corpo from "@templates/corpo";

const principal = document.getElementById('principal-page');
principal.innerHTML = Corpo();


(async function App() {
  const main = null || document.getElementById("main");
  main.innerHTML = await Template();
})();