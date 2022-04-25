import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"

export default class AppTour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require('../asset/AppTour.jpg')}>
                    </Image>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.titleText}>App tour title</Text>
                    <Text style={styles.descriptionText}>The app tour description goes here.</Text>
                </View>
                <View style={styles.lowerView}>
                    <View style={styles.buttonBorder}>
                        <TouchableHighlight style={styles.button}
                            underlayColor={'#00C458'}
                            onPress={() => this.props.navigation.navigate('Drawer')}>
                            <Icon name='arrow-forward' size={30} color='#fff' />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    imageView: {
        width: '100%',
        height: '65%',
        alignItems:'center'
    },
    image: {
        height: '100%',
        width: '95%'
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Gilroy ☞',
        color: '#002333'
    },
    descriptionText: {
        fontFamily: 'Gilroy-Regular ☞',
        fontSize: 14,
        color: '#9F9F9F'
    },
    lowerView: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#00C458',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonBorder: {
        borderRadius: 6,
        // backgroundColor:'transparent',
        borderColor: '#00C458',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 66,
        width: 66
    }
})