import axios from 'axios'

const url = 'http://localhost:3001/cadav/'

export const getCadavData = (name) => {
  console.log('using getCadavData service')
  return axios.get(url + name)
  .then(res=>{
      console.log('Got Some sort of response')
      console.log(res.data[0])
      return res.data[0]
  })
  .catch(e=>e)

 // return testCadav;
}

export const getAllCadavs = () => {
  return axios.get(url+'list')
    .then( res => {
      console.log('Got all cadavs')
      return res.data
    })
}

export const addLine = (urlEnd,line) => {
  return axios.post(url+urlEnd, line)
    .then(res => {
      console.log('Added new Line')
      return res;
    })
}

// const testCadav = {
//   lines: [
//   {text: 'Alla en el fondo del mar había un castido encantado', color: '#ef2e60', writer: 'Tom'},
//   {text: 'En el castillo había una princesa llamada Rita',color: '#fdc847', writer: 'Jonnny'},
//   {text: 'A Rita le gustaba escaparse y subirse a los árboles. Un día ',color: '#36b980', writer: 'Silv123'},
//   {text: 'Rita se subió a una palmera y conocío a un mono llamado Emilio',color: '#ee4d30', writer: 'DJ'},
//   {text: 'Emilio quería casarse con Rita pero Rita le dijo que no podía por que el no era humano',color: 'Diane', writer: 'Tom'},
//   {text: 'Rita se bajó del arbol y fue a una choza. y Ahí conocio a Pepe',color: '#531a4b', writer: 'Pedrooo'},
//   {text: 'Rita y Pepe se casaron y tuvieron un lindo hijo que parecia sapo. ', color: '#981f26', writer: 'AllanBoy'},
// ],
//   title: 'El Sapo',
//   urlEnd: url + 'sapo'
// }

