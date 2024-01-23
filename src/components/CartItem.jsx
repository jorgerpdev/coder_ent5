import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Card from '../components/Card'
import { colors } from '../global/colors';
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { removeItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';


const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const onRemoveFromCart = () =>{
        dispatch(removeItem({...item}))
    }

    return (
        <Card style={styles.cartItemContainer}>
            <Image
                style={styles.imageCartItem}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
            <View>
                <Text style={styles.cartTitle}>{item.title}</Text>
                <Text style={styles.cartLightText}>{item.car_make}</Text>
                <Text style={styles.cartLightText}>${item.price}</Text>
                <Text style={styles.cartTotalPrice}>
                    Cantidad: {item.quantity}, Total: ${item.price*item.quantity}
                </Text>
            </View>
            <TouchableOpacity style={styles.trashCart} onPress={onRemoveFromCart}>
                <FontAwesome name="trash" size={24} color="black" />
            </TouchableOpacity>
        </Card>
    )
}

export default CartItem

const styles = StyleSheet.create({
    cartItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding:20,
    },
    cartContentContainer:{
        flexDirection: 'row'
    },
    imageCartItem:{
        height: 50,
        width: 50,
        marginRight: 10,
    },
    trashCart:{
        marginLeft: 'auto'
    },
    cartTitle:{
        fontFamily: 'FiraCode-Bold',
        textTransform: 'capitalize',
        fontSize: 20
    },
    cartLightText:{
        fontFamily: 'FiraCode-Regular',
        textTransform: 'capitalize',
        fontSize: 15
    },
    cartTotalPrice:{
        fontFamily:'FiraCode-Bold',
        textTransform: 'capitalize',
        fontSize:16,
        color:colors.primary
    }
})