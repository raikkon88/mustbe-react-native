import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import EventsApi from '../../../api/Events'
import EventItem from '../item'

export default function EventsList({navigation}) {

    const [events, setEvents] = useState(null)

    useEffect(() => {
        EventsApi.all() 
            .then(res => setEvents(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <View>
            <Text>Events</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={events}
                renderItem={({index,item}) =>  <EventItem key={index.toString()} event={item}/>}/>
        </View>
    )
}