import React, {Component} from 'react'
import '../css/animate.css';
import '../css/font-awesome.css';
import '../css/font-awesome.min.css';
import '../css/namari-color.css';
import '../css/style.css';

class Home extends Component {

  render(){
    return <div>
    
     
  {/* Preloader */}
  <div id="preloader">
    <div id="status" className="la-ball-triangle-path">
      <div />
      <div />
      <div />
    </div>
  </div>
  {/*End of Preloader*/}
  <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
    <div className="top-border wow fadeInDown animated" style={{visibility: 'visible', animationName: 'fadeInDown'}} />
    <div className="right-border wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}} />
    <div className="bottom-border wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp'}} />
    <div className="left-border wow fadeInLeft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}} />
  </div>
  <div id="wrapper">
    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
      <div id="header" className="nav-collapse">
        <div className="row clearfix">
          <div className="col-1">
            {/*Logo*/}
            <div id="logo">
              {/*Logo that is shown on the banner*/}
              {/* <img src="images/logo.png" id="banner-logo" alt="Landing Page"/> */}
              {/*End of Banner Logo*/}
              {/*The Logo that is shown on the sticky Navigation Bar*/}
              <h2 id="navigation-logo">CADAVR.IO</h2>
              {/* <img src="images/logo-2.png" id="navigation-logo" alt="Landing Page"/> */}
              {/*End of Navigation Logo*/}
            </div>
            {/*End of Logo*/}
            <aside>
              {/*Social Icons in Header*/}
              <ul className="social-icons">
                <li>
                  <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                    <i className="fa fa-facebook fa-1x" /><span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="Google+" href="http://google.com/+username">
                    <i className="fa fa-google-plus fa-1x" /><span>Google+</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                    <i className="fa fa-twitter fa-1x" /><span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                    <i className="fa fa-instagram fa-1x" /><span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="behance" href="http://www.behance.net">
                    <i className="fa fa-behance fa-1x" /><span>Behance</span>
                  </a>
                </li>
              </ul>
              {/*End of Social Icons in Header*/}
            </aside>
            {/*Main Navigation*/}
            <nav id="nav-main">
              <ul>
                <li>
                  <a href="/list">Cadavs</a>
                </li>
                <li>
                  <a href="/new">Agregar</a>
                </li>
                <li>
                  <a href="#gallery">Ejemplo</a>
                </li>
                <li>
                  <a href="#services">Acerca De</a>
                </li>
                <li>
                  <a href="#testimonials">Testimoniales</a>
                </li>
                <li>
                  <a href="#clients">Usuarios</a>
                </li>
              </ul>
            </nav>
            {/*End of Main Navigation*/}
            <div id="nav-trigger"><span /></div>
            <nav id="nav-mobile" />
          </div>
        </div>
      </div>{/*End of Header*/}
      {/*Banner Content*/}
      <div id="banner-content" className="row clearfix">
        <div className="col-38">
          <div className="section-heading">
            <h1>UNA HISTORIA HECHA ENSALADA</h1>
            <h2>Cadavr te permite expresar tu creatividad con tus amigos. Cada uno agrega su línea.</h2>
          </div>
          {/*Call to Action*/}
          <a href="#" className="button">CREA TU CADAV</a>
          {/*End Call to Action*/}
        </div>
      </div>{/*End of Row*/}
    </header>
    {/*Main Content Area*/}
    <main id="content">
      {/*Introduction*/}
      <section id="about" className="introduction scrollto">
        <div className="row clearfix">
          <div className="col-3">
            <div className="section-heading">
              <h3>MILES DE POSIBILIDADES</h3>
              <h2 className="section-title">Colabora con tus amigos</h2>
              <p className="section-subtitle">En Cadav.io puedes colaborar de una nueva forma. Con mucha mucha risa. Solo Agrega tu Linea</p>
            </div>
          </div>
          <div className="col-2-3">
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-bolt fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Agrega tu Linea</h4>
                <p>Usa tu creatividad para continuar la historia.</p>
              </div>
            </div>
            {/*End of Icon Block*/}
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-rocket fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Comparte Facilmente</h4>
                <p>Después de agregar tu linea puedes compartir con tu amigos tu creación. En FB, Whatsapp o donde quieras. Ríete al ver cómo ellos continuan la historia.</p>
              </div>
            </div>
            {/*End of Icon Block*/}
                        {/*Icon Block*/}
                        <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-smile-o fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Ŕíete sin Parar</h4>
                <p>Deja que la historia se desenvuelva. Verás como tomará caminos que nunca te hubieras imaginado.</p>
              </div>
            </div>
            {/*End of Icon Block*/}
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-thumbs-up fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Vota por las mejores</h4>
                <p>Explora las creaciones colaborativas de otras personas, contribuye y vota por las mejores.</p>
              </div>
            </div>
            {/*End of Icon Block*/}
          </div>
        </div>
      </section>
      {/*End of Introduction*/}
      {/*Gallery*/}
      <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
        <a href="http://getdrawings.com/images/surrealism-drawing-ideas-1.jpg" data-featherlight="image" className="col-3 wow fadeIn" data-wow-delay="0.1s"><img src="http://getdrawings.com/images/surrealism-drawing-ideas-1.jpg" alt="Landing Page" /></a>
      </aside>
      {/*End of Gallery*/}
      {/*Content Section*/}
      <div id="services" className="scrollto clearfix">
        <div className="row no-padding-bottom clearfix">
          {/*Content Left Side*/}
          <div className="col-3">
            {/*User Testimonial*/}
            <blockquote className="testimonial text-right bigtest">
              <q>Había una vez una jirafa llamada Henry. Henry tenía sueños de ser astronauta. Se inscribió al curso pero resultó que no cabía en el simulador.</q>
              <footer>— Cadav creado por Silvia Reyes, 12 años</footer>
            </blockquote>
            {/* End of Testimonial*/}
          </div>
          {/*End Content Left Side*/}
          {/*Content of the Right Side*/}
          <div className="col-3">
            <div className="section-heading">
              <h3>DEJATE SOLTAR</h3>
              <h2 className="section-title">Con el surrealismo nada tiene sentido</h2>
              <p className="section-subtitle">Origen </p>
            </div>
            <p>Cadáver exquisito es un juego de palabras por medio del cual se crean maneras
              de sacar de un frase muchas más. El resultado es conocido como un cadáver 
              exquisito o cadavre exquis en francés. Fue inventado por los surrealistas
              en 1925.En la versión original los jugadores escribían por turno en una hoja 
              de papel, la doblaban para cubrir parte de la escritura, y después la pasaban al siguiente
              jugador para otra colaboración.
            </p>
            <p>
              CADAVR.IO trae la magia del juego original de Cadavr al mundo digital. 
              Donde quiera que estás lo puedes abrir en cualquier dispositivo. 
              Nunca tendrás que perder otra hora de clase jugando Flappy Bird. En vez
              pon tu mente a un uso productivo, como lo es nuestro juego. 
            </p>
            {/* Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) */}
            <a href="#" data-videoid="OLD378K8tBM" data-videosite="youtube" className="button video link-lightbox">
              VER VIDEO <i className="fa fa-play" aria-hidden="true" />
            </a>
          </div>
          {/*End Content Right Side*/}
          <div className="col-3">
            <img src="http://getdrawings.com/images/surrealism-eye-drawing-13.jpg" alt="Dancer" />
          </div>
        </div>
      </div>
      {/*End of Content Section*/}
      {/*Testimonials*/}
      <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
        <div className="row clearfix">
          <div className="section-heading">
            <h3>FEEDBACK</h3>
            <h2 className="section-title">¿Qué Dicen Nuestros Usuarios?</h2>
          </div>
          {/*User Testimonial*/}
          <blockquote className="col-3 testimonial classic">
            <img src="images/user-images/user-1.jpg" alt="User" />
            <q>Siempre quise usar mi creatividad de escribir pero en la escuela nunca me dieron chance de ser libre</q>
            <footer>Rodrigo Sosa -Disléxico </footer>
          </blockquote>
          {/* End of Testimonial*/}
          {/*User Testimonial*/}
          <blockquote className="col-3 testimonial classic">
            <img src="images/user-images/user-2.jpg" alt="User" />
            <q>Cada Cadav es un portal a un lugar mágico. Quién tiene ganas de otra aplicación de Ecommerce. Con Cadavr.io mi mente se despierta.</q>
            <footer>Roslyn Doe - Escritora Veterana de Cadavs </footer>
          </blockquote>
          {/* End of Testimonial*/}
          {/*User Testimonial*/}
          <blockquote className="col-3 testimonial classic">
            <img src="images/user-images/user-3.jpg" alt="User" />
            <q>Siempre estoy triste en mi cuarto y no tengo nada qué hacer. Con Cadav.io me siento parte de una comunidad</q>
            <footer>Chepito - Me creo Hipster</footer>
          </blockquote>
          {/* End of Testimonial*/}
        </div>
      </aside>
      {/*End of Testimonials*/}
      {/*Clients*/}
      <section id="clients" className="scrollto clearfix">
        <div className="row clearfix">
          <div className="col-3">
            <div className="section-heading">
              <h3>TRUST</h3>
              <h2 className="section-title">Categorías</h2>
              <p className="section-subtitle">Estos dibujitos nos gustaron y en algún futuro cercano podrán llevarte a una categoría de Cadavs. Por ahora los puedes admirar </p>
            </div>
          </div>
          <div className="col-2-3">
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo1.png" alt="Company" />
              <div className="client-overlay"><span>Tree</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo2.png" alt="Company" />
              <div className="client-overlay"><span>Fingerprint</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo3.png" alt="Company" />
              <div className="client-overlay"><span>The Man</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo4.png" alt="Company" />
              <div className="client-overlay"><span>Mustache</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo5.png" alt="Company" />
              <div className="client-overlay"><span>Goat</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo6.png" alt="Company" />
              <div className="client-overlay"><span>Justice</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo7.png" alt="Company" />
              <div className="client-overlay"><span>Ball</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo8.png" alt="Company" />
              <div className="client-overlay"><span>Cold</span></div>
            </a>
            <a href="#" className="col-3">
              <img src="images/company-images/company-logo9.png" alt="Company" />
              <div className="client-overlay"><span>Cold</span></div>
            </a>
          </div>
        </div>
      </section>
      {/*End of Clients*/}
    </main>
    {/*End Main Content Area*/}
    {/*Footer*/}
    <footer id="landing-footer" className="clearfix">
      <div className="row clearfix">
        <p id="copyright" className="col-2">Diseño visual acoplado de <a href="https://www.shapingrain.com">ShapingRain</a></p>
        {/*Social Icons in Footer*/}
        <ul className="col-2 social-icons">
          <li>
            <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
              <i className="fa fa-facebook fa-1x" /><span>Facebook</span>
            </a>
          </li>
          <li>
            <a target="_blank" title="Google+" href="http://google.com/+username">
              <i className="fa fa-google-plus fa-1x" /><span>Google+</span>
            </a>
          </li>
          <li>
            <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
              <i className="fa fa-twitter fa-1x" /><span>Twitter</span>
            </a>
          </li>
          <li>
            <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
              <i className="fa fa-instagram fa-1x" /><span>Instagram</span>
            </a>
          </li>
          <li>
            <a target="_blank" title="behance" href="http://www.behance.net">
              <i className="fa fa-behance fa-1x" /><span>Behance</span>
            </a>
          </li>
        </ul>
        {/*End of Social Icons in Footer*/}
      </div>
    </footer>
    {/*End of Footer*/}
  </div>
  {/* Include JavaScript resources */}


    </div>
  }

}

export default Home