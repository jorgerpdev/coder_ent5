import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Header from '../components/Header'
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return (
          <Stack.Navigator
              screenOptions={
                  ({navigation, route}) => ({
                      header: () => <Header title={route.name} navigation={navigation}/>
                  })
              }
          >
              <Stack.Screen
                  name="Carrito"
                  component={CartScreen}
              />
          </Stack.Navigator>
    )
  }

  export default CartNavigator