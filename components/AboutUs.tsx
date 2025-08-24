import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput  } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const AboutUs = ({ visible, onClose }: any) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        ><View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            width: "100%",
                            marginBottom: 10,
                            position: "relative",
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "100%",
                                marginBottom: 10,
                                position: "absolute",
                            }}
                        >
                            <Text style={styles.title}>Doctor Details</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginBottom: 10,
                                position: "absolute",
                            }}
                        >
                            <TouchableOpacity style={styles.button} onPress={onClose}>
                                <TabBarIcon name="close" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>"Welcome to Hey Doggy! We are passionate about enhancing the lives of dogs and their owners through innovative and user-friendly solutions. Our app is designed to be your go-to resource for all things dog-related, offering a comprehensive platform that caters to the diverse needs of dog enthusiasts everywhere.

At Hey Doggy, we understand the deep bond between you and your furry friend. Our mission is to provide you with the tools and support you need to ensure your dog’s health, happiness, and well-being. From managing your dog's profile and tracking their health records to finding local services and connecting with a community of dog lovers, Hey Doggy is here to make your life easier and more enjoyable.

Our team consists of dedicated pet care professionals, tech experts, and dog lovers who are committed to delivering the best possible experience for you and your pet. We continuously strive to innovate and improve our app based on user feedback and the latest trends in pet care.

Thank you for choosing Hey Doggy. We look forward to being a part of your journey and helping you provide the best care for your beloved canine companion.

"</Text>
                </View>

            </View>
        </View>
    </Modal >
  );
};

const styles = StyleSheet.create({
    modalBackground: {
        position: "relative",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        width: 400,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: "bold",
    },
    button: {
        borderRadius: 5,
        padding: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    form: {
        padding: 20,
        width: "100%",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
});

export default AboutUs;