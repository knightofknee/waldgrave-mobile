import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../components/LoginScreen";
import SignupScreen from "../components/SignupScreen";
import HomeScreen from "../components/HomeScreen";
import { View, Text, Button } from "react-native";
const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <View>
    <Text>Home Screen</Text>
    <Button title="Go to Login" onPress={() => {}} />
    <Button title="Go to Signup" onPress={() => {}} />
  </View>
  );
}
