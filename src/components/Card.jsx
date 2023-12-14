import { StyleSheet, Text, View } from 'react-native'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ECECEC',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 5
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1
    }
})