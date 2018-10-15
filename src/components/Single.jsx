import React, {Component} from 'react'
import Cadav from './Cadav'
import {getCadavData} from '../services/Service'

class Single extends Component{

  state = {
    data: []
  }

  componentWillMount(){
    const {name} = this.props.match.params
    // let data = getCadavData(name)
    // this.setState({data})

    getCadavData(name) //esto es un servicio
    .then(data=>{
        this.setState({data})
        console.log('Got Data from Axios' + this.state.data.title)
    })
    .catch(e=>console.log(e))
  }

  render(){
    const {data} = this.state
    console.log(' Render Single Data' + data.title)
    return(
      <div>
        <Cadav data={data}/>
      </div>
    )
  }
}

export default Single