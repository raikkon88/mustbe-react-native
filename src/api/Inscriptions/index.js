import Axios from 'axios'

const InscriptionsApi = {
    all: () => Axios.get("/inscriptions"),
    subscribe: (eventId) => Axios.post("/inscriptions/" + eventId),
    unsubscribe: (eventId) => Axios.delete("/inscriptions/" + eventId)
}

export default InscriptionsApi
