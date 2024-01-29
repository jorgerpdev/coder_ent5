import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import user_data from '../data/user_data.json'
import { useState } from 'react'
import { colors } from '../global/colors'

const ProfileScreen = ({navigation}) => {
    const [image, setImage] = useState(null)

    console.log(user_data.profile_picture)

    return (
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.navigate("Seleccionar Imagen")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8'
                        },
                        styles.imageContainer,
                    ]}>
                    {
                        image
                            ?
                            null :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                    }
                </Pressable>
            </View>
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: 'FiraCode-Bold',
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'FiraCode-Regular',
        fontSize: 12
    },
    addressContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    addressTitle: {
        fontFamily: 'FiraCode-Bold',
        fontSize: 14,
        color:"#fff"
    },
    addressDescription: {
        fontFamily: 'FiraCode-Regular',
        color:"#fff"
    }
})