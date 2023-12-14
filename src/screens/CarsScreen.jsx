import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import AutosDisp from '../data/AutosDisp.json'
import CarItem from '../components/CarItem.jsx'

const CarsScreen = ({onSelectCarEvent, setCarSelectedTo0}) => {
    const renderCarCard  = ({item}) => (
        <CarItem carObj={item} onSelectCarEvent={onSelectCarEvent}/>
    )


    return (
        <>
        <Header title='Autos Disponibles' homeButt={false} setCarSelectedTo0={setCarSelectedTo0}/>
        <FlatList
            data={AutosDisp}
            renderItem={renderCarCard}
            keyExtractor={item=>item.id}
        />
        </>
        
    )
}

export default CarsScreen

const styles = StyleSheet.create({})