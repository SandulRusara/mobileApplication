import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function register(){
  const [dogName, setDogName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    // For now, we'll just show an alert with the form data
    Alert.alert('Dog Registration', `Dog Name: ${dogName}\nBreed: ${breed}\nAge: ${age}\nOwner Name: ${ownerName}\nContact Number: ${contactNumber}\nAddress: ${address}`);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Dog Registration Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Dog Name" placeholderTextColor={'black'}
          value={dogName}
          onChangeText={setDogName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Breed" placeholderTextColor={'black'}
          value={breed}
          onChangeText={setBreed}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Age" placeholderTextColor={'black'}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Owner Name" placeholderTextColor={'black'}
          value={ownerName}
          onChangeText={setOwnerName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contact Number" placeholderTextColor={'black'}
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="phone-pad"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Address" placeholderTextColor={'black'}
          value={address}
          onChangeText={setAddress}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={{color: '#ffffff', fontSize: 22}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000000',
    opacity: 0.5,
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20
  }
});