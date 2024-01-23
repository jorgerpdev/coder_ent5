import { StyleSheet, Text, View, Image, ActivityIndicator,TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import {colors} from '../global/colors.js'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMovilesByIdQuery } from '../services/shopService.js'
import { addItem, removeItem } from '../features/cartSlice.js'

const CarDetailScreen = ({}) => { //carId
    const [carDetail, setCarDetail] = useState({})

    //var carId = route.params;
    var carId = useSelector(state => state.shopReducer.idMovilSelected)
    //const Moviles = useSelector(state => state.shopReducer.Moviles_data)
    
    const {data: MovilSelected, isLoading, error} = useGetMovilesByIdQuery(carId);

    
    useEffect(() =>{
        //const carItem = Moviles.find((car) => car.id === carId)
        if(!isLoading){
            const carItem = Object.values(MovilSelected)[0]
            setCarDetail(carItem)
        }
    },[carId])

    const dispatch = useDispatch()
    const onAddToCart = () =>{
        dispatch(addItem({...Object.values(MovilSelected)[0], quantity: 1}))
    }

    return (
        <>
            {
                isLoading ?
                <ActivityIndicator />
                :
                <>
                <Card style={styles.cardContainer}>
                <Text style={styles.text}>{carDetail.car_make} - {carDetail.car_model}, año: {carDetail.car_year}</Text>
                        <Image 
                            style={styles.carImage}
                            resizeMode='cover'
                            source={{uri: carDetail.thumbnail}}
                        />
                        <Text style={carDetail.estado ? styles.imgTextDisp: styles.imgTextDispN}>{carDetail.estado ? 'Disponible' : 'Sin stock'}</Text>
                        <TouchableOpacity
                        onPress={onAddToCart}>
                            <Text>Agregar al carrito</Text>
                        </TouchableOpacity>
                </Card>
                </>
            }
        </>
    )
}

export default CarDetailScreen

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        margin: 10,
    },
    text:{ 
        fontFamily: 'FiraCode-Regular'
    },
    carImage:{
        width: 200,
        height:100
    },
    imgTextDisp: {
        color: colors.success
    },
    imgTextDispN:{
        color: colors.danger
    }
})