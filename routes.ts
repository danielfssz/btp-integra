import { createStackNavigator, createAppContainer } from "react-navigation";

import SignIn from "./src/pages/signIn";
// import SignUp from './pages/signUp';
// import Main from './pages/main';

const Routes = createStackNavigator({
  SignIn
  //   SignUp,
  //   Main
});

const AppContainer = createAppContainer(Routes);

export default AppContainer;
