import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput  } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const HelpForm = ({ visible, onClose }: any) => {
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
                        <Text style={styles.label}>heydoggy@gmail.com</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>"Welcome to Hey Doggy's Help and Support! We're here to ensure you and your furry friend have the best experience possible. Our team is dedicated to providing you with comprehensive assistance for any questions or issues you might encounter. Whether you need help navigating the app, managing your dog's profile, or scheduling appointments, we've got you covered. Explore our detailed FAQs, step-by-step guides, and troubleshooting tips. If you need further assistance, don't hesitate to reach out to our friendly support team via email or live chat. We're here to help you every step of the way, making your journey with Hey Doggy smooth and enjoyable."</Text>
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

export default HelpForm;