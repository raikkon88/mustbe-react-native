import Axios from '../../axios'

const PlayerApi = {
    self: () => Axios.get("/players/self")
}

export default PlayerApi