import React,{Component} from 'react'
import axios from 'axios'
const url = 'http://localhost:3001/new'

class New extends Component {

  state = {
    newCadav: {}

  }

  onSubmit = (e) => {
    e.preventDefault();
    const {newCadav} = this.state
    axios.post(url, newCadav )
      .then((cadav)=>{
        console.log(cadav.urlEnd)
        this.props.history.push(newCadav.title) //fix this hack with cadav.urlEnd
        })
      .catch((e)=>{console.log(e)})
  }

  onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const {newCadav} = this.state
    newCadav[field] = value
    this.setState({newCadav})
    console.log(this.state.newCadav)
}

  render(){
    return(
      <div>
        <form className='new-form' onSubmit = {this.onSubmit}>
          <input onChange = {this.onChange} placeholder="Nombre del Cadaver" name="title" type="text"/>
          <input onChange = {this.onChange} placeholder="Primera linea" name="text" type="text"/>
          <input onChange = {this.onChange} placeholder="Escritor" name="writer" type="text"/>
          <input type="submit" value="Crear Nuevo"/>
        </form>
      </div>
    )
  }
}

export default New
