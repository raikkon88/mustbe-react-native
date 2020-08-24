import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native'


export default function Credentials({action, textButton, label}){
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Phone Number:</Text>
            <TextInput
                onChangeText={text => setPhone(text)}
                value={phone}
                />
            <Text>Password:</Text>
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                />

            <Button
                onPress={() => action(phone, password)}
                title={textButton}
                accessibilityLabel={label}
            />
        </View>
    )
}
