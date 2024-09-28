import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden', // copilotblows
  },
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}
