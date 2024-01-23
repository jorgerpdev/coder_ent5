import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import React from 'react'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
//import cart_data from "../data/data_cart.json"

const CartScreen = () => {
    const cartItems = useSelector(state => state.cartReducer.items)
    const total = useSelector(state=>state.cartReducer.total)

    const renderCartItem = ({item}) => (
        <CartItem item={item} />
    )

    

    return (
        <View style={styles.cartContainer}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm}>
                    <Text style={styles.totalPrice}>Total: {total}</Text>
                    <TouchableOpacity style={styles.confirmButton} onPress={null}>
                        <Text style={styles.textConfirm}>Confirmar</Text>
                    </TouchableOpacity>
            </View>
        </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer:{
        flex:1,
    },
    cartConfirm:{
        marginBottom: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    totalPrice:{
        fontSize: 16,
        fontFamily: 'FiraCode-Bold',
    },
    confirmButton:{
        backgroundColor: colors.secondary,
        padding:10,
        borderRadius:10,
    },
    textConfirm:{
        fontFamily: 'FiraCode-Bold',
        fontSize: 16,
        color: '#fff'
    }
})