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
      <View style={styles.totalView}>
        <View style={styles.descImovel}>
          <Text style={styles.priceText}>Cliente: {imovel_id}</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Último Feedback: 17/02/2020</Text>
          <Text>Tipo: Apartamento</Text>
          <Text>Metragem: 250m²</Text>
          <View style={styles.valorImovel}>
            <Text style={styles.textValor}>Valor:</Text>
            <Text style={styles.priceValor}>R$ 1.500.00</Text>
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
    marginTop: 15,
    marginBottom: 30,
    alignSelf: "center",
    borderBottomColor: "#7DCAFB",
    borderBottomWidth: 2,
    alignItems: "flex-start"
  },
  totalView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginLeft: "5%",
    borderColor: "#C8C8C8",
    borderWidth: 1
  },
  descImovel: {
    padding: 10,
    justifyContent: "flex-start"
  },
  inputView: {
    width: "100%",
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
