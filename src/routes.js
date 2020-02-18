import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";

import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashboardCliente from "./pages/dashCliente";
import DashboardCorretor from "./pages/dashCorretor";
import SingleImovel from "./pages/singleImovel";
import Profile from "./pages/profile";

import CadastroImovel from "./pages/cadastro-imovel";
import CadastroStep2 from "./pages/cadastro-imovel/CadastroStep2";
import CadastroStep3 from "./pages/cadastro-imovel/CadastroStep3";
import CadastroStep4 from "./pages/cadastro-imovel/CadastroStep4";

const Routes =
  // (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn: {
            screen: SignIn,
            navigationOptions: {
              title: "Login"
            }
          },
          SignUp: {
            screen: SignUp,
            navigationOptions: {
              title: "Registre-se"
            }
          }
        }),
        Proprietario: createBottomTabNavigator({
          DashboardCliente: {
            screen: DashboardCliente,
            navigationOptions: {
              title: "Dashboard",
              tabBarIcon: <Icon name="home" size={20} color={"#4AA3DB"} />
            }
          },
          CadastroImovel: {
            screen: createStackNavigator({
              CadastroImovel: {
                screen: CadastroImovel,
                navigationOptions: {
                  title: "Cadastrar Imóvel"
                }
              },
              CadastroStep2: {
                screen: CadastroStep2,
                navigationOptions: {
                  title: "Adicionar Detalhes"
                }
              },
              CadastroStep3: {
                screen: CadastroStep3,
                navigationOptions: {
                  title: "Escolha Diferenciais"
                }
              },
              CadastroStep4: {
                screen: CadastroStep4,
                navigationOptions: {
                  title: "Seu Corretor Ideal"
                }
              }
            }),
            navigationOptions: {
              title: "Cadastrar Imóvel",
              tabBarIcon: (
                <Icon name="assignment-turned-in" size={20} color={"#4AA3DB"} />
              )
            }
          },
          Profile: {
            screen: Profile,
            navigationOptions: {
              title: "Perfil",
              tabBarIcon: <Icon name="person" size={20} color={"#4AA3DB"} />
            }
          }
        }),
        Corretor: createBottomTabNavigator({
          DashboardCorretor: {
            screen: createStackNavigator({
              DashboardCorretor: {
                screen: DashboardCorretor,
                title: "Dashboard"
              },
              SingleImovel: {
                screen: SingleImovel,
                navigationOptions: {
                  title: "Imovel"
                }
              }
            }),
            navigationOptions: {
              title: "Dashboard",
              tabBarIcon: <Icon name="home" size={20} color={"#4AA3DB"} />
            }
          },

          Profile: {
            screen: Profile,
            navigationOptions: {
              title: "Perfil",
              tabBarIcon: <Icon name="person" size={20} color={"#4AA3DB"} />
            }
          }
        })
      }
      // {
      //   initialRouteName: signedIn ? "Corretor" : "Sign"
      // }

      // {
      //   defaultNavigationOptions: {
      //     headerTintColor: "#fff",
      //     headerBackTitleVisible: false,
      //     headerStyle: {
      //       backgroundColor: "#003f5c"
      //     }
      //   }
      // }
    )
  );

export default Routes;
