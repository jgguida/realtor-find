import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";

import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashboardCliente from "./pages/dashCliente";
import DashboardCorretor from "./pages/dashCorretor";
import CadastroImovel from "./pages/cadastro-imovel";
import SingleImovel from "./pages/singleImovel";
import Profile from "./pages/profile";

<<<<<<< HEAD
const Routes =
  // (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Corretor: createBottomTabNavigator({
          DashboardCorretor: {
            screen: DashboardCorretor,
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
        }),
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
          Profile: {
            screen: Profile,
            navigationOptions: {
              title: "Perfil",
              tabBarIcon: <Icon name="person" size={20} color={"#4AA3DB"} />
            }
          }
        }),
        Common: createStackNavigator(
          {
            SingleImovel: {
              screen: SingleImovel,
              navigationOptions: {
                title: "Imovel"
              }
            },
            CadastroImovel: {
              screen: CadastroImovel,
              navigationOptions: {
                title: "Cadastrar Imóvel"
              }
            }
          },
          {
            defaultNavigationOptions: {
              headerTintColor: "#fff",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#003f5c"
              }
            }
          }
        )
      }
      // {
      //   initialRouteName: signedIn ? "Corretor" : "Sign"
      // }
    )
  );

export default Routes;
