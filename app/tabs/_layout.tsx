import Header from "@/components/Header";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View, Text } from "react-native";

export default function TabLayout() {
    return (
        <Tabs initialRouteName='index' screenOptions={{header:()=><Header/>, tabBarStyle:{backgroundColor:'black',opacity:'0.5'}}} >
            <Tabs.Screen name="index" options={{title:'Home',tabBarIcon:()=><Image style={{width:35,height:35}} source={require('../../assets/images/home.png')}></Image>}}/>
            <Tabs.Screen name="details" options={{title:'Detail',tabBarIcon:()=><Image style={{width:35,height:35}} source={require('../../assets/images/detailsIcon.png')}></Image>}}/>
            <Tabs.Screen name="register" options={{title:'Register',tabBarIcon:()=><Image style={{width:35,height:35}} source={require('../../assets/images/formIcon.png')}></Image>}}/>
            <Tabs.Screen name="profile" options={{title:'Profile',tabBarIcon:()=><Image style={{width:35,height:35}} source={require('../../assets/images/profileIcon.png')}></Image>}}/>
        </Tabs>
    );
}