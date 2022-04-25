import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions } from "@react-navigation/native";


// const navigation = navigation;
export default function Header() {
    return (
       
        <View style={styles.container}>
            <View style={styles.iconView}>
                <Icon name="view-list" size={26} color={'#00C458'}
                // onPress={() => this.props.navigation.navigate()}
                />
                
            </View>
            <View style={styles.logoView}>
                <Image source={require('../../asset/logo.png')}
                    style={styles.logo} />
            </View>
            <View style={styles.classView}>
                <View style={styles.classBorder}>
                    <Icon name="circle" size={23} color={'#007345'} />
                    <Text style={styles.text}>Classes</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        height: '65%',
        width: '92%'
    },
    iconView: {
        height: '100%',
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoView: {
        height: '100%',
        width: '55%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    classView: {
        height: '100%',
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    classBorder: {
        height: '55%',
        width: '85%',
        borderColor: '#00C458',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#00C458',
        fontFamily: 'Gilroy ☞',
        fontWeight: '600',
        fontSize: 13,
        marginLeft: 8
    }
})