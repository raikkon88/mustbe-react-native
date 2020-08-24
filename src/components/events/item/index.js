import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'


export default function EventItem({navigation, event, subscribe, unsubscribe, user}) {

    let subscribed = event.inscriptions.find(inscription => inscription.player.phone === user.phone) ? true : false;

    return (
        <View>
            <Text>{event.game.name}</Text>
            <Text>{event.address}</Text>
            <Text>{event.owner.phone}</Text>
            <Text>{event.startDate}</Text>
            { event.inscriptions.length < event.game.maxPlayers && !subscribed &&
                <Button 
                    title="Subscribe"
                    accessibilityLabel="Subscribe me into the event"
                    onPress={() => subscribe(event.id)}/>
            }
            { subscribed && 
                <View>
                    <Text>Subscribed!!</Text>
                    <Button
                        title="Unsubscribe"
                        accessibilityLabel="Unsubscribe me from this event"
                        onPress={() => unsubscribe(event.id)}/>
                </View>
            }
        </View>
    )
}