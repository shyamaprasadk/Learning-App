import React, { Component } from "react";
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-paper";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'


export default class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '100%', height: '36%', backgroundColor: '#00202F' }}>
                    <ImageBackground source={require('../asset/Video-Img.jpg')}
                        style={styles.bgImg}>
                        <MaterialIcon name="play-circle-outline" size={55} color={'#fff'} />
                    </ImageBackground>
                </View>
                <View style={styles.flexDirectionView}>
                    <View style={styles.textView}>
                        <Text style={styles.videoTitle}>Long Chapter Name can be here shown here</Text>
                    </View>
                    <View style={styles.iconView}>
                        <MaterialIcon name="file-download" size={40} color={'#fff'} />
                        <Text style={styles.downloadText}>Download</Text>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.videoControlView}>
                    <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                        <View style={{ width: '34%', height: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                            <MaterialIcon name="arrow-back-ios" size={20} color={'#9F9F9F'} />
                            <Text style={styles.previousText}>Previous</Text>
                        </View>
                        <View style={{
                            width: '33.3%', height: '100%', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <MaterialIcon name="radio-button-checked" size={20} color={'#00C458'} />
                            <Text style={styles.partText}>Part 1</Text>
                        </View>
                        <View style={{
                            width: '33.3%', height: '100%', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'flex-end', paddingRight: 8
                        }}>
                            <Text style={styles.nextText}>Next</Text>
                            <MaterialIcon name="arrow-forward-ios" size={18} color={'#FFFFFF'} />

                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View style={styles.bottomView}>
                    <View style={styles.sampleQuestionView}>
                        <Text style={styles.sampleQuestionText}>Your sample question can be shown here no matter how long</Text>
                        <View style={styles.profilePicHolder}>
                            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
                                style={styles.profilePic} />
                        </View>
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput placeholder="Ask a question?"
                            placeholderTextColor={'#446270'}
                            width={'75%'} />
                        <TouchableOpacity style={styles.Button}
                            activeOpacity={1}>
                            <Text style={styles.buttonText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.chatButton}
                        activeOpacity={1}>
                        <FontAwesomeIcon name='whatsapp' size={25} color={'#00C458'} />
                        <Text style={styles.chatText}>Chat with teacher</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00202F',
    },
    bgImg: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexDirectionView: {
        flexDirection: 'row',
        width: "100%",
        height: '10%',
        backgroundColor: '#00202F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    videoTitle: {
        fontFamily: 'Gilroy ☞',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
    iconView: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: .5,
        borderColor: '#eee'
    },
    textView: {
        width: '75%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    downloadText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 11,
        color: '#FFFFFF'
    },
    previousText: {
        color: '#9F9F9F',
        fontFamily: 'Gilroy ☞',
        fontSize: 15
    },
    videoControlView: {
        flexDirection: 'row',
        width: "100%",
        height: '9%',
        backgroundColor: '#00202F',
        alignItems: 'center',
        justifyContent: 'center',

    },
    nextText: {
        color: '#FFFFFF',
        fontFamily: 'Gilroy ☞',
        fontSize: 15
    },
    partText: {
        fontFamily: 'Gilroy ☞',
        color: '#00C458',
        fontSize: 15
    },
    sampleQuestionView: {
        width: '95%',
        backgroundColor: '#000',
        height: 70,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sampleQuestionText: {
        color: '#fff',
        fontFamily: 'Gilroy-Regular ☞',
        fontSize: 15,
        width: '76%'
    },
    profilePicHolder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textInputView: {
        backgroundColor: '#062E40',
        borderWidth: 1,
        borderColor: '#13394A',
        width: '95%',
        height: 70,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    Button: {
        backgroundColor: '#FFFFFF',
        width: 60,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    buttonText: {
        color: '#00202F',
        fontFamily: 'Gilroy ☞',
        fontSize: 13,
    },
    chatButton: {
        width: '95%',
        height: 70,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#00C458',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    chatText: {
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        color: '#00C458',
        marginLeft: 10
    },
    bottomView: {
        width: '100%',
        justifyContent: 'flex-end',
        height: '45%',
        paddingBottom: 20
    },
    divider: {
        borderWidth: .5,
        borderColor: '#fff',
        opacity: .3
    }

})