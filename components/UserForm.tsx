// ModalPopup.js

import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const UserForm = ({ visible, onClose }: any) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
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
              <Text style={styles.title}>Fill This Form</Text>
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
          <View
          style={styles.form}
          >
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
            />
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
            />
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your message"
            />
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={{color: 'black', fontSize: 22}}>Submit</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </Modal>
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
    marginBottom: 5,
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

export default UserForm;