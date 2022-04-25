import React,{Component} from "react";
import {View, Text, StyleSheet} from 'react-native';


export default class Resources extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>NO DATA</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color:'#787775',
        fontFamily:'Gilroy ☞'
    }
})