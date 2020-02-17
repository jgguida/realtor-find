import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

// import { Container } from './styles';

export default function SingleImovel({ navigation }) {
  const imovel_id = navigation.getParam("imovel_id");
  return (
    <View style={styles.container}>
      <View>
        <Text>Imovel {imovel_id}</Text>
      </View>
      <Text style={styles.titulo}>Feedbacks do Imóvel</Text>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View>
          <Text>AGENDA</Text>
        </View>
        <View>
          <Text>Agendamento Marcado</Text>
          <Text>Para o dia: 22/02/2020 às 15:45</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#4AA3DB",
    marginBottom: 30,
    borderBottomColor: "#efefef",
    borderBottomWidth: 2,
    alignItems: "flex-start"
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
