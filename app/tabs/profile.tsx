import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import UserForm from "@/components/UserForm";
import DoctorDetails from "@/components/DoctorDetails";
import HelpForm from "@/components/HelpForm";
import AboutUs from "@/components/AboutUs";

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const [modalVisible1, setModalVisible1] = useState(false);
  const handleButtonPress1 = () => {
    setModalVisible1(true);
  };
  const handleCloseModal1 = () => {
    setModalVisible1(false);
  };

  const [modalVisible2, setModalVisible2] = useState(false);
  
  const handleButtonPress2 = () => {
    setModalVisible2(true);
  };
  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };

  const [modalVisible3, setModalVisible3] = useState(false);
  const handleButtonPress3 = () => {
    setModalVisible3(true);
  };
  const handleCloseModal3 = () => {
    setModalVisible3(false);
  };
  

  
  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.item} onPress={() => handleButtonPress()}>

        <Text style={styles.text}>Your Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handleButtonPress1()}>
        <Text style={styles.text}>Doctor Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handleButtonPress2()}>
        <Text style={styles.text}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => handleButtonPress3()}>
        <Text style={styles.text}>About Us</Text>
      </TouchableOpacity>

      <UserForm visible={modalVisible} onClose={handleCloseModal} />
      <DoctorDetails visible={modalVisible1} onClose={handleCloseModal1} />
      <HelpForm visible={modalVisible2} onClose={handleCloseModal2} />
      <AboutUs visible={modalVisible3} onClose={handleCloseModal3} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    width: '80%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
    fontSize: 18,
  },
});