import React, { Component } from 'react'
import axios from 'axios'

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
      newlines.push({text: e.target.childNodes[0].value, color: this.randomColor(), writer: 'Jorge'  })
    // //update the state and reveal
   // const newLine = {text: e.target.childNodes[0].value, color: this.randomColor(), owner: 'Jorge'  }
    this.setState({reveal: true, newlines})
    //axios.post(this.props.data.urlEnd,newLine)
    // .then((r)=>{this.setState({reveal:true})})
    // .catch((e)=>{console.log(e)})
  }

  //CHOOSE A RANDOM COLOR FOR LINE
  randomColor = () =>{
    var o = Math.round, r = Math.random, s = 150;
    return 'rgba(' + o(r()*s*2 ) + ',' + o(r()*s ) + ',' + o(r()*s) + ',' + 1 + ')';
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
     <div>
      <h1 className="cadav-title">{title}</h1>
      {lines.map((l,i)=>this.drawLine(l, i))}
      <div className="sharethis-inline-share-buttons"></div>
      </div>
   )
   else 
    return (
      <div>
      <h1 className="cadav-title">{title}</h1>
      {console.log(lines)}
      {this.drawLine(lines[lines.length-1])}
      <form className="cadav-form" onSubmit={this.onSubmit}>
        <input id="cadav-input" maxLength="200" placeholder='add your line' type="text"/>
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
