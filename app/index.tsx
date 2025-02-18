import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { Route } from "expo-router/build/Route";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.push('/startPage')
 }, 3000);
},[])


return (
 <>
 <View style={styles.container}>
     <View style={styles.divStyle}>
         <Image source={require('../assets/images/loading.png')} />
     </View>
 </View>
 </>
)
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
divStyle:{
 width: 200,
 height: 200,
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center',
 // backgroundColor: '#f8f8f8',
 // borderRadius: 10,
}
});