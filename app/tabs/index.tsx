import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Card from '@/components/card';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function DashboardPage() {
    const router = useRouter();

    const handleButtonPress = (id: number) => () => {
        // Navigate to details page with card ID as query parameter
        router.push(`/details?id=${id}`);
    };


    return (
        <ScrollView>
            <View style={{display:'flex',alignItems:'flex-end',backgroundColor:'white',opacity:0.7}}>
            <AntDesign name="pluscircleo" size={30} color="black" style={{marginRight:20}}/>
            </View>
            
            <View style={styles.container}>
            
            
                <Card
                    imageSource={require('../../assets/images/dog.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(1)}
                />
                <Card
                    imageSource={require('../../assets/images/dog1.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(2)}
                />
                <Card
                    imageSource={require('../../assets/images/dog2.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(3)}
                />
                <Card
                    imageSource={require('../../assets/images/dog3.png')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(4)}
                />
                <Card
                    imageSource={require('../../assets/images/dog4.jpg')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(5)}
                />
                <Card
                    imageSource={require('../../assets/images/dog5.jpg')}
                    buttonText="Read More"
                    onButtonPress={handleButtonPress(6)}
                />
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
});
