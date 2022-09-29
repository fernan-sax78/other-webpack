

const  Script = () => {

  const codeJavascript = '/src/template/codigo.js';

   let fragment = document.createDocumentFragment();
   let script = document.createElement("SCRIPT");
   const myBody = document.getElementsByTagName("body")[0];
  
   script.setAttribute('src', codeJavascript);

   fragment.appendChild(script);
   myBody.appendChild(fragment);


}

export default Script;

