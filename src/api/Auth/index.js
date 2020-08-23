import Axios from '../../axios'
import Storage from '../../storage'

const HEADER_BEARER = "Bearer "

const AuthApi = {
    login: (phone, password) => {
        let url = Axios.defaults.baseURL.replace('/api', '')
        return Axios.post(url + '/login', {phone: phone, password: password})
            .then(res => { 
                Storage.save(res.headers.authorization.replace(HEADER_BEARER, ""))
            })
    },
    register: (phone, password) => Axios.post('/', { phone: phone, password: password })
}    

export default AuthApi