
import img1 from "@images/img1.jpeg";
import img2 from "@images/img2.jpeg";
import img3 from "@images/img3.jpeg";
import Modal from "@templates/modalHtml";
import "@styles/style.css";
import "@styles/_vars.scss";



const Corpo = () => {


const principalPage = `

    <div class="titleHead">
      <h2>Awesome way to programming... WebPack a smarty way</h2>
    </div>
    <div class="container">
        <h1>A little WebPack Project</h1>
        <p>Webpack is a free and open-source module bundler for JavaScript.</p>
        <button class = "btn" >Click here</button>
        <div class="imagenes">
        
        <div><img src= "${img1}" alt=""><span>Breackfast</span></div>
        <div><img src= "${img2}" alt=""><span>Beauty</span></div>
        <div><img src= "${img3}" alt=""><span>My Town</span></div>
        
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


