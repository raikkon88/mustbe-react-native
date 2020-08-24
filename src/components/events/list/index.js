import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import EventsApi from '../../../api/Events'
import EventItem from '../item'
import InscriptionsApi from '../../../api/Inscriptions'
import Storage, { KEYS } from '../../../storage'

export default function EventsList({navigation}) {

    const [events, setEvents] = useState([])
    const [user, setUser] = useState({})

    

    useEffect(() => {
        EventsApi.all() 
            .then(res => setEvents(res.data))
            .then(res => Storage.getObject(KEYS.USER))
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }, [])

    const subscribe = (eventId) => {
        InscriptionsApi.subscribe(eventId)
            .then(res => EventsApi.all())    
            .then(res => setEvents(res.data))
            .catch(err => console.log(err))
    }

    const unsubscribe = (eventId) => {
        InscriptionsApi.unsubscribe(eventId)
            .then(res => EventsApi.all())
            .then(res => setEvents(res.data))
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>Events</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={events}
                renderItem={({index,item}) =>  
                    <EventItem 
                        key={index.toString()} 
                        event={item} 
                        subscribe={subscribe}
                        unsubscribe={unsubscribe}
                        user={user}/>}/>
        </View>
    )
}