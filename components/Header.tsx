import { Image, StyleSheet, View ,Text} from "react-native";
import React, { useEffect } from "react";

const Header = () =>{
    return(
        <>
        <View style={styles.container}>
            <Image source={require('../assets/images/Ellipse.png')}/>
            <Text style={styles.word}>Hey Doggy!</Text>
            <Image source={require('../assets/images/leg.png')} />
            <View style={styles.hr}></View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        width: '100%',
        height: 130,
    },
    word: {
        fontSize: 40,
        opacity:0.5
    },
    hr:{
        width: 300,
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'center',
        top: 110,
        left: 50,
        opacity: 0.5,
        zIndex: -1,
        position: 'absolute'  // this is for hiding the hr when navigating back from other pages.
    }
})

export default Header;