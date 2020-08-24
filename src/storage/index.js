import AsyncStorage from '@react-native-community/async-storage';

export const KEYS = {
    TOKEN: 'token',
    USER: 'user'
}

const Storage = {}

Storage.save = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    }
    catch(err) {
        console.log(err)
    }
}

Storage.saveObject  = async (key, value) => {
    let data = JSON.stringify(value)
    await AsyncStorage.setItem(key, data)
}

Storage.remove = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    }
    catch(err) {
        console.log(err)
    }
}

Storage.get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value != null ? value : null;
    }
    catch(err) {
        console.log(err)
    }
}

Storage.getObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }
    catch(err) {
        console.log(err)
    }
}

export default Storage