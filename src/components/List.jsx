import React, {Component} from 'react'
import Cadav from './Cadav'
import {getCadavs} from '../services/Service'


 class List extends Component {


  state = {
    data: []
  }

  componentWillMount(){
    const {name} = this.props.match.params
    let data = getCadavs(name)
    this.setState({data})

    // getCadavData(id) //esto es un servicio
    // .then(data=>{
    //     this.setState({data})
    // })
    // .catch(e=>console.log(e))
  }

  render(){
    const {data} = this.state
    return (
      <div className="list">
        <Cadav data={data}/>
        <Cadav data={data}/>       
        <Cadav data={data}/>
        <Cadav data={data}/>
      </div>
    )
  }

 }

 export default List