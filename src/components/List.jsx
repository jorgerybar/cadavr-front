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
      <div className="list">
       {data.map((cd, i)=><Cadav data={cd} key={i}/>) }
      </div>
    )
  }

 }

 export default List