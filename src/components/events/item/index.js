import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default function EventItem({navigation, event}) {

    const subscribe = (eventId) => {

    }

    return (
        <View>
            <Text>{event.game.name}</Text>
            <Text>{event.address}</Text>
            <Text>{event.owner.phone}</Text>
            <Text>{event.startDate}</Text>
            { event.inscriptions.length < event.game.maxPlayers && 
                <Button 
                    title="Subscribe"
                    accessibilityLabel="Subscribe me into the event"
                    onPress={() => subscribe(event.id)}/>
            }
        </View>
    )
}