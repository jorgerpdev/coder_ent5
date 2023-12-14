import { StyleSheet, Text, View, Button } from 'react-native'
import {colors} from '../global/colors.js'

const Header = ({title, homeButt, setCarSelectedTo0}) => {

  return (
    <View style={styles.headerContainer}>
        {homeButt ? <Button title='x' onPress={setCarSelectedTo0}/> : ''}
        
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    headerTitle: {
        color: '#FFF',
        fontFamily: 'FiraCode-Bold'
    }
})