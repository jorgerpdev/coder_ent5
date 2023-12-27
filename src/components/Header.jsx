import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native'
import {colors} from '../global/colors.js'

import { AntDesign } from '@expo/vector-icons'; 

const Header = ({title, navigation}) => {

  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="caretleft" size={24} color="white" />
        </TouchableOpacity>
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