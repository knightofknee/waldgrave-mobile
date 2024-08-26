import { Text, View, StyleSheet, TextInput, Button, ScrollView,
  Image
 } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
          source={{
            uri: 'https://www.waldgrave.com/thew1.png',
          }}
          style={{width: 200, height: 200}}
        />
      <Text style={styles.welcomeText}>Welcome to the Waldgrave</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address to log in or sign up"
          keyboardType="email-address"
        />
        <Button title="Submit" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    textAlign: 'center',
  },
});
