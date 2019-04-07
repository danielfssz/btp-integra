import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "./pages/signIn";
import Main from "./pages/main";

const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: SignIn
  }
});

const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Main
  }
});

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(
    createStackNavigator(
      {
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut",
        headerMode: "none",
        mode: "modal",
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    )
  );
};
