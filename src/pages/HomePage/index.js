import React from 'react'
import {
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsList from '../../components/events/list'
import InscriptionsList from '../../components/inscriptions/list'

const Tab = createBottomTabNavigator();

export default function HomePage({navigation}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inscriptions" component={InscriptionsList} />
            <Tab.Screen name="Events" component={EventsList} />
        </Tab.Navigator>
    )
}