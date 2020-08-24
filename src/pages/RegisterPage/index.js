import React from 'react'
import {
    View
} from 'react-native'
import Credentials from '../../components/credentials'
import AuthApi from '../../api/Auth'

export default function RegisterPage({navigation}){
    const save = (phone, password) => {
        AuthApi.register(phone, password) 
            .then(res => navigation.navigate("Login"))
            .catch(err => console.log(err))
    }


    return (
        <View>
            <Credentials 
                action={save}
                textButton="Register"
                accessibilityLabel="If you haven't got an account, please Register."
                />
        </View>
    )
}