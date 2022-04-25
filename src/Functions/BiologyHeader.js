import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BiologyHeader() {
    return (
            <View style={styles.topView}>
                <View style={styles.iconBorder}>
                    <Icon name="arrow-back-ios" size={20} color={'#00C458'}
                        onPress={() => this.props.navigation.navigate('Home')} />
                </View>
                <Text style={styles.pageTitle}>Biology</Text>
                <View style={styles.chapterIndicatorView}>
                    <View style={styles.chapterIndicator}>
                        <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                        <Text style={styles.chapterIndicatorText}>12 Chapters</Text>
                    </View>
                    <View style={styles.chapterIndicator}>
                        <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                        <Text style={styles.chapterIndicatorText}>124 hours</Text>
                    </View>
                </View>

            </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        width: '100%',
        height: 200,
        backgroundColor: '#00202F',
        paddingLeft: 20,
        paddingTop: 30
    },
    iconBorder: {
        width: 32,
        height: 32,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 7,
        paddingLeft: 8,
        justifyContent: 'center',
    },
    pageTitle: {
        fontFamily: 'Gilroy ☞',
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 24,
        paddingTop: 20
    },
    chapterIndicatorView: {
        flexDirection: 'row'
    },
    chapterIndicatorListText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        fontWeight: '600',
        color: '#9F9F9F',
        marginLeft: 5,
    },
    chapterIndicatorText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        fontWeight: '700',
        color: '#00C458',
        marginLeft: 5,
    },
    chapterIndicator: {
        flexDirection: 'row',
        paddingTop: 15,
        width: '50%',
        height: 45,
        alignItems: 'center'
    },
})