import React,{Component} from "react";
import {View, Image, ImageBackground, Text, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.iconView}>
                    <View style={styles.iconBorder}>
                        <Icon name="clear" size={25} color={'#00C458'}/>
                    </View>
                </View>
                <View style={styles.profileView} >
                    <View style={styles.profilePicHolder}>
                        <Image source={{uri:'https://randomuser.me/api/portraits/men/9.jpg'}}
                            style={styles.profilePic} />
                    </View>
                    <View style={{marginLeft:10}} >
                        <Text style={styles.name}
                        onPress={()=> this.props.navigation.navigate('Profile')} >Aaron Taylor</Text>
                        <Text style={styles.ID} >ID: 1234</Text>
                    </View>
                    <Icon name="navigate-next" size={35} color={'#00C458'} style={{marginLeft:40}}
                    onPress={()=> this.props.navigation.navigate('Profile')}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Exam corner</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Subrscriptions</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Analytics</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Downloads</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Notifications</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Referrals</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#00C458'} size={35} />
                        <Text style={styles.contentText}>Share app</Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.contentView}>
                    <View style={styles.content}>
                        <Icon name="check-box-outline-blank" color={'#E14949'} size={35} />
                        <Text style={styles.contentLogoutText}>Logout</Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.buttonText}>Enquire now</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#002333',
        paddingLeft:25,
        paddingTop:20
    },
    iconView:{
        alignItems:'center',
        height:50,
        width:50,
        justifyContent:'center'
    },
    iconBorder:{
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:7
    },
    profileView:{
        width:'100%',
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    profilePicHolder:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'#00C458',
        borderWidth:3,
        alignItems:'center',
        justifyContent:'center'
    },
    profilePic:{
        height:70,
        width:70,
        borderRadius:50
    },
    name:{
        fontFamily:'Gilroy ☞',
        color:'#fff',
        fontSize:15,
        fontWeight:'700'
    },
    ID:{
        color:'#6A828E',
        fontFamily:'Gilroy-Regular ☞',
        fontSize:13
    },
    contentView:{
        width:'100%',
        marginTop:20,
    },
    content:{
        flexDirection:'row',
        alignItems:'center'
    },
    contentText:{
        fontFamily:'Gilroy-Regular ☞',
        color:'#FFFFFF',
        fontSize:14,
        marginLeft:16
    },
    contentLogoutText:{
        fontFamily:'Gilroy ☞',
        color:'#E14949',
        fontSize:14,
        marginLeft:16,
        fontWeight:'bold'
    },
    buttonView:{
        // backgroundColor:'red',
        marginTop:90
    },
    button:{
        width:193,
        height:47,
        borderColor:'#00C458',
        borderWidth:2,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'#00C458',
        fontFamily:'Gilroy ☞',
        fontWeight:'700',
        fontSize:14
    }
})