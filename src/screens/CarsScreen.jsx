import { FlatList, StyleSheet, Text, View } from 'react-native'
//import Header from '../components/Header'
//import AutosDisp from '../data/AutosDisp.json'
import CarItem from '../components/CarItem.jsx'
import { useSelector } from 'react-redux'
import { useGetMovilesQuery } from '../services/shopService.js'

const CarsScreen = ({navigation, setCarSelectedTo0}) => {

    //const Moviles = useSelector(state => state.shopReducer.Moviles_data)
    const {data, isLoading, error} = useGetMovilesQuery(); 

    const renderCarCard  = ({item}) => (
        <CarItem carObj={item} navigation={navigation}/>
    )


    return (
        <>
        {/* <Header title='Autos Disponibles' homeButt={false} setCarSelectedTo0={setCarSelectedTo0}/> */}
        <FlatList
            data={data}
            renderItem={renderCarCard}
            keyExtractor={item=>item.id}
        />
        </>
        
    )
}

export default CarsScreen

const styles = StyleSheet.create({})