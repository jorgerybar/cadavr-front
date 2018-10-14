//import axios from 'axios'

const url = 'http://localhost/3000/'

const testCadav = {
  lines: [
  {text: 'Alla en el fondo del mar había un castido encantado', color: 'blue', owner: 'Tom'},
  {text: 'En el castillo había una princesa llamada telma',color: 'red', owner: 'Jonnny'},
  {text: 'A Telma le gustaba escaparse y subirse a los árboles. Un día ',color: 'blue', owner: 'Silv123'},
  {text: 'Telma se subió a una palmera y conocío a un mono llamado Emilio',color: 'red', owner: 'DJ'},
  {text: 'Emilio quería casarse con Telma pero Telma le dijo que no podía por que el no era humano',color: 'Diane', owner: 'Tom'},
  {text: 'Telma se bajó del arbol y fue a una choza. y Ahí conocio a Moisés',color: 'red', owner: 'Pedrooo'},
  {text: 'Telma y Moisés se casaron y tuvieron un lindo matrimonio. ', color: 'blue', owner: 'AllanBoy'},
],
  title: 'Flowerpot',
  url: url + 'flowerpot'
}

export const getCadavData = (name) => {
  // return axios.get(url + name)
  // .then(res=>{
  //     return res.data
  // })
  // .catch(e=>e)

  return testCadav;
}