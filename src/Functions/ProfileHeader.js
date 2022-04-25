import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.profileView}>
                <Text style={styles.profileText}>Profile</Text>
                <Icon name="notifications" size={25} color={"#00C458"} style={{ marginRight: 20 }} />
                <Icon name="view-list" size={25} color={'#00C458'} style={{ marginRight: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: "#002333"
    },
    profileView: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    profileText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Gilroy ☞',
        paddingRight: 90,
        fontWeight: 'bold'
    },
})