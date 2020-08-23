import axios from 'axios'

const url = "http://localhost:8080/api"

let Axios = axios 
Axios.defaults.baseURL = url

export default Axios