import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FeedComponent from '@/components/FeedComponent';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <Text>Welcome to the Waldgrave home</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Add more content here */}
        <FeedComponent />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Feed" onPress={() => {}} />
        <Button title="Profile" onPress={() => {}} />
        <Button title="Create Post" onPress={() => {}} />
        <Button title="Friends" onPress={() => {}} />
        <TouchableOpacity style={styles.moreButton} onPress={() => {}}>
          <MaterialIcons name="more-horiz" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 80,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60, // Ensure there's space for the buttons
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff', // Optional: Add a background color
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingBottom: 20,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
