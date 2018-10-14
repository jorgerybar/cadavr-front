import React, {Component} from 'react'
import Cadav from './Cadav'
import {getCadavData} from '../services/Service'

class Single extends Component{

  state = {
    data: []
  }

  componentWillMount(){
    const {name} = this.props.match.params
    let data = getCadavData(name)
    this.setState({data})

    // getCadavData(id) //esto es un servicio
    // .then(data=>{
    //     this.setState({data})
    // })
    // .catch(e=>console.log(e))
  }

  render(){
    const {data} = this.state
    return(
      <div>
        <Cadav data={data}/>
      </div>
    )
  }
}

export default Single