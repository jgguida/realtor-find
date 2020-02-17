import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashboardCliente from "./pages/dashCliente";
import DashboardCorretor from "./pages/dashCorretor";
import CadastroImovel from "./pages/cadastro-imovel";
import SingleImovel from "./pages/singleImovel";
import Profile from "./pages/profile";

const Routes = createAppContainer(
  createSwitchNavigator({
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
    Corretor: createBottomTabNavigator({
      DashboardCorretor: {
        screen: DashboardCorretor,
        navigationOptions: {
          title: "Dashboard"
        }
      },

      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil"
        }
      }
    }),
    Proprietario: createBottomTabNavigator({
      DashboardCliente: {
        screen: DashboardCliente,
        navigationOptions: {
          title: "Dashboard"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil"
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
  })
);

export default Routes;
