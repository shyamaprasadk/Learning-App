import React, {Component} from "react";
import {View, StyleSheet, Text, Image, ImageBackground, TouchableHighlight} from "react-native";
import { ScrollView} from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from "../Functions/Header";


export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.textView}>
                    <Text style={styles.gdmngText}>Goodmorning</Text>
                    <Text style={styles.titleText}>Aaron Taylor</Text>
                </View>
                <View style={styles.bgimgView}>
                    <ImageBackground source={require('../../asset/bgimg.png')}
                      style={styles.bgimg}
                      imageStyle={{borderRadius:10}}>
                          <Text style={styles.textClass}>Class</Text>
                          <Text style={styles.textBgimg}>Plus two science</Text>
                    </ImageBackground>
                </View>    
                    <View style={styles.subjectView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.sub}>
                            <Icon name="circle" size={23} color={'#00C458'} onPress={()=> this.props.navigation.navigate('Biology')} />
                            <Text style={styles.subText} onPress={()=> this.props.navigation.navigate('Biology')}>Biology</Text>
                        </View>
                        <View style={styles.sub}>
                            <Icon name="circle" size={23} color={'#00C458'} />
                            <Text style={styles.subText}>Physics</Text>
                        </View>
                        <View style={styles.sub}>
                            <Icon name="circle" size={23} color={'#00C458'} />
                            <Text style={styles.subText}>Chemistry</Text>
                        </View>
                        <View style={styles.sub}>
                            <Icon name="circle" size={23} color={'#00C458'} />
                            <Text style={styles.subText}>Maths</Text>
                        </View>
                        <View style={styles.sub}>
                            <Icon name="circle" size={23} color={'#00C458'} />
                            <Text style={styles.subText}>English</Text>
                        </View>
                        </ScrollView>
                    </View>

                    <View style={styles.recentCourseView}>
                        <Text style={styles.recentText}>Recent courses</Text>
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        
                            <View style={styles.courseImageView}>
                                <ImageBackground source={require('../../asset/Biology.jpg')}
                                    style={styles.courseImg} imageStyle={{borderRadius:10}}>
                                        <View style={styles.playButtonView}>
                                            <Icon name="play-circle-outline" size={35} color={'#fff'}/>
                                            <Text style={styles.playText}>Biology</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.courseImageView}>
                                <ImageBackground source={require('../../asset/Physics.jpg')}
                                    style={styles.courseImg} imageStyle={{borderRadius:10}}>
                                        <View style={styles.playButtonView}>
                                            <Icon name="play-circle-outline" size={35} color={'#fff'}/>
                                            <Text style={styles.playText}>Physics</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.courseImageView}>
                                <ImageBackground source={require('../../asset/Chemistry.jpg')}
                                    style={styles.courseImg} imageStyle={{borderRadius:10}}>
                                        <View style={styles.playButtonView}>
                                            <Icon name="play-circle-outline" size={35} color={'#fff'}/>
                                            <Text style={styles.playText}>Chemistry</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.courseImageView}>
                                <ImageBackground source={require('../../asset/Maths.jpg')}
                                    style={styles.courseImg} imageStyle={{borderRadius:10}}>
                                        <View style={styles.playButtonView}>
                                            <Icon name="play-circle-outline" size={35} color={'#fff'}/>
                                            <Text style={styles.playText}>Maths</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                            <View style={styles.courseImageView}>
                                <ImageBackground source={require('../../asset/English.jpg')}
                                    style={styles.courseImg} imageStyle={{borderRadius:10}}>
                                        <View style={styles.playButtonView}>
                                            <Icon name="play-circle-outline" size={35} color={'#fff'}/>
                                            <Text style={styles.playText}>English</Text>
                                        </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                <View style={{flexDirection:'row', marginStart:10, marginEnd:10, height:455}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={styles.bookingView}>
                        <View style={styles.photoHolder}></View>
                        <Text style={styles.titleBookingView}>Target live classes</Text>
                        <Text style={styles.bodyBookingView}>Live classes by best teachers 
                            from LearningHub to clear your doubts and to provide individual attention</Text>
                            <View style={styles.buttonView}>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                    </View>
                    <View style={styles.bookingView}>
                        <View style={styles.photoHolder}></View>
                        <Text style={styles.titleBookingView}>Target live classes</Text>
                        <Text style={styles.bodyBookingView}>By LearningHub's career experts</Text>
                            <View style={styles.buttonView2nd}>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Schedule a call</Text>
                                </TouchableHighlight>
                            </View>
                    </View>
                    <View style={styles.bookingView}>
                        <View style={styles.photoHolder}></View>
                        <Text style={styles.titleBookingView}>Target live classes</Text>
                        <Text style={styles.bodyBookingView}>Live classes by best teachers 
                            from LearningHub to clear your doubts and to provide individual attention</Text>
                            <View style={styles.buttonView3rd}>
                                <TouchableHighlight style={styles.button}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                    </View>
                    </ScrollView>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    textView:{
        width:'100%',
        height:100,
        paddingTop:10,
        paddingLeft:10
    },
    titleText:{
        color:'#002333',
        fontFamily:'Gilroy ☞',
        fontWeight:'bold',
        fontSize:24
    },
    gdmngText:{
        fontFamily:'Gilroy ☞',
        color:'#002333',
        fontSize:12
    },
    bgimgView:{
        height:68,
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    bgimg:{
        height:85,
        width:395,
        marginRight:5,
        paddingLeft:20,
        justifyContent:'center'
    },
    textClass:{
        color:'#BAC3C7',
        fontSize:12,
        fontFamily:'Gilroy-Regular ☞'
    },
    textBgimg:{
        fontSize:14,
        fontFamily:'Gilroy ☞',
        color:'#FFFFFF',
    },
    subjectView:{
        height:39,
        marginTop:20,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10
    },
    sub:{
        borderWidth:1,
        height:39,
        width:92,
        borderRadius:10,
        marginRight:10,
        alignItems:'center',
        paddingLeft:3,
        flexDirection:'row'
    },
    subText:{
        fontFamily:'Gilroy ☞',
        color:'#002333',
        fontSize:13
    },
    recentCourseView:{
        height:200,
        marginRight:10,
        marginLeft:10
    },
    recentText:{
        color:'#002333',
        fontFamily:'Gilroy ☞',
        fontSize:15,
        marginBottom:15,
        marginTop:10
    },
    courseImageView:{
        width: 213,
        height: 121,
        marginStart:2,
        marginEnd:6
    },
    courseImg:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    playButtonView:{
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 15,
        alignItems:'center'
    },
    playText:{
        color:'#FFFFFF',
        fontFamily:'Gilroy ☞',
        fontSize:14,
        marginLeft:5
    },
    bookingView:{
        height:370,
        width:240,
        backgroundColor:'#002333',
        marginEnd:6,
        paddingLeft:25,
        paddingTop:50,
        borderRadius:10,
    },
    photoHolder:{
        backgroundColor:'#002E43',
        width:79,
        height:79,
        borderRadius:50
    },
    titleBookingView:{
        fontFamily:'Gilroy ☞',
        fontSize:18,
        fontWeight:'bold',
        color:'#FFFFFF',
        marginTop:10,
    },
    bodyBookingView:{
        fontFamily:'Gilroy-Regular ☞',
        fontSize:14,
        color:'#446270',
        marginTop:10
    },
    button:{
        width:145,
        height:47,
        backgroundColor:'#00C458',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:25
    },
    buttonText:{
        color:'#FFFFFF',
        fontFamily:'Gilroy ☞',
        fontSize:12
    },
    buttonView:{
        height:100,
        width:'100%',
        justifyContent:'center',
        marginTop:20,
        paddingLeft:10
    },
    buttonView2nd:{
        height:180,
        justifyContent:'center',
        paddingTop:25,
        paddingLeft:10
    },
    buttonView3rd:{
        height:180,
        justifyContent:'center',
        paddingBottom:34,
        paddingLeft:10
    }
})