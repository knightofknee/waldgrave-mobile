import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

interface EmailInputProps {
  loginFunction: (email: string) => void; //not sure that I need to pass this in indirectly.
}

export default function EmailInput() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [whichInput, setWhichInput] = useState('email');

  const submitEmail = () => {
    // check if user exists already

    if ('user exists') { //todo
      setWhichInput('password');
    }
    else {
      setWhichInput('signup');
    }
  }

  const submitPassword = () => {
    // check if password is correct
    if ('password is correct') {
      // log user in
      //loginFunction(email);
    }
    else {
      // show error message
    }
  }

  const submitSignup = () => {
    // create user
    // log user in
    //loginFunction
  }

  return (
    <>
    {whichInput == 'email' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email (for login purposes only)"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Enter" color={'#04296B'} onPress={submitEmail} />
    </View>}

    {whichInput == 'password' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log In" color={'#04296B'} onPress={submitPassword} />
    </View>}

    {whichInput == 'signup' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email (for login purposes only)"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign up" color={'#04296B'} onPress={submitSignup} />
    </View>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 195, 230)'
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
