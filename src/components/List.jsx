import React, {Component} from 'react'
import Cadav from './Cadav'

 class List extends Component {

  render(){
    return (
      <div className="list">
        <Cadav/>
        <Cadav/>
        <Cadav/>
        <Cadav/>
      </div>
    )
  }

 }

 export default List