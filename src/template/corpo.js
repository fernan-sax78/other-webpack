
import img1 from "@images/img1.jpeg";
import img2 from "@images/img2.jpeg";
import img3 from "@images/img3.jpeg";
import Modal from "@templates/modalHtml";
import "@styles/style.css";
import "@styles/_vars.scss";



const Corpo = () => {


const principalPage = `

    <div class="titleHead">
      <h2>Awesome way to programming... WebPack</h2>
    </div>
    <div class="container">
        <h1>Hello my people</h1>
        <p>Proclame la présente Déclaration universelle des droits de l’homme</p>
        <button class = "btn" >Click here</button>
        <div class="imagenes">
        
        <img src= "${img1}" alt="">
        <img src= "${img2}" alt="">
        <img src= "${img3}" alt="">
        
        </div>

        <!-- parte del code API -->
        <div id="main"></div>
        <!-- ...................... -->

    </div>

    ${Modal()}

`;


return principalPage;

}


export default Corpo;


