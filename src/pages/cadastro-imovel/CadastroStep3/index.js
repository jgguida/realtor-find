import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function CadastroStep3({ navigation }) {
  const [step, setStep] = useState(1);

  const handleStepFour = () => {
    navigation.navigate("CadastroStep4");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Cadastro de Imóvel</Text>

      <View style={styles.inputViewText}>
        <Text>
          Para melhor entender o seu imóvel e te indicar o seu corretor ideal.
          Escolha as opções que mais tem à ver com o seu imóvel.
        </Text>
      </View>
      {step === 1 && (
        <View style={styles.step}>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step1-casa.png")}
            />
            <TouchableOpacity style={styles.btnStep} onPress={() => setStep(2)}>
              <Text style={styles.btnStepText}>Casa</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step1ap.png")}
            />
            <TouchableOpacity style={styles.btnStep} onPress={() => setStep(2)}>
              <Text style={styles.btnStepText}>Apartamento</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 2 && (
        <View style={styles.step}>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step2gourmet.png")}
            />
            <TouchableOpacity style={styles.btnStep} onPress={() => setStep(3)}>
              <Text style={styles.btnStepText}>Espaço Gourmet</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step2quintal.png")}
            />
            <TouchableOpacity style={styles.btnStep} onPress={() => setStep(3)}>
              <Text style={styles.btnStepText}>Quintal</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {step === 3 && (
        <View style={styles.step}>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step3playground.png")}
            />
            <TouchableOpacity
              style={styles.btnStep}
              onPress={() => handleStepFour()}
            >
              <Text style={styles.btnStepText}>Playground</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/step3piscina.png")}
            />
            <TouchableOpacity
              style={styles.btnStep}
              onPress={() => handleStepFour()}
            >
              <Text style={styles.btnStepText}>Piscina</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  inputViewText: {
    width: "80%",
    marginBottom: 20
  },
  step: {
    flexDirection: "row",
    textAlign: "center"
  },
  stepInt: {
    padding: 10
  },
  btnStep: {
    marginTop: 10,
    borderColor: "#efefef",
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    textAlign: "center"
  },
  btnStepText: {
    color: "#4AA3DB",
    alignSelf: "center"
  }
});
