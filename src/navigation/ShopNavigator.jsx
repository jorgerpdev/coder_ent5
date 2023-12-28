import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Header from '../components/Header'

import CarDetailScreen from '../screens/CarDetailScreen'
import CarsScreen from '../screens/CarsScreen'

const Stack = createNativeStackNavigator()


const ShopNavigator = () => {
  return (
        <Stack.Navigator
            screenOptions={
                ({navigation, route}) => ({
                    header: () => <Header title={route.name} navigation={navigation}/>
                })
            }
        >
            <Stack.Screen
                name="Moviles_Lista"
                component={CarsScreen}
                options={{title:"Moviles"}}
            />
            <Stack.Screen
                name="Movil_Detalle"
                component={CarDetailScreen}
            />
        </Stack.Navigator>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})