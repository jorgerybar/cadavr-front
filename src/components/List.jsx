import React, {Component} from 'react'
import Cadav from './Cadav'
import {getAllCadavs} from '../services/Service'


 class List extends Component {


  state = {
    data: []
  }

  componentWillMount(){
    // const {name} = this.props.match.params
    // let data = getCadavs(name)
    // this.setState({data})

    getAllCadavs() //esto es un servicio
    .then(data=>{
        this.setState({data})
    })
    .catch(e=>console.log(e))
  }

  render(){
    const {data} = this.state
    return (
      <div>
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
              </ul>
            </nav>
            {/*End of Main Navigation*/}
            <div id="nav-trigger"><span /></div>
            <nav id="nav-mobile" />
          </div>
        </div>
      </div>{/*End of Header*/}
      <div className="list">
       {data.map((cd, i)=><Cadav data={cd} key={i}/>) }
      </div>
      </div>
    )
  }

 }

 export default List