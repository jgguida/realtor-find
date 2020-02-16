import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
// import { Container } from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleRegister = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = () => {
    navigation.navigate("DashboardCorretor");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../../../assets/logo.png")}
      />
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Senha..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => handleLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleRegister()}>
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#4AA3DB",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#efefef",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "#4AA3DB",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#4AA3DB",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  loginText: {
    color: "#fff",
    padding: 10
  },
  registerText: {
    color: "#4AA3DB",
    padding: 10
  }
});
