import React,{Component} from "react";
import {View, ImageBackground, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.bgimgView}
                    activeOpacity={1}
                    onPress={()=> this.props.navigation.navigate('Video')}>
                        <ImageBackground source={require('../../../asset/Teaching.jpg')}
                            style={styles.bgImg}
                            imageStyle={{borderTopLeftRadius:8, borderTopRightRadius:5}}>
                                <TouchableOpacity style={styles.button}
                                    activeOpacity={1}>
                                    <Text style={styles.bgimgText}>Biology</Text>
                                </TouchableOpacity>
                        </ImageBackground>
                        <View style={styles.chapterList} >
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
                    </TouchableOpacity>
                    <View style={styles.bgimgView}>
                        <ImageBackground source={require('../../../asset/Teaching.jpg')}
                            style={styles.bgImg2}
                            imageStyle={{borderTopLeftRadius:8, borderTopRightRadius:5}}>
                                <TouchableOpacity style={styles.button2}
                                    activeOpacity={1}>
                                    <Text style={styles.bgimgText}>Biology</Text>
                                </TouchableOpacity>
                        </ImageBackground>
                        <View style={styles.chapterList} >
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

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9',
    },
    bgImg:{
        height:200,
        width:350,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius: 40,

    },
    bgimgView:{
        height:355,
        width:'100%',
        paddingTop:25,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    bgimgText:{
        color:'#FFFFFF',
        fontFamily:'Gilroy ☞',
        fontSize:12,
        fontWeight:'600',
    },
    button:{
        backgroundColor:'#00C458',
        width:55,
        height:25,
        marginEnd:22,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    chapterList:{
        width:350,
        height:125,
        marginTop:0,
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        elevation:1,
        backgroundColor:'#FFFFFF',
        paddingLeft:25,
        justifyContent:'center'
    },
    chapterListText:{
        color:'#002333',
        fontSize:20,
        fontWeight:'bold'
    },
    chapterIndicatorView:{
        flexDirection:'row'
    },
    chapterIndicator:{
        flexDirection:'row',
        paddingTop:15,
        width:'50%',
        height:45,
        alignItems:'center'
    },
    chapterIndicatorListText:{
        fontFamily:'Gilroy ☞',
        fontSize:14,
        fontWeight:'600',
        color:'#9F9F9F',
        marginLeft:5,
    },
    bgImg2:{
        height:200,
        width:351,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        borderRadius: 40,
        transform:[{rotateY:'180deg'}]
    },
    button2:{
        backgroundColor:'#00C458',
        width:55,
        height:25,
        marginStart:22,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        transform:[{rotateY:'180deg'}]
    }
})