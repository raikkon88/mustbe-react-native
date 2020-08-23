import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';
import AuthApi from '../../api/Auth'

export default function LoginPage({navigation}) {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        AuthApi.login(phone, password)
            .then(res => {
                navigation.navigate('Home')
            }) 
            .catch(err => console.log(err))
    }

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
                onPress={login}
                title="Login"
                accessibilityLabel="Push this button to log in"
            />
        </View>
    )

}