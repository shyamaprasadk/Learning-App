import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BiologyHeader from "./Functions/BiologyHeader";


export default class Biology extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.chapterList}
                            onPress={() => this.props.navigation.navigate('NewTopTab')}
                            activeOpacity={1} >
                            <Text style={styles.chapterListText}>
                                Long chapter name can be shown here.</Text>
                            <View style={styles.chapterIndicatorView}>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                                </View>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.chapterList}>
                            <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                            <View style={styles.chapterIndicatorView}>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                                </View>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chapterList}>
                            <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                            <View style={styles.chapterIndicatorView}>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                                </View>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chapterList}>
                            <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                            <View style={styles.chapterIndicatorView}>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                                </View>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chapterList}>
                            <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                            <View style={styles.chapterIndicatorView}>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                                </View>
                                <View style={styles.chapterIndicator}>
                                    <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                    <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    topView: {
        width: '100%',
        height: '25%',
        backgroundColor: '#00202F',
        paddingLeft: 20,
        paddingTop: 30
    },
    bottomView: {
        width: '100%',
        height: '75%',
        alignItems: 'center'
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
        paddingTop: 30
    },
    chapterIndicator: {
        flexDirection: 'row',
        paddingTop: 15,
        width: '50%',
        height: 45,
        alignItems: 'center'
    },
    chapterIndicatorText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        fontWeight: '700',
        color: '#00C458',
        marginLeft: 5,
    },
    chapterIndicatorView: {
        flexDirection: 'row'
    },
    chapterList: {
        width: '95%',
        height: 125,
        marginTop: 20,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        paddingLeft: 25,
        justifyContent: 'center',
    },
    chapterListText: {
        color: '#002333',
        fontSize: 20,
        fontWeight: 'bold'
    },
    chapterIndicatorListText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        fontWeight: '600',
        color: '#9F9F9F',
        marginLeft: 5,
    }
})