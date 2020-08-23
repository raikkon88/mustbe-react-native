import AsyncStorage from '@react-native-community/async-storage';

const KEYS = {
    TOKEN: 'token'
}

const Storage = {}

Storage.save = async (value) => {
    try {
        await AsyncStorage.setItem(KEYS.TOKEN, value)
    }
    catch(err) {
        console.log(err)
    }
}

export default Storage