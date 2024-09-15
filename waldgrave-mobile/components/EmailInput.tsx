import { useEffect, useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig.js';
import React from "react";
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useNavigation } from '@react-navigation/native';

interface EmailInputProps {
  loginFunction: (email: string) => void; //not sure that I need to pass this in indirectly.
}

export default function EmailInput() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [whichInput, setWhichInput] = useState('email');

  const submitEmail = async () => {
    // check if user exists already

    const signinMethods = await fetchSignInMethodsForEmail(auth, email);
    if (signinMethods.length > 0) {
      setWhichInput('password');
    }
    else {
      setWhichInput('signup');
    }
  }

  const submitPassword = () => {
      signInUser(email, password);
  }

  const signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      await AsyncStorage.setItem('user', JSON.stringify(userCredential.user));

      router.push({
        pathname: 'home',
        params: { user: JSON.stringify(userCredential.user) },
      });

    } catch (error) {
      // alert that something went wrong
      console.error('Error signing in:', error);
    }
  };

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      router.push({
        pathname: 'home',
        params: { user: JSON.stringify(userCredential.user) },
      });
    } catch (error) {
      // alert
      console.error('Error creating user:', error);
    }
  };

  const submitSignup = async () => {
    createUser(email, password);
  }

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        router.push({
          pathname: 'home',
          params: { user: JSON.stringify(user) },
        });
      }
    };

    checkUser();
  }, []);

  return (
    <>
    {whichInput == 'email' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email (log in or sign up)"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={submitEmail}
      />
      <Button title="Enter" color={'#04296B'} onPress={submitEmail} />
    </View>}

    {whichInput == 'password' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={submitPassword}
        secureTextEntry={true}
      />
      <Button title="Log In" color={'#04296B'} onPress={submitPassword} />
    </View>}

    {whichInput == 'signup' && <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
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
