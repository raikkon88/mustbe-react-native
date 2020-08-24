import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'


export default function InscriptionItem({navigation, inscription, unsubscribe}){

    return (
        <View>
            <Text>{inscription.event.game.name}</Text>
            <Text>{inscription.event.startDate}</Text>
            <Button
                title="Unsubscribe"
                accessibilityLabel="Unsubscribe me from this event"
                onPress={() => unsubscribe(inscription.event.id)}/>
        </View>
    )
}