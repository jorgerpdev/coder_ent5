import { StyleSheet, Text, View, Image } from 'react-native'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import {colors} from '../global/colors.js'
import { useSelector } from 'react-redux'

const CarDetailScreen = ({}) => { //carId
    const [carDetail, setCarDetail] = useState({})

    //var carId = route.params;
    var carId = useSelector(state => state.shopReducer.idMovilSelected)
    const Moviles = useSelector(state => state.shopReducer.Moviles_data)

    useEffect(() =>{
        const carItem = Moviles.find((car) => car.id === carId)
        setCarDetail(carItem)
    },[carId])    

    return (
        <>
            {/* <Header title={carDetail.car_model} homeButt={true} setCarSelectedTo0={setCarSelectedTo0}/> */}
            <Card style={styles.cardContainer}>
            <Text style={styles.text}>{carDetail.car_make} - {carDetail.car_model}, año: {carDetail.car_year}</Text>
                    <Image 
                        style={styles.carImage}
                        resizeMode='cover'
                        source={{uri: carDetail.thumbnail}}
                    />
                    <Text style={carDetail.estado ? styles.imgTextDisp: styles.imgTextDispN}>{carDetail.estado ? 'Disponible' : 'Sin stock'}</Text>
            </Card>
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