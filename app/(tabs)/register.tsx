// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
//
// export default function register(){
//   const [dogName, setDogName] = useState('');
//   const [breed, setBreed] = useState('');
//   const [age, setAge] = useState('');
//   const [ownerName, setOwnerName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [address, setAddress] = useState('');
//
//   const handleSubmit = () => {
//     // For now, we'll just show an alert with the form data
//     Alert.alert('Dog Registration', `Dog Name: ${dogName}\nBreed: ${breed}\nAge: ${age}\nOwner Name: ${ownerName}\nContact Number: ${contactNumber}\nAddress: ${address}`);
//   };
//
//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Dog Registration Form</Text>
//
//         <TextInput
//           style={styles.input}
//           placeholder="Dog Name" placeholderTextColor={'black'}
//           value={dogName}
//           onChangeText={setDogName}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Breed" placeholderTextColor={'black'}
//           value={breed}
//           onChangeText={setBreed}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Age" placeholderTextColor={'black'}
//           value={age}
//           onChangeText={setAge}
//           keyboardType="numeric"
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Owner Name" placeholderTextColor={'black'}
//           value={ownerName}
//           onChangeText={setOwnerName}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Contact Number" placeholderTextColor={'black'}
//           value={contactNumber}
//           onChangeText={setContactNumber}
//           keyboardType="phone-pad"
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Address" placeholderTextColor={'black'}
//           value={address}
//           onChangeText={setAddress}
//         />
//
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={{color: '#ffffff', fontSize: 22}}>Submit</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </GestureHandlerRootView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   scrollContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#000000',
//     opacity: 0.5,
//     paddingVertical: 10,
//     borderRadius: 5,
//     paddingHorizontal: 20
//   }
// });
//
// import React, { useState } from "react";
// import { View, Text, TextInput, Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import axios from "axios";
//
// export default function Register() {
//   const [dogName, setDogName] = useState("");
//   const [breed, setBreed] = useState("");
//   const [age, setAge] = useState("");
//   const [ownerName, setOwnerName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [address, setAddress] = useState("");
//
//   const handleSubmit = async () => {
//     const formData = { dogName, breed, age, ownerName, contactNumber, address };
//
//     try {
//       const response = await axios.post("http://localhost:5000/api/dog", formData);
//       Alert.alert("Success", response.data.message);
//     } catch (error) {
//       Alert.alert("Error", error.response?.data?.error || "Something went wrong!");
//     }
//   };
//
//   return (
//       <GestureHandlerRootView style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <Text style={styles.title}>Dog Registration Form</Text>
//
//           <TextInput style={styles.input} placeholder="Dog Name" value={dogName} onChangeText={setDogName} />
//           <TextInput style={styles.input} placeholder="Breed" value={breed} onChangeText={setBreed} />
//           <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
//           <TextInput style={styles.input} placeholder="Owner Name" value={ownerName} onChangeText={setOwnerName} />
//           <TextInput style={styles.input} placeholder="Contact Number" value={contactNumber} onChangeText={setContactNumber} keyboardType="phone-pad" />
//           <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
//
//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </GestureHandlerRootView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16 },
//   scrollContainer: { alignItems: "center" },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   input: { width: "100%", padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: "#000", opacity: 0.8, paddingVertical: 10, borderRadius: 5, paddingHorizontal: 20 },
//   buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
// });

import React, { useState } from "react";
import {
  View, Text, TextInput, Alert, ScrollView, StyleSheet, TouchableOpacity
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios from "axios";

export default function Register() {
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    const formData = { dogName, breed, age, ownerName, contactNumber, address };

    try {
      const response = await axios.post("http://localhost:5000/api/dog", formData);
      Alert.alert("✅ Success", response.data.message);
    } catch (error) {
      Alert.alert("❌ Error", error.response?.data?.error || "Something went wrong!");
    }
  };

  return (
      <GestureHandlerRootView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* Title */}
          <Text style={styles.title}>🐶 Dog Registration Form</Text>

          {/* Input Fields */}
          {[
            { placeholder: "Dog Name", value: dogName, setValue: setDogName },
            { placeholder: "Breed", value: breed, setValue: setBreed },
            { placeholder: "Age", value: age, setValue: setAge, keyboardType: "numeric" },
            { placeholder: "Owner Name", value: ownerName, setValue: setOwnerName },
            { placeholder: "Contact Number", value: contactNumber, setValue: setContactNumber, keyboardType: "phone-pad" },
            { placeholder: "Address", value: address, setValue: setAddress }
          ].map((field, index) => (
              <View key={index} style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChangeText={field.setValue}
                    keyboardType={field.keyboardType || "default"}
                />
              </View>
          ))}

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>🚀 Submit</Text>
          </TouchableOpacity>

        </ScrollView>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E3F2FD", padding: 16 },
  scrollContainer: { alignItems: "center", paddingBottom: 20 },

  title: {
    fontSize: 26, fontWeight: "bold", color: "#1A237E",
    marginBottom: 20, textAlign: "center"
  },

  inputContainer: { width: "100%", marginBottom: 15 },

  input: {
    width: "100%", padding: 12, borderWidth: 1.5, borderColor: "#3949AB",
    borderRadius: 8, backgroundColor: "#FFFFFF", fontSize: 16,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 3, elevation: 2
  },

  button: {
    backgroundColor: "#3949AB", paddingVertical: 12, borderRadius: 8,
    width: 200, alignItems: "center", shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, elevation: 5
  },

  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

