import React, {Component} from 'react'
import Cadav from './Cadav'

class Single extends Component{

  state = {
    
  }

  componentWillMount(){
    console.log(this.props.match)
  }

  render(){
    return(
      <div>
        <Cadav/>
      </div>
    )
  }
}

export default Single