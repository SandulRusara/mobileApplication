// import React from 'react';
// import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
//
// export default function Card({ imageSource, buttonText, onButtonPress }) {
//     return (
//         <View style={styles.card}>
//             <Image source={imageSource} style={styles.cardImage} />
//             <TouchableOpacity style={styles.cardButton} onPress={onButtonPress}>
//                 <Text style={styles.buttonText}>{buttonText}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     card: {
//         width: '45%',  // Adjust width to fit two cards per row with some spacing
//         borderRadius: 10,
//         backgroundColor: '#fff',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 5,
//         alignItems: 'center',
//         padding: 10,
//         margin: 7,
//     },
//     cardImage: {
//         width: '100%',
//         height: 150,
//         borderRadius: 10,
//         marginBottom: 20,
//     },
//     cardButton: {
//         backgroundColor: '#000000',
//         opacity:0.6,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
// });

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ imageSource, buttonText, onButtonPress }) {
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <TouchableOpacity style={styles.cardButton} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '45%',  // Adjust width to fit two cards per row with some spacing
        borderRadius: 12,
        backgroundColor: '#2196F3', // Light blue background for the card
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 6,
        alignItems: 'center',
        padding: 15,
        margin: 10,
    },
    cardImage: {
        width: '100%',
        height: 160,
        borderRadius: 12,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#1565C0', // Darker blue border around the image
    },
    cardButton: {
        backgroundColor: '#1E88E5', // Blue background for the button
        opacity: 0.85,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
