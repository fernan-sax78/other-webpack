
import Funcion from "@templates/codigo.js";
const  Script = () => {

  const codeJavascript = Funcion();

   let fragment = document.createDocumentFragment();
   let script = document.createElement("SCRIPT");
   const myBody = document.getElementsByTagName("body")[0];
  
   script.setAttribute('src', codeJavascript);

   fragment.appendChild(script);
   myBody.appendChild(fragment);


}

export default Script;

