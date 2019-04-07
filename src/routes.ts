import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import SignIn from "./pages/signIn";
import Main from "./pages/main";
import NotAllowedTime from "./pages/notAllowedTime";
import Perfil from "./pages/perfil";

const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: SignIn
  }
});

const SignedInRoutes = createStackNavigator(
  {
    Logged: {
      screen: Main
    },
    Perfil
  },
  {
    headerMode: "none"
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignedIn: { screen: SignedInRoutes },
        NotAllowedTime,
        Perfil: { screen: Perfil }, //tirar
        SignedOut: { screen: SignedOutRoutes }
      },
      {
        // initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        initialRouteName: "Perfil"
      }
    )
  );
};
