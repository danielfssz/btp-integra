import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import SignIn from "./pages/signIn";
import Main from "./pages/main";
import NotAllowedTime from "./pages/notAllowedTime";

const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: SignIn
  }
});

const SignedInRoutes = createStackNavigator(
  {
    Logged: {
      screen: Main
    }
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
        SignedOut: { screen: SignedOutRoutes }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    )
  );
};
