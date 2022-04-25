import React,{Component} from "react";
import { View,StyleSheet, Image, Text, TextInput, TouchableHighlight, ToastAndroid } from "react-native";


export default class Register extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('../asset/logo.png')}></Image>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Enter your mobile number</Text>
                    <Text style={styles.otpText}>We will send you an OTP to verify.</Text>
                </View>
                <View style={styles.lowerView}>
                    <View style={styles.mobNumView}>
                    <TextInput style={styles.countryCode}
                    keyboardType="numeric"
                    maxLength={3}>
                        <Text style={styles.code}>+91</Text>
                    </TextInput>
                    <TextInput style={styles.mobNum}
                    placeholder="Mobile Number"
                    placeholderTextColor={"#446270"}
                    fontFamily={'Gilroy-Regular ☞'}
                    keyboardType="numeric"
                    maxLength={10}
                    color='#fff'>
                    </TextInput>
                    </View>
                    <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button}
                        underlayColor={'#00C458'}
                        onPress={()=> this.props.navigation.navigate('OTP')}
                        onPressOut={()=> ToastAndroid.show('OTP SENT',ToastAndroid.SHORT)}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableHighlight>
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
        height:'60%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    textView:{
        width:'100%',
        height:'15%',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    mobNumView:{  
        flexDirection:'row'
    },
    buttonView:{
        marginTop:10
    },
    lowerView:{
        width:'100%',
        height:'25%',
        backgroundColor:'#002333',
        borderTopStartRadius:15,
        borderTopEndRadius:15,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height:60,
        width:250
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
    countryCode:{
        borderWidth:1,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        width:59,
        height:51,
        marginRight:4,
        borderRadius:5,
        paddingLeft:18
    },
    mobNum:{
        borderWidth:1,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        width:244,
        height:51,
        marginLeft:4,
        borderRadius:5,
        paddingLeft:15
    },
    code:{
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
        borderRadius:5
    },
    buttonText:{
        color:'#fff',
        fontFamily:'Gilroy ☞',
        fontWeight:'700',
        fontSize:17
    }
})