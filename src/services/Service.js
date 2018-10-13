import axios from 'axios'

const url = 'http://localhost/3000/'

export const getCadavData = (id) => {
  return axios.get(url + 'cadav/' + id)
  .then(res=>{
      return res.data
  })
  .catch(e=>e)
}