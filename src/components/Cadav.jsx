import React, { Component } from 'react';

const testLines = [
  'Alla en el fondo del mar había un castido encantado',
  'En el castillo había una princesa llamada telma',
  'A Telma le gustaba escaparse y subirse a los árboles. Un día ',
  'Telma se subió a una palmera y conocío a un mono llamado Emilio',
  'Emilio quería casarse con Telma pero Telma le dijo que no podía por que el no era humano',
  'Telma se bajó del arbol y fue a una choza. y Ahí conocio a Moisés',
  'Telma y Moisés se casaron y tuvieron un lindo matrimonio. '
]

const testNames = ['Tom', 'Johnny', 'Silv124', 'DJ', 'Diane', 'Pedrooo','AllanBoy']

class Cadav extends Component {

  state = {
    title: 'Flowerpot',
    reveal: false,
    lines: []
  }

  //FOR TESTING PURPOSES ONLY
  componentWillMount(){
    const {lines} = this.state
    for (var i = 0; i < 7; i++)
      lines.push({text: testLines[i], color: this.randomColor(), owner: testNames[i] })
    console.log('mounting')
    console.log(lines)

    this.setState({lines})
    localStorage.setItem('user', 'jorge')
  }

  //WHEN NEW LINE IS SUBMITTED
  onSubmit = (e) => {
    e.preventDefault()
    const {lines} = this.state
    //add the line to the list
    lines.push({text: e.target.childNodes[0].value, color: this.randomColor(), owner: 'Jorge'  })
    //update the state and reveal
    this.setState({lines, reveal: true})
  }

  //CHOOSE A RANDOM COLOR FOR LINE
  randomColor = () =>{
    var o = Math.round, r = Math.random, s = 150;
    return 'rgba(' + o(r()*s*2 ) + ',' + o(r()*s ) + ',' + o(r()*s) + ',' + 1 + ')';
  }

  drawLine = (l,i) => {
    return (
    <div className="cadav-line" key={i}>
        <p className="cadav-line-writer">{l.owner}</p>
        <span style={{color: l.color}} className="cadav-line-txt">
            {l.text}
        </span>
    </div>)
  }

  //REVEAL LINES AFTER USER CONTRIBUTES
 checkReveal  = () =>{
  const {title, lines, reveal} = this.state

  if (reveal)
   return (
     <div>
      <h1 className="cadav-title">{title}</h1>
      {lines.map((l,i)=>this.drawLine(l, i))}
      </div>
   )
   else 
    return (
      <div>
      <h1 className="cadav-title">New cadav</h1>
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
    return (
      <div className="cadav">
        {this.checkReveal()}
      </div>
    );
  }
}

export default Cadav;
