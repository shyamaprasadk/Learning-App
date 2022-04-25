import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Biology2Header() {
    return (
        <View style={styles.container}>
            <View style={styles.headerTitleView}>
                <View style={styles.iconBorder}>
                    <Icon name="arrow-back-ios" size={20} color={'#00C458'}
                    onPress={()=> this.props.navigation.navigate('Biology')} />
                </View>
                <View style={styles.headerText}>
                <Text style={styles.headerTitle}>Biology</Text>
                </View>
            </View>

            <View style={styles.longChapterView}>
                <Text style={styles.longChapter}>Long chapter name can be shown here.</Text>
            </View>
            <View style={styles.chaptersView}>
                <View style={styles.iconView}>
                    <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                    <Text style={styles.chapterText}>Chapters 1</Text>
                </View>
                <View style={styles.iconView}>
                    <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                    <Text style={styles.chapterText}>3 Parts</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,

        backgroundColor: '#00202F',
        paddingLeft: 15,
        paddingTop: 20

    },
    iconBorder: {
        height: 32,
        width: 32,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:5
    },
    headerTitle: {
        fontFamily: 'Gilroy ☞',
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
    headerTitleView: {
        width:'100%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems:"center",
        marginBottom:10
    },
    headerText:{
        width:'70%',
        alignItems:"center",
        justifyContent:"center"
    },
    chaptersView: {
        flexDirection: 'row',
        height: 40,
        width: 250,
    },
    chapterText: {
        color: '#00C458',
        fontFamily: 'Gilroy ☞',
        fontSize: 12,
        paddingLeft:10
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '50%',
        alignSelf: 'flex-start'
    },
    longChapterView:{
        width:'80%',
        height:50,
        justifyContent:"center",
        marginTop:10
    },
    longChapter:{
        fontSize:20,
        color:'#FFFFFF'
    }
})
