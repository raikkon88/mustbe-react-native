import axios from 'axios'
import Storage, {KEYS} from '../storage'

const url = "http://localhost:8080/api"

let Axios = axios 
Axios.defaults.baseURL = url

Axios.configure = (token) => {
    Axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

Axios.removeToken = () => {
    Axios.defaults.headers.common['Authorization'] = "";
}

Storage.get(KEYS.TOKEN).then(token => 
    Axios.configure(token)
)
   
export default Axios