import React,{Component} from "react";
import { View,StyleSheet, Image, Text, TextInput, TouchableHighlight, ToastAndroid} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SchoolBoard extends Component{
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
                    <Text style={styles.text}>Select your school board</Text>
                </View>
                <View style={styles.lowerView}>
                    <View style={styles.otpView}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput style={styles.inputBox} placeholder="Select board" placeholderTextColor={'#446270'} fontFamily={'Gilroy-Regular ☞'} fontSize={14}>
                        </TextInput>
                        {/* <Icon name='arrow-drop-down' size={20} color={'#fff'}/> */}
                        </View>
                        <View  style={{flexDirection:'row', alignItems:'center'}}>
                        <TextInput style={styles.inputBox} placeholder="Select class" placeholderTextColor={'#446270'} fontFamily={'Gilroy-Regular ☞'} fontSize={14}>
                        </TextInput>
                        {/* <Icon name='arrow-drop-down' size={20} color={'#fff'}/> */}
                        </View>
                    </View>
                   
                    <View style={styles.buttonView}>
                        <TouchableHighlight style={styles.button}
                            onPress={()=> this.props.navigation.navigate('AppTour')}
                            underlayColor={'#00C458'}>
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
    },
    imageView:{
        height:'19%',
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    iconView:{
        width:'100%',
        height:'36%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    textView:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    buttonView:{
        marginTop:15,
        paddingTop:8,
        backgroundColor:'#002333',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
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
        color:'#002333'
    },
    inputBox:{
        borderWidth:1,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        width:311,
        height:51,
        marginTop:10,
        borderRadius:8,
        paddingLeft:20,
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
    dropDown:{
        width:311,
        height:51,
        borderWidth:1,
        backgroundColor:'#369',
        color:'#fff',
        borderColor:'#red'
    }
})