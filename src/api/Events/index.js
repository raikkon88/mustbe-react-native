import Axios from '../../axios'

const EventsApi = {
    all: () => Axios.get("/events"),
}

export default EventsApi