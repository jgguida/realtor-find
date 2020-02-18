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

export default function DashboardCorretor({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seus Imóveis</Text>
      <TouchableOpacity
        style={styles.inputView}
        onPress={() => {
          navigation.navigate("SingleImovel", {
            imovel_id: "João Jacinto"
          });
        }}
      >
        <View style={styles.infos}>
          <Text>João Jacinto</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Ultima Feedback: 17/02/2020</Text>
        </View>
        <View style={styles.price}>
          <Text>Valor imóvel</Text>
          <Text style={styles.priceText}>R$ 1.500.000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inputView}
        onPress={() => {
          navigation.navigate("SingleImovel", {
            imovel_id: "João Jacinto"
          });
        }}
      >
        <View style={styles.infos}>
          <Text>João Jacinto</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Ultima Feedback: 17/02/2020</Text>
        </View>
        <View style={styles.price}>
          <Text>Valor imóvel</Text>
          <Text style={styles.priceText}>R$ 1.500.000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inputView}
        onPress={() => {
          navigation.navigate("SingleImovel", {
            imovel_id: "João Jacinto"
          });
        }}
      >
        <View style={styles.infos}>
          <Text>João Jacinto</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Ultima Feedback: 17/02/2020</Text>
        </View>
        <View style={styles.price}>
          <Text>Valor imóvel</Text>
          <Text style={styles.priceText}>R$ 1.500.000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inputView}
        onPress={() => {
          navigation.navigate("SingleImovel", {
            imovel_id: "João Jacinto"
          });
        }}
      >
        <View style={styles.infos}>
          <Text>João Jacinto</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Ultima Feedback: 17/02/2020</Text>
        </View>
        <View style={styles.price}>
          <Text>Valor imóvel</Text>
          <Text style={styles.priceText}>R$ 1.500.000</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inputView}
        onPress={() => {
          navigation.navigate("SingleImovel", {
            imovel_id: "João Jacinto"
          });
        }}
      >
        <View style={styles.infos}>
          <Text>João Jacinto</Text>
          <Text>Avenida das Dores, Jd. Amado</Text>
          <Text>São Paulo - SP</Text>
          <Text>Ultima Feedback: 17/02/2020</Text>
        </View>
        <View style={styles.price}>
          <Text>Valor imóvel</Text>
          <Text style={styles.priceText}>R$ 1.500.000</Text>
        </View>
      </TouchableOpacity>
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
    marginBottom: 30,
    alignSelf: "center",
    borderBottomColor: "#7DCAFB",
    borderBottomWidth: 2,
    alignItems: "flex-start"
  },
  inputView: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: "5%",
    borderColor: "#C8C8C8",
    borderWidth: 1
  },
  price: {
    borderLeftColor: "#C8C8C8",
    borderLeftWidth: 1,
    justifyContent: "center",
    padding: 10,
    alignItems: "center"
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold"
  }
});
