import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput  } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const DoctorDetails = ({ visible, onClose }: any) => {
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
                        <Text style={styles.label}>Dr. Namal,</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>"As a dedicated pet care doctor, I bring extensive qualifications and experience in veterinary medicine, specializing in comprehensive pet care. My expertise includes treating a variety of animals, with a particular focus on preventive care and diagnostics. I have specialized training in exotic animal care and emergency services, which allows me to handle a wide range of medical situations. My approach to pet wellness emphasizes compassionate and individualized care, ensuring each pet receives the best possible treatment. I offer unique services such as behavioral counseling and advanced surgical procedures, all aimed at promoting the health and well-being of pets. My commitment to continuous learning and staying updated with the latest veterinary advancements ensures that I provide top-notch care to all my patients."</Text>
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

export default DoctorDetails;