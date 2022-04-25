import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'

import Register from "./src/Register";
import OTP from "./src/OTP";
import StudentDetails from "./src/StudentDetails";
import SchoolBoard from "./src/SchoolBoard";
import AppTour from "./src/AppTour";
import Home from "./src/Tab/Home"
import DrawerContent from "./src/Drawer/DrawerContent"
import Profile from "./src/Tab/Profile";
import Biology from "./src/Biology";
import Video from "./src/Video";
import ProfileHeader from "./src/Functions/ProfileHeader";
import BiologyHeader from "./src/Functions/BiologyHeader";
import Biology2Header from './src/Functions/Biology2Header';
import Header from "./src/Functions/Header";
import Chapter from './src/Tab/TopTab/Chapter';
import ChapterTest from './src/Tab/TopTab/Chapter Test';
import QNBank from './src/Tab/TopTab/QN Bank';
import Resources from './src/Tab/TopTab/Resources';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()


function NewStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}} />
      <Stack.Screen
        name='OTP'
        component={OTP}
        options={{headerShown:false}} />
      <Stack.Screen
        name='StudentDetails'
        component={StudentDetails}
        options={{headerShown:false}} />
      <Stack.Screen
        name='SchoolBoard'
        component={SchoolBoard}
        options={{headerShown:false}} />
      <Stack.Screen 
        name="AppTour"
        component={AppTour}
        options={{headerShown:false}} />
      <Stack.Screen
        name="Drawer"
        component={NewDrawer}
        options={{headerShown:false}} />
      <Stack.Screen
        name="Biology"
        component={Biology}
        options={{header:BiologyHeader}}/>
      <Stack.Screen
      name="NewTopTab"
      component={NewTopTab}
      options={{header:Biology2Header}} />
      <Stack.Screen
      name="Video"
      component={Video}
      options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

function NewDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props)=> <DrawerContent {...props}/>}>
      <Drawer.Screen
        name="Tab"
        component={NewTab}
        options={{headerShown:false}}
        />
    </Drawer.Navigator>
  )
}

function NewTab(){
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarLabelStyle:{fontSize:15, fontWeight:'bold'},
        tabBarStyle:{
          position:'absolute',
          bottom:15,
          right:20,
          left:20,
          borderRadius:15,
          height:65,
          shadowOpacity:.25
        }
      }} >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          header:Header,
          tabBarActiveTintColor:'#00C458',
          tabBarInactiveTintColor:'grey',
          tabBarIcon: ({focused})=> focused ?
          <Icon name="home" size={35} color={'#00C458'}/> :
          <Icon name="home" size={25} color={'grey'}/>
        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header:ProfileHeader,
          tabBarActiveTintColor:'#00C458',
          tabBarInactiveTintColor:'grey',
          tabBarIcon:({focused})=> focused ? 
          <Icon name="person" size={35} color={'#00C458'} /> :
           <Icon name="person" size={25} color={'grey'}/>
        }}/>
    </Tab.Navigator>
  )
}

function NewTopTab(){
  return(
    <TopTab.Navigator screenOptions={{
      tabBarStyle:{
        backgroundColor:'#00202F',
      },
      tabBarIndicatorStyle:{
        borderWidth:3,
        borderColor:'#00C458',
        borderRadius:50
      }
    }}>
      <TopTab.Screen
        name="Chapter"
        component={Chapter}
        options={{
          tabBarLabelStyle:{fontSize:12},
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#9F9F9F',
        }}
        />
        <TopTab.Screen
        name="Chapter Test"
        component={ChapterTest}
        options={{
          tabBarLabelStyle:{fontSize:11},
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#9F9F9F',
        }} />
        <TopTab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarLabelStyle:{fontSize:12},
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#9F9F9F',
        }} />
        <TopTab.Screen
        name="QN Bank"
        component={QNBank}
        options={{
          tabBarLabelStyle:{fontSize:12},
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#9F9F9F',
        }} />
    </TopTab.Navigator>
  )
}



export default function App(){
  return(
    <NavigationContainer>
      <NewStack/>
    </NavigationContainer>
  )
}