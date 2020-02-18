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

export default function DashboardCliente() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seus Feedbacks</Text>

      <View style={styles.inputView}>
        <View style={styles.price}>
          <Text style={styles.priceText}>17</Text>
          <Text>FEV</Text>
          <Text>2020</Text>
        </View>
        <View style={styles.infos}>
          <Text>AGENDAMENTO</Text>
          <Text>Agendamento do imóvel realizado</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={styles.price}>
          <Text style={styles.priceText}>17</Text>
          <Text>FEV</Text>
          <Text>2020</Text>
        </View>
        <View style={styles.infos}>
          <Text>AGENDAMENTO</Text>
          <Text>Agendamento do imóvel realizado</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <View style={styles.price}>
          <Text style={styles.priceText}>17</Text>
          <Text>FEV</Text>
          <Text>2020</Text>
        </View>
        <View style={styles.infos}>
          <Text>AGENDAMENTO</Text>
          <Text>Agendamento do imóvel realizado</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#efefef",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#4AA3DB",
    marginTop: 35,
    marginBottom: 30
  },
  descImovel: {
    padding: 10,
    justifyContent: "flex-start"
  },
  inputView: {
    width: "90%",
    backgroundColor: "#FFFFA5",
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderColor: "#C8C8C8",
    borderWidth: 1
  },
  price: {
    borderRightColor: "#C8C8C8",
    backgroundColor: "#fff",
    borderRightWidth: 1,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    width: "25%"
  },
  priceText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  infos: {
    justifyContent: "center"
  },
  valorImovel: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20
  },
  textValor: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10
  },
  priceValor: {
    fontSize: 17,
    fontWeight: "bold"
  }
});
