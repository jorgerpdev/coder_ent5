import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Card from './Card'
import {colors} from '../global/colors.js'
import React from 'react'

const CarItem = ({carObj, onSelectCarEvent}) => {

    return (
        <TouchableOpacity onPress={() => onSelectCarEvent(carObj.id)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{carObj.car_make} - {carObj.car_model}, año: {carObj.car_year}</Text>
                <View>
                    <Image 
                        style={styles.carImage}
                        resizeMode='cover'
                        source={{uri: carObj.thumbnail}}
                    />
                    <Text style={carObj.estado ? styles.imgTextDisp: styles.imgTextDispN}>{carObj.estado ? 'Disponible' : 'Sin stock'}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default CarItem

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        margin: 10,
    },
    carImage:{
        width: 60,
        height:60
    },
    imgTextDisp: {
        color: colors.success
    },
    imgTextDispN:{
        color: colors.danger
    }
})