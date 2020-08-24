import Axios from '../../axios'
import Storage, { KEYS } from '../../storage'

const HEADER_BEARER = "Bearer "

const AuthApi = {
    login: (phone, password) => {
        let url = Axios.defaults.baseURL.replace('/api', '')
        return Axios.post(url + '/login', {phone: phone, password: password})
            .then(res => { 
                let token = res.headers.authorization.replace(HEADER_BEARER, "")
                Axios.configure(token)
                Storage.save(KEYS.TOKEN, token)
            })
    },
    register: (phone, password) => Axios.post('/auth/register', { phone: phone, password: password })
}    

export default AuthApi