import React, { Component } from 'react'
import axios from 'axios'
import {addLine} from '../services/Service'


class Cadav extends Component {

  state = {
    title: 'Flowerpot',
    reveal: false,
    newlines: [],
    urlEnd: null
  }

  componentDidMount(){
    const {lines, title, urlEnd} = this.props.data
    this.setState({lines, title, urlEnd})
  }

  onSubmit = (e) => {
    e.preventDefault()
     const {newlines} = this.state
    // //add the line to the list
    const newLine = {text: e.target.childNodes[1].value, 
                    color: this.randomColor(), 
                    writer:  e.target.childNodes[0].value }
    newlines.push(newLine)
    // //update the state and reveal
    this.setState({reveal: true, newlines})
    addLine(this.props.data.urlEnd,newLine)
     .then((r)=>{console.log('Post Successful' + r)})
     .catch((e)=>{console.log(e)})
  }

  //CHOOSE A RANDOM COLOR FOR LINE
  randomColor = () =>{
    var colors = [
    '#ef2e60',
    '#fdc847',
    '#36b980',
    '#ee4d30',
    '#531a4b',
    '#981f26']

    var o = Math.round, r = Math.random
    return colors[o(r()*6)]
    // return 'rgba(' + o(r()*s*2 ) + ',' + o(r()*s ) + ',' + o(r()*s) + ',' + 1 + ')';
  }

  drawLine = (l,i) => {
    return (
    <div className="cadav-line" key={i}>
        <p className="cadav-line-writer">{l.writer}</p>
        <span style={{color: l.color}} className="cadav-line-txt">
            {l.text}
        </span>
    </div>)
  }

  //REVEAL LINES AFTER USER CONTRIBUTES
 checkReveal  = () =>{
  const {title, lines} = this.props.data
  const reveal = this.state.reveal

  if(!title || !lines)
    return;

  lines.push(...this.state.newlines)


  if (reveal)
   return (
     <div >
      <h1 className="cadav-title">{title}</h1>
      {lines.map((l,i)=>this.drawLine(l, i))}
      <div className="sharethis-inline-share-buttons"></div>
      <img className="cadav-share" width='100px' src="buttons.png" alt=""/>
      </div>
   )
   else 
    return (
      <div>
      <h1 className="cadav-title">{title}</h1>
      {console.log(lines)}
      {this.drawLine(lines[lines.length-1])}
      <form className="cadav-form" onSubmit={this.onSubmit}>
      <input id="cadav-input-writer" maxLength="10" placeholder='Mi nombre es..' type="text"/>
        <input id="cadav-input-line" maxLength="200" placeholder='Mi linea genial' type="text"/>
        <input className="cadav-btn" type="submit" value="Add"/>
      </form>
      </div>
    )
 
 }

  render() {

    console.log('Render Cadav Title ' + this.state.title)

    return (
      <div className="cadav">
        {this.checkReveal()}
      </div>
    );
  }
}

export default Cadav;
