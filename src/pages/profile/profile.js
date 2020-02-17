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

export default function Profile() {
  return (

    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/logo.png")}/>
        <Text style={styles.titulo}>Cristiano</Text>
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
    marginTop: 1,
    marginLeft: 110,
    marginBottom: 30,
    borderBottomColor: "#efefef",
    borderBottomWidth: 2,
    alignItems: "flex-start"
  },
  image: {
    width: 90,
    height: 90,
    marginBottom:30,
    marginTop:40,
    marginLeft:120
  }
});
