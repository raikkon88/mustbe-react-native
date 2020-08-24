import React, {useEffect} from 'react'
import {
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';
import AuthApi from '../../api/Auth'
import Credentials from '../../components/credentials'
import PlayerApi from '../../api/Players'
import Storage , { KEYS } from '../../storage'

export default function LoginPage({navigation}) {

    const login = (phone, password) => {
        AuthApi.login(phone, password)
            .then(res => {
                navigation.navigate('Home')
            }) 
            .catch(err => console.log(err))
    }

    const register = () => {
        navigation.navigate('Register')
    }

    useEffect(() => {
        PlayerApi.self()
                .then(res => { 
                    Storage.saveObject(KEYS.USER, res.data)
                    navigation.navigate("Home")
                })
                .catch(err => console.log(err))
    }, [])

    return ( 
        <View>
            <Credentials
                action={login}
                textButton="login"
                label="Push this button to log in"/>

            <Button
                onPress={register}
                title="Register"
                accessibilityLabel="If you haven't got an account, please Register."
                ></Button>
        </View>
    )

}