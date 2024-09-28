import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FeedComponent from '@/components/FeedComponent';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text>Welcome to the Waldgrave home</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={false}>
        {/* Add more content here */}
        <FeedComponent />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Feed" onPress={() => navigation.navigate('home')} />
        <Button title="Create Post" onPress={() => navigation.navigate('createPost')} />
        <Button title="Friends" onPress={() => navigation.navigate('friends')} />
        <Button title="Profile" onPress={() => navigation.navigate('profile')} />
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
    width: '100%',
    borderWidth: 1,
    borderColor: 'blue',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60, // Ensure there's space for the buttons,
    overflow: 'hidden',
    width: '100%',
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
    width: '100%',
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
