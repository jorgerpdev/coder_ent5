import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../global/colors'

import ShopNavigator from './ShopNavigator'
import CartNavigator from './CartNavigator'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen 
                name="ShopStack" 
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name="shop" size={24} color={focused?"#fff":"#ccc"} />
                    )
                }}
                />
                <Tab.Screen 
                name="CartStack" 
                component={CartNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome5 name="shopping-cart" size={24} color={focused?"#fff":"#ccc"}  />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.info, 
        shadowColor: '#ccc',
        elevation: 1,
        position: 'absolute',
        left: 25,
        right: 25,
        bottom: 25,
        borderRadius: 80
    }
})