import  axios  from 'axios';


const Client = axios.create({
  baseURL: 'http://127.0.1:8000/api'
});


export default Client;