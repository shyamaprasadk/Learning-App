import React,{Component} from "react";
import { View,StyleSheet, Image, Text, TextInput, TouchableHighlight, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class OTP extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('../asset/logo.png')}></Image>
                </View>
                <View style={styles.iconView}>
                    <View style={styles.iconHolder}>
                        <Image style={styles.iconImg}
                        source={require('../asset/icon.png')}></Image>
                        <View style={{position:'absolute', justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.iconText}>ICON</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Verification code</Text>
                    <Text style={styles.otpText}>Please type the verification code sent to</Text>
                </View>
                <View style={styles.phoneNumView}>
                    
                    <Text style={styles.phoneNumText}>+91 9876543210</Text>
                </View>
                <View style={styles.lowerView}>
                    <View style={styles.otpView}>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                        <TextInput style={styles.otpBox} maxLength={1} keyboardType="numeric"/>
                    </View>
                    <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button}
                    onPress={()=> this.props.navigation.navigate('StudentDetails')}
                    onPressOut={()=> ToastAndroid.show('Login Successful',ToastAndroid.SHORT)}
                    underlayColor={'#00C458'}>
                        <Text style={styles.buttonText}>Resend OTP</Text>
                    </TouchableHighlight>
                    </View>
                    <Text style={styles.resendText}>Resend after 28s</Text>
                    <View style={styles.contactView}>
                        <Icon name="phone" size={19} color={'#00C458'}></Icon>
                        <Text style={styles.contactText}>Contact Us</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    imageView:{
        height:'14%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    iconView:{
        width:'100%',
        height:'34%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    textView:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    otpView:{
        flexDirection:'row'
    },
    buttonView:{
        marginTop:10
    },
    lowerView:{
        width:'100%',
        height:'35%',
        backgroundColor:'#002333',
        borderTopStartRadius:15,
        borderTopEndRadius:15,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height:45,
        width:180
    },
    text:{
        fontFamily:"Gilroy ☞",
        fontSize:20,
        marginTop:10,
        color:'#002333'
    },
    otpText:{
        fontFamily:'Gilroy-Regular ☞',
        fontSize:14,
        marginTop:4,
        color:'#9F9F9F'
    },
    otpBox:{
        borderWidth:1,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        width:45,
        height:45,
        marginLeft:8,
        borderRadius:5,
        paddingLeft:20,
        color:'#fff'
    },
    otp:{
        fontSize:14,
        fontFamily:'Gilroy-Regular ☞',
        color:'#fff'
    },
    button:{
        width:311,
        height:56,
        backgroundColor:'#00C458',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontFamily:'Gilroy ☞',
        fontWeight:'700',
        fontSize:17
    },
    phoneNumView:{
        height:'7%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    phoneNumText:{
        fontFamily:'Gilroy ☞',
        fontSize:16,
        color:'#002333',
    },
    iconHolder:{
        height:126,
        width:126,
        backgroundColor:'#F9F9F9',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconImg:{
        height:127,
        width:141,
    },
    iconText:{
        fontFamily:'Gilroy ☞',
        fontSize:15,
        fontWeight:'bold',
        color:'#000',
        width:40,
        height:20,
    },
    resendText:{
        color:'#446270',
        fontSize:13,
        fontFamily:'Gilroy-Regular ☞',
        marginTop:12
    },
    contactView:{
        height:30,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:13,
        flexDirection:'row',
    },
    contactText:{
        color:'#00C458',
        fontFamily:'Gilroy ☞',
        fontSize:14,
        fontWeight:'700',
        marginLeft:5
    }
})