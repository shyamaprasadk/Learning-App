import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-paper";
import ProfileHeader from "../Functions/ProfileHeader";


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.topView}>
                        <View style={styles.profileContent}>
                            <View style={styles.profileDetailView}>
                                <View style={styles.profilePicHolder}>
                                    <Image source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
                                        style={styles.profilePic}></Image>
                                </View>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={styles.name}>Jane Doe</Text>
                                    <Text style={styles.ID}>ID: 12345678</Text>
                                </View>
                            </View>
                            <View style={styles.titleView}>
                                <Text style={styles.detailsTitle}>Personal Info</Text>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Account Settings</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>Aaron Taylor</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Email</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>emaidid123@server.com</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Number</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>+91 9876543210</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={styles.titleView}>
                                <Text style={styles.detailsTitle}>Course Info</Text>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Center</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>Inmakes edu</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Course</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>Plus Two Science</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Payment Status</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>Free</Text>
                                </View>
                            </View>
                            <Divider style={styles.divider} />
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.questionView}>
                                    <Text style={styles.question}>Expiry Date</Text>
                                </View>
                                <View style={styles.answerView}>
                                    <Text style={styles.answer}>Not Applicable</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button}
                                activeOpacity={.8} >
                                <View style={styles.paymentIcon}>
                                    <Icon name="payment" size={30} color={'#FFFFFF'} />
                                </View>
                                <View style={styles.buttonTextView}>
                                    <Text style={styles.buttonText}>Custom Payment</Text>
                                </View>
                                <View style={styles.buttonNextIcon}>
                                    <Icon name="arrow-forward-ios" size={18} color={'#FFFFFF'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.button}
                                activeOpacity={.8} >
                                <View style={styles.referralIcon}>
                                    <Icon name="reply" size={30} color={'#FFFFFF'} />
                                </View>
                                <View style={styles.buttonTextView}>
                                    <Text style={styles.buttonText}>Referrals</Text>
                                </View>
                                <View style={styles.buttonNextIcon}>
                                    <Icon name="arrow-forward-ios" size={18} color={'#FFFFFF'} />

                                </View>
                            </TouchableOpacity>
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
        backgroundColor: "#F9F8F8",
    },
    profileText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Gilroy ☞',
        paddingRight: 90,
        fontWeight: 'bold'
    },
    topView: {
        width: '100%',
        height: 325,
        backgroundColor: '#00202F',
        alignItems: 'center',
        paddingTop: 15
    },
    bottomView: {
        width: '100%',
        height: 555,
        paddingTop: 251,
        justifyContent: 'center',
    },
    profileView: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    profileContent: {
        height: 575,
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginTop: 15,
        elevation: 8
    },
    profileDetailView: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    profilePicHolder: {
        height: 80,
        width: 80,
        backgroundColor: '#eee',
        borderRadius: 40,
        borderWidth: 4,
        borderColor: '#19BD9B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePic: {
        height: 75,
        width: 75,
        borderRadius: 50
    },
    name: {
        color: '#4D4D4D',
        fontFamily: 'Gilroy ☞',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 2
    },
    ID: {
        fontFamily: 'Gilroy-Regular ☞',
        color: '#4D4D4D',
        fontSize: 12,

    },
    detailsTitle: {
        color: '#4D4D4D',
        fontFamily: 'Gilroy ☞',
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 20,
    },
    questionView: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
    },
    question: {
        color: '#4D4D4D',
        fontFamily: 'Gilroy-Regular ☞',
        fontSize: 15,
        paddingLeft: 20
    },
    answerView: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
    },
    answer: {
        color: '#4D4D4D',
        fontFamily: 'Gilroy ☞',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    divider: {
        borderColor: '#EEEEEE',
        borderWidth: .5
    },
    titleView: {
        height: 52,
        justifyContent: 'center',
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    button: {
        width: 327,
        height: 68,
        backgroundColor: '#00C458',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: "700"
    },
    paymentIcon: {
        paddingLeft: 10,
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    referralIcon: {
        paddingLeft: 10,
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotateY: '180deg' }],
        paddingRight: 20
    },
    buttonTextView: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonNextIcon: {
        width: '25%',
        alignItems: 'flex-end',
        paddingRight: 10,
        justifyContent: 'center'
    }
})