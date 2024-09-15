import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function FeedComponent() {

  const params = useLocalSearchParams().user;

  // get feed based on params.email
  return (
    <View>
      <Text>Feeddd</Text>
    </View>
  );
}
