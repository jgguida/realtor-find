import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashboardCliente from "./pages/dashCliente";
import DashboardCorretor from "./pages/dashCorretor";
import CadastroImovel from "./pages/cadastro-imovel";
import SingleImovel from "./pages/singleImovel";
import Profile from "./pages/profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil"

        }
      },
      DashboardCorretor: {
        screen: DashboardCorretor,
        navigationOptions: {
          title: "Dashboard Corretor"
        }
      },
      SignUp: {
        screen: SignUp,
        navigationOptions: {
          title: "Registre-se"
        }
      },
      DashboardCliente: {
        screen: DashboardCliente,
        navigationOptions: {
          title: "Dashboard Cliente"
        }
      },
      CadastroImovel: {
        screen: CadastroImovel,
        navigationOptions: {
          title: "Cadastrar Imóvel"
        }
      },
      SingleImovel: {
        screen: SingleImovel,
        navigationOptions: {
          title: "Cadastrar Imóvel"
        }
      },
      SignIn: {
        screen: SignIn,
        navigationOptions: {
          title: "Login"
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
);

export default Routes;
