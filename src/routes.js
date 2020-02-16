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
      },
      DashboardCliente: {
        screen: DashboardCliente,
        navigationOptions: {
          title: "Dashboard Cliente"
        }
      },
      DashboardCorretor: {
        screen: DashboardCorretor,
        navigationOptions: {
          title: "Dashboard Corretor"
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
