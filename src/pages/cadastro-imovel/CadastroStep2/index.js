import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

// import { Container } from './styles';

export default function CadastroStep2({ navigation }) {
  const handleStepTree = () => {
    navigation.navigate("CadastroStep3");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Cadastro de Imóvel</Text>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Tipo de imóvel"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Metragem (m²)"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputViewText}>
        <Text>
          Nos indique sua espectativa de valor para seu imóvel. Lembrando que o
          corretor irá efetuar uma avaliação do seu imóvel.
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Espectativa de Valor"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => handleStepTree()}
      >
        <Text style={styles.loginText}>SALVAR</Text>
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
    fontSize: 20,
    color: "#4AA3DB",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "#838383",
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputViewText: {
    width: "80%",
    marginBottom: 20
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
