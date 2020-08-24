import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import InscriptionsApi from '../../../api/Inscriptions'
import InscriptionItem from '../item'
import Storage, { KEYS } from '../../../storage'

export default function InscriptionsList({navigation}) {

    const [inscriptions, setInscriptions] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            InscriptionsApi.all()
                .then(res => setInscriptions(res.data))
                .catch(err => console.log(err))
        });
        return unsubscribe;
    }, [navigation])

    const unsubscribe = (eventId) => {
        InscriptionsApi.unsubscribe(eventId)
            .then(res => InscriptionsApi.all())
            .then(res => setInscriptions(res.data))
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>Inscriptions</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={inscriptions}
                renderItem={({item}) => 
                    <InscriptionItem
                        unsubscribe={unsubscribe}
                        inscription={item}/>
                }/>
        </View>
    )
}