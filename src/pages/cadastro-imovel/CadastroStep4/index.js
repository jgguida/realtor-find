import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function CadastroStep4({ navigation }) {
  const [step, setStep] = useState(1);
  const [check, setCheck] = useState(false);

  const handleDashboard = () => {
    navigation.navigate("DashboardCliente");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Seu Corretor Ideal</Text>

      {step === 1 && (
        <>
          <View style={styles.inputViewText}>
            <Text>
              Para melhor entender o seu imóvel e te indicar o seu corretor
              ideal. Escolha as opções que mais tem à ver com o seu imóvel.
            </Text>
          </View>
          <View style={styles.step}>
            <View style={styles.stepInt}>
              <Image
                style={{ width: 165, height: 165 }}
                source={require("../../../../assets/corretor-paulosilva.png")}
              />
              <Text style={styles.stepNome}>Paulo Silva</Text>
              <Text style={styles.stepCreci}>CRECI: 45689</Text>
              <TouchableOpacity
                style={styles.btnStep}
                onPress={() => setStep(2)}
              >
                <Text style={styles.btnStepText}>Ver Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.stepInt}>
              <Image
                style={{ width: 165, height: 165 }}
                source={require("../../../../assets/corretor-diegosouza.png")}
              />
              <Text style={styles.stepNome}>Paulo Silva</Text>
              <Text style={styles.stepCreci}>CRECI: 45689</Text>
              <TouchableOpacity
                style={styles.btnStep}
                onPress={() => setStep(3)}
              >
                <Text style={styles.btnStepText}>Ver Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {step === 2 && (
        <View style={styles.step}>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/corretor-paulosilva.png")}
            />
            {check ? (
              <>
                <Image
                  style={{ width: 96, height: 96 }}
                  source={require("../../../../assets/check.png")}
                />
                <Text style={styles.stepNome}>Meus Parabéns</Text>

                <Text style={styles.stepPerfilText}>
                  Você escolheu o seu Corretor ideal, em breve ele deverá entrar
                  em contato.
                </Text>

                <TouchableOpacity
                  style={styles.btnStep}
                  onPress={() => handleDashboard()}
                >
                  <Text style={styles.btnStepText}>Voltar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.stepNome}>Paulo Silva</Text>
                <Text style={styles.stepCreci}>CRECI: 45689</Text>

                <Text style={styles.stepPerfilText}>
                  Para melhor entender o seu imóvel e te indicar o seu corretor
                  ideal. Escolha as opções que mais tem à ver com o seu imóvel.
                </Text>

                <TouchableOpacity
                  style={styles.btnStep}
                  onPress={() => setCheck(true)}
                >
                  <Text style={styles.btnStepText}>Escolher Corretor</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}

      {step === 3 && (
        <View style={styles.step}>
          <View style={styles.stepInt}>
            <Image
              style={{ width: 165, height: 165 }}
              source={require("../../../../assets/corretor-diegosouza.png")}
            />
            {check ? (
              <>
                <Image
                  style={{ width: 96, height: 96 }}
                  source={require("../../../../assets/check.png")}
                />
                <Text style={styles.stepNome}>Meus Parabéns</Text>

                <Text style={styles.stepPerfilText}>
                  Você escolheu o seu Corretor ideal, em breve ele deverá entrar
                  em contato.
                </Text>

                <TouchableOpacity
                  style={styles.btnStep}
                  onPress={() => handleDashboard()}
                >
                  <Text style={styles.btnStepText}>Voltar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.stepNome}>Paulo Silva</Text>
                <Text style={styles.stepCreci}>CRECI: 45689</Text>

                <Text style={styles.stepPerfilText}>
                  Para melhor entender o seu imóvel e te indicar o seu corretor
                  ideal. Escolha as opções que mais tem à ver com o seu imóvel.
                </Text>
                <TouchableOpacity
                  style={styles.btnStep}
                  onPress={() => setCheck(true)}
                >
                  <Text style={styles.btnStepText}>Escolher Corretor</Text>
                </TouchableOpacity>
              </>
            )}
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
    padding: 10,
    textAlign: "center",
    alignItems: "center"
  },
  btnStep: {
    marginTop: 10,
    borderColor: "#efefef",
    backgroundColor: "#4AA3DB",
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    textAlign: "center"
  },
  btnStepText: {
    color: "#fff",
    alignSelf: "center"
  },
  stepNome: {
    color: "#929292",
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15
  },
  stepCreci: {
    color: "#929292",
    alignSelf: "center"
  },
  stepPerfilText: {
    color: "#929292",
    alignSelf: "center",
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 15
  }
});
