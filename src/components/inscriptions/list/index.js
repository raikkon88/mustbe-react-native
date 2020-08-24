import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native'
import InscriptionsApi from '../../../api/Inscriptions'

export default function InscriptionsList({navigation}) {

    const [inscriptions, setInscriptions] = useState([])

    useEffect(() => {
        InscriptionsApi.all()
            .then(res => setInscriptions(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <View>
            <Text>Inscriptions</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={inscriptions}
                renderItem={({item}) => <Text>item</Text>}/>
        </View>
    )
}